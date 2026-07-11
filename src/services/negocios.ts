// Negocios.ts: Lógica para pedir la lista de negocios a Supabase

import { supabase } from '@/lib/supabase';

export async function getNegocios(categoriaID: string) {

    const { data, error } = await supabase
        .from('negocios')
        .select('id, nombre, descripcion, direccion, telefono')
        .eq('categoria_id', categoriaID)
        .order('nombre', { ascending: true }); // Los ordenamos alfabéticamente

    if (error) {
        console.error('Error al obtener negocios:', error);
        throw new Error('No se pudieron cargar los negocios');
    }

    //console.log("data", data);

    return data;
}