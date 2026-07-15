import { getCategoria, getCategorias } from "@/services/categorias";
import { getNegocios } from "@/services/negocios";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default async function Categoria({ params }: { params: { slug: string } }) {

    const { slug } = await params;
    let categoria = getCategoria(slug);
    let negocios = getNegocios(categoria.id);

    return (
        <main className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-12">

            {/* Buscador */}
            <section className="mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-black mb-6 uppercase leading-tight text-on-background">
                    Resultados para:{' '}
                    <span className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-secondary-fixed/50 px-3 py-1">
                        {/* {searchFromUrl ? `"${searchFromUrl}"` : activeCategory ? activeCategory.nombre : 'Todos los Comercios'} */}
                    </span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link
                        // href={activeCategory ? `/rubro/${activeCategory.rubroId}` : '/'}
                        href="/"
                        className="bg-tertiary text-on-tertiary font-label text-sm font-bold border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-4 hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {/* {activeCategory ? 'Volver a Categorías' : 'Volver al Inicio'} */}
                    </Link>

                    <div className="flex-grow flex items-center bg-white border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-4">
                        <Search className="text-primary mr-4 w-6 h-6" />
                        <div className="text-on-background font-headline text-lg uppercase font-black">
                            {/* {filteredComercios.length} {filteredComercios.length === 1 ? 'comercio encontrado' : 'comercios encontrados'} en Chivilcoy */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid layout Categorias */}

            <section className="flex flex-col lg:flex-row gap-8">

                {/* Filtros */}
                <article>
                    
                </article>

                {/* Resultados */}
                <article className="w-full lg:w-3/4">

                </article>


            </section>
        </main>
    )

}