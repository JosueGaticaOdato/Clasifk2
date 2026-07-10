// Rubros.ts: Lógica para pedir la lista de rubros a Supabase

import { supabase } from '@/lib/supabase';

export async function getRubros() {
    // let data = [{
    //     "id": "1",
    //     "nombre": "a",
    //     "slug": "b",
    //     "icono": "a",
        
    // }];
    const { data, error } = await supabase
        .from('rubros')
        .select('id, nombre, slug, icono')
        .order('nombre', { ascending: true }); // Los ordenamos alfabéticamente

    if (error) {
        console.error('Error al obtener rubros:', error);
        throw new Error('No se pudieron cargar los rubros');
    }
    console.log("data", data);

    return data;
}