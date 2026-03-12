// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztvzrebezehnicxaumdy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dnpyZWJlemVobmljeGF1bWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NTE0MjMsImV4cCI6MjA4NDMyNzQyM30.NRtFsrNdyM1xjobrnoJCjy-ht-fIcTRWAeM8EgCV3hs'; 
export const supabase = createClient(supabaseUrl, supabaseKey);
