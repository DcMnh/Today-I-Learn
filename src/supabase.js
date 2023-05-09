import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfpwmjaghfhhmgttzont.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcHdtamFnaGZoaG1ndHR6b250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNzM1NDMsImV4cCI6MTk5ODY0OTU0M30.Y0hMZahY307xO9nCobQQLSdNMfEAoIpnnSZVnuB8eb4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
