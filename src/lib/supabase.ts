// Supabase.ts: Herramienta que nos permitirá hablar con la base de datos

import { createClient } from '@supabase/supabase-js';

// Usamos el operador "!" para decirle a TypeScript que estamos seguros de que estas variables existen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// Exportamos una única instancia del cliente para usar en toda la app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);