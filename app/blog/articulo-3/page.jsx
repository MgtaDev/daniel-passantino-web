import React from 'react'
import ElBlog from '../../components/blog'
import Sidebar from '../../components/sidebar'

const Articulo3 = () => {
  return (
    <>
    <div className='lg:mx-20'>
    <div class="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid lg:grid-cols-5  gap-y-8 lg:gap-y-0 lg:gap-x-6">

        {/* <!-- Content --> */}
        <div class="lg:col-span-3 lg:ml-14">
          <div class="py-8 lg:pe-8">
            <div class="space-y-5 lg:space-y-8">
              <a class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500" href="#">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to Home
              </a>
    
              <h2 class="text-3xl font-bold lg:text-5xl dark:text-white">Tus Redes Sociales: El Primer Impacto para Conquistar Nuevos Clientes</h2>
    
              <div class="flex items-center gap-x-5">
                <a class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                  Company News
                </a>
                <p class="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">January 18, 2023</p>
              </div>
    
              <p class="text-lg text-gray-800 dark:text-neutral-200">Imagina que tus redes sociales son la vitrina de tu agencia. ¿Qué quieres que tus clientes potenciales vean cuando pasan por delante? ¿Un escaparate desordenado o una exposición cuidadosamente diseñada que los invite a entrar?</p>
    
              <p class="text-lg text-gray-800 dark:text-neutral-200">Las redes sociales son tu oportunidad de oro para mostrar al mundo el talento y la pasión que hay detrás de tu agencia. Son tu carta de presentación, tu portafolio digital y tu herramienta de comunicación más directa con tus clientes potenciales.</p>
              <div class="text-center">
                <div class="grid lg:grid-cols-2 gap-3">
                  <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure class="relative w-full h-60">
                      <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                    </figure>
                    <figure class="relative w-full h-60">
                      <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                    </figure>
                  </div>
                  <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                    <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                  </figure>
                </div>
    
                <span class="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                  Working process
                </span>
              </div>
              <h2 class="text-3xl font-bold mb-6 lg:text-5xl dark:text-white text-center">Por que las redes sociales son tan importantes para tu negocio?</h2>    
              <ul class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li class="ps-2">Visibilidad: Amplia tu alcance y llega a un publico mas amplio</li>
                <li class="ps-2">Credibilidad: Demuestra tu experiencia y conocimientos</li>
                <li class="ps-2">Conexion: Contruye relaciones solidas con tus clientes y colegas</li>
                <li class="ps-2">Generacion de leads: Convierte a tus seguidores en clientes potenciales</li>
              </ul>
              <h2 class="text-3xl font-bold mb-6 lg:text-5xl dark:text-white text-center">Que redes sociales son ideales para tu negocio?</h2>    
              <ul class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li class="ps-2">LinkedIn: La red profesional por excelencia. Perfecta para conectar con otros profesionales y empresas.</li>
                <li class="ps-2">Instagram: Ideal para mostrar tu trabajo de forma visual y atractiva.</li>
                <li class="ps-2">Facebook: Una plataforma versátil para compartir contenido y anuncios.</li>
                <li class="ps-2">Twitter: Útil para compartir noticias del sector y participar en conversaciones.</li>
              </ul>


              <div class="text-center">
                <div class="grid lg:grid-cols-2 gap-3">
                  <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <figure class="relative w-full h-60">
                      <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                    </figure>
                    <figure class="relative w-full h-60">
                      <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                    </figure>
                  </div>
                  <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                    <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                  </figure>
                </div>
    
                <span class="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                  Working process
                </span>
              </div>
              <h2 class="text-3xl font-bold mb-6 lg:text-5xl dark:text-white text-center">Consejos para crear un perfil irresistible</h2>    
              <ul class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li class="ps-2">Cuenta una historia: No solo muestres tus proyectos, cuenta cómo has ayudado a tus clientes a alcanzar sus objetivos.</li>
                <li class="ps-2">Sé visual: Las imágenes valen más que mil palabras. Utiliza fotos y videos de alta calidad.</li>
                <li class="ps-2">Sé consistente: Publica contenido de manera regular para mantener a tu audiencia enganchada.</li>
                <li class="ps-2">Interactuar: Responde a comentarios, mensajes y participa en grupos relevantes.</li>
              </ul>

              <p class="text-lg text-gray-800 dark:text-neutral-200">Tus redes sociales son tu mejor aliado para atraer clientes. Al utilizarlas de manera estratégica, puedes convertirlas en un imán que atraiga a personas interesadas en tus servicios. Recuerda, la clave está en crear contenido de calidad, interactuar con tu audiencia y construir una comunidad en torno a tu marca.</p>     
              <h2 class="text-3xl font-bold mb-6 lg:text-5xl dark:text-white text-center">Estrategias para atraer clientes</h2>   
              <ul class="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
                <li class="ps-2">Ofrece contenido de valor: Comparte consejos, tutoriales y estudios de caso.</li>
                <li class="ps-2">Organiza concursos y sorteos: Genera interacción y aumenta tu visibilidad.</li>
                <li class="ps-2">Colabora con otros profesionales: Amplía tu red de contactos.</li>
                <li class="ps-2">Utiliza anuncios pagados: Llega a un público más amplio y segmentado.</li>
              </ul>
             
             
             
            </div>
          </div>
          <h2 class="text-3xl font-bold lg:text-5xl dark:text-white text-center mt-8 ">¿Estás listo para transformar tus redes en una poderosa herramienta de marketing?</h2>    
              <p class="text-lg text-gray-800 dark:text-neutral-200 text-center">¡Comienza hoy mismo a crear un perfil que refleje la calidad y el profesionalismo de tu agencia!
</p>
              <div className='flex flex-col mt-4 justify-center'>
              <a class="group inline-flex justify-center text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                    Contactame por Whatsapp
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
              <p class="text-lg text-gray-800 dark:text-neutral-200 text-center mt-4 mb-6">¡No esperes más para darle a tu negocio la visibilidad que merece!</p>
              </div>
        </div>
        {/* <!-- End Content --> */}
    
        

      </div>
    </div>
    </div>
    <Sidebar/>
    <ElBlog/>
    

</>
  )
}

export default Articulo3