import { getRubros } from '@/services/rubros';

export default async function Home() {

  // Obtenemos los datos ANTES de que la página llegue al navegador del usuario
  const rubros = await getRubros();

  return (
    <main className="container mx-auto p-8 max-w-5xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Guía Comercial Chivilcoy
        </h1>
        <p className="text-lg text-gray-600">
          Encuentra los mejores comercios y servicios de la ciudad.
        </p>
      </header>

      {/* Grilla de Rubros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rubros?.map((rubro) => (
          <div
            key={rubro.id}
            className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {/* Aquí luego podemos agregar el icono si lo cargamos en la BD */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                {rubro.nombre.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{rubro.nombre}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
