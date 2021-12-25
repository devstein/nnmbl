import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;

const anonRoleKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;

export const browserClient = createClient(url, anonRoleKey);
export const serverClient = createClient(url, serviceRoleKey);
