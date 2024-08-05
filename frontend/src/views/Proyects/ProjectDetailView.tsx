export default function ProyectDetailView() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        

        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Caso de exito
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Resumen del caso de éxito
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                  Año:
                  <span className="mx-3 text-blue-600 font-sans">1983</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                  Industria:

                  <span className="mx-3 text-blue-600 font-sans">Utilities</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                  Servicio: 
                  <span className="mx-3  text-blue-600 font-sans">Auditoría</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                  Satisfacción: 
                  <span className="mx-3  text-blue-600 font-sans">Muy alta</span>
                </div>

                
                
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </header>
    </>
  );
}
