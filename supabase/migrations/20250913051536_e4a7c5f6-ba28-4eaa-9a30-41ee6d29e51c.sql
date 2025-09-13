-- Fix critical security issue: Restrict contact submissions access to admin users only
-- Drop the overly permissive policy that allows any authenticated user to view all submissions
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;

-- Create a more secure policy that only allows admin users to view submissions
-- For now, we'll restrict to service role only until proper admin roles are implemented
CREATE POLICY "Only service role can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.role() = 'service_role');

-- Alternative: If you need admin users to access via the app, uncomment the lines below
-- and implement a proper user roles system first:
/*
-- First create user roles system (uncomment if needed):
-- CREATE TYPE public.app_role AS ENUM ('admin', 'user');
-- 
-- CREATE TABLE public.user_roles (
--     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--     user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
--     role app_role NOT NULL,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
--     UNIQUE (user_id, role)
-- );
-- 
-- ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
-- 
-- CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
-- RETURNS boolean
-- LANGUAGE sql
-- SECURITY DEFINER
-- STABLE
-- SET search_path = public
-- AS $$
--   SELECT EXISTS (
--     SELECT 1 FROM public.user_roles 
--     WHERE user_roles.user_id = $1 AND role = 'admin'
--   );
-- $$;
-- 
-- -- Then use this policy instead:
-- CREATE POLICY "Only admin users can view contact submissions" 
-- ON public.contact_submissions 
-- FOR SELECT 
-- USING (public.is_admin(auth.uid()));
*/