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
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 mb-8 lg:gap-y-0">
                {/* <!-- Badges/Tags --> */}
                <div className='flex justify-center'>
                  <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                    Plan
                  </a>
                  <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                    Web development
                  </a>
                  <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                    Free
                  </a>
                  <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                    Team
                  </a>
                </div>
                {/* <!-- End Badges/Tags --> */}
    
                <div class="flex justify-center items-center gap-x-1.5">
                  {/* <!-- Button --> */}
                  <div class="hs-tooltip inline-block">
                    <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                      875
                      <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                        Like
                      </span>
                    </button>
                  </div>
                  {/* <!-- Button --> */}
    
                  <div class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>
    
                  {/* <!-- Button --> */}
                  <div class="hs-tooltip inline-block">
                    <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                      16
                      <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-black" role="tooltip">
                        Comment
                      </span>
                    </button>
                  </div>
                  {/* <!-- Button --> */}
    
                  <div class="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>
    
                  {/* <!-- Button --> */}
                  <div class="hs-dropdown relative inline-flex">
                    <button id="hs-blog-article-share-dropdown" type="button" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                      Share
                    </button>
                    <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2 dark:bg-black" role="menu" aria-orientation="vertical" aria-labelledby="hs-blog-article-share-dropdown">
                      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        Copy link
                      </a>
                      <div class="border-t border-gray-600 my-2 dark:border-neutral-800"></div>
                      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        Share on Twitter
                      </a>
                      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                        Share on Facebook
                      </a>
                      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900" href="#">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        Share on LinkedIn
                      </a>
                    </div>
                  </div>
                  {/* <!-- Button --> */}
                </div>
              </div>
        

      </div>
    </div>
    </div>

    <Sidebar/>
    <ElBlog/>
    

</>
  )
}

export default Articulo3