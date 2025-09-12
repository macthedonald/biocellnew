import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  primaryHealthConcern?: string;
  additionalInfo?: string;
  agreeToComms: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Received contact form submission:", formData);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store the submission in the database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        primary_health_concern: formData.primaryHealthConcern,
        additional_info: formData.additionalInfo,
        agree_to_comms: formData.agreeToComms,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    console.log("Stored submission in database:", submission);

    // Send notification email to info@biocellrx.com
    const emailHtml = `
      <h2>New Contact Form Submission - BioCellRX</h2>
      <p><strong>Submission ID:</strong> ${submission.id}</p>
      <p><strong>Submitted:</strong> ${new Date(submission.created_at).toLocaleString()}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      
      <h3>Health Information</h3>
      <p><strong>Primary Health Concern:</strong> ${formData.primaryHealthConcern || 'Not specified'}</p>
      
      <h3>Additional Information</h3>
      <p>${formData.additionalInfo || 'None provided'}</p>
      
      <h3>Communication Preferences</h3>
      <p><strong>Agrees to communications:</strong> ${formData.agreeToComms ? 'Yes' : 'No'}</p>
      
      <hr>
      <p><small>This notification was sent automatically from the BioCellRX website contact form.</small></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "BioCellRX Website <onboarding@resend.dev>",
      to: ["info@biocellrx.com"],
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({
        success: true,
        submissionId: submission.id,
        emailId: emailResponse.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);