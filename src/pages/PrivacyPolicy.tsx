import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Users } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal Information: When you contact us, schedule consultations, or use our services, we may collect personal information such as your name, email address, phone number, medical history, and health-related information.",
        "Website Usage Data: We collect information about how you use our website, including your IP address, browser type, operating system, pages visited, and time spent on our site.",
        "Cookies and Tracking: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.",
        "Communication Records: We maintain records of our communications with you, including emails, phone calls, and consultation notes."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide Services: To deliver regenerative medicine services, consultations, and support.",
        "Communication: To respond to your inquiries, schedule appointments, and provide updates about our services.",
        "Website Improvement: To analyze website usage and improve user experience.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
        "Marketing: With your consent, to send you information about our services, research, and health-related content."
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing and Disclosure",
      content: [
        "Healthcare Providers: We may share your information with qualified healthcare professionals and laboratories as necessary for your treatment.",
        "Service Providers: We work with trusted third-party service providers who assist in operating our website and providing services.",
        "Legal Requirements: We may disclose information when required by law, court order, or to protect our rights and safety.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        "Consent: We will not sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent."
      ]
    },
    {
      icon: Users,
      title: "Data Security and Retention",
      content: [
        "Security Measures: We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "Data Retention: We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
        "Medical Records: Health-related information is retained in accordance with applicable healthcare regulations and professional standards.",
        "Secure Transmission: All sensitive data is transmitted using secure, encrypted connections."
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your privacy is important to us. This Privacy Policy explains how BioCellRx collects, 
                uses, and protects your personal information when you use our website and services.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/">
                  <Button variant="outline" className="mb-6">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BioCellRx ("we," "our," or "us") is committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy describes how we collect, use, disclose, and 
                    safeguard your information when you visit our website at{" "}
                    <a href="https://biocellrx.com" className="text-accent hover:text-accent/80 underline">
                      biocellrx.com
                    </a>{" "}
                    or use our regenerative medicine services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our website or services, you agree to the collection and use of information in accordance 
                    with this Privacy Policy. If you do not agree with our policies and practices, please do not use 
                    our website or services.
                  </p>
                </CardContent>
              </Card>

              {/* Main Sections */}
              {sections.map((section, index) => (
                <Card key={index} className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold text-foreground">
                      <section.icon className="w-6 h-6 text-accent mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}

              {/* Cookies Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="list-disc">Essential Cookies: Necessary for website functionality and cannot be disabled</li>
                    <li className="list-disc">Analytics Cookies: Help us understand how visitors interact with our website</li>
                    <li className="list-disc">Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness</li>
                    <li className="list-disc">Preference Cookies: Remember your settings and preferences for future visits</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookie preferences through your browser settings or our cookie consent banner.
                  </p>
                </CardContent>
              </Card>

              {/* Your Rights Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="list-disc"><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li className="list-disc"><strong>Correction:</strong> Request that we correct inaccurate or incomplete information</li>
                    <li className="list-disc"><strong>Deletion:</strong> Request that we delete your personal information, subject to legal requirements</li>
                    <li className="list-disc"><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                    <li className="list-disc"><strong>Objection:</strong> Object to the processing of your personal information for certain purposes</li>
                    <li className="list-disc"><strong>Restriction:</strong> Request that we limit the processing of your information</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>BioCellRx</strong></p>
                    <p>Email: <a href="mailto:info@biocellrx.com" className="text-accent hover:text-accent/80">info@biocellrx.com</a></p>
                    <p>Phone: <a href="tel:+18585197305" className="text-accent hover:text-accent/80">(858) 519-7305</a></p>
                    <p>Website: <a href="https://biocellrx.com" className="text-accent hover:text-accent/80">biocellrx.com</a></p>
                  </div>
                </CardContent>
              </Card>

              {/* Changes to Policy */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                    new Privacy Policy on our website and updating the "Last Updated" date. We encourage you to review 
                    this Privacy Policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;