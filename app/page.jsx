import Image from 'next/image'
import React from 'react'

const Personalpage = () => {
  return (
    <>
  

  <main id="content">
    
{/* Hero */}
    <div class="bg-neutral-900  flex">
    <div class="area md:flex">
			
      <div class="max-w-2xl lg:mr-32  md:left-28 lg:left-28 relative  mx-auto px-4 xl:px-0 pt-14 lg:pt-4 pb-24">
    
        <div className='top-[12%] hidden  md:flex lg:flex relative'>
        <Image style={{animation: 'float 3s ease-in-out infinite'}} src='/bombilla.png' className='relative md:left-[80%] md:top-[12%] ' height={60} width={60} alt='bombilla icon'/>
        <Image style={{animation: 'float 3s ease-in-out infinite 1s'}} src='/cohete.png' className='relative animate-pulse md:left-[80%] md:h-[45px] md:mt-4 ' height={40} width={50}  alt='cohete icon'/>
        </div>
       
       <h1 class="font-semibold lg:text-start text-center text-white  text-5xl md:text-6xl">
        <span class=" bg-clip-text lg:-ml-5 text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> <span className='lg:ml-3'>Daniel Passantino</span></span><br/> <span className='lg:-ml-3'> Transformando tus</span> <span className='lg:-ml-1'>Ideas en realidad</span> 
        </h1>

        <div className='flex md:hidden justify-center  lg:hidden mt-4 relative'>
        <Image style={{animation: 'float 3s ease-in-out infinite'}} src='/bombilla.png' className='relative md:left-[85%] md:top-[12%] ' height={60} width={60} alt='bombilla icon'/>
        <Image style={{animation: 'float 3s ease-in-out infinite 1s'}} src='/cohete.png' className='relative animate-pulse md:left-[85%] md:h-[45px] md:mt-4 ' height={40} width={50}  alt='cohete icon'/>
        </div>
  
        <div class="max-w-4xl">
          <p class="mt-5 text-center md:text-left text-neutral-400 text-lg">
          Decidí lanzarme al diseño web y la creación de sitios web en 2021 justo después de obtener con éxito mi licencia de comercio electrónico y marketing digital y mi licencia de gestión de proyectos de estudio y trabajo.
          </p>
          <p class="mt-5 text-center md:text-left text-neutral-400 text-lg">
          He creado y actualmente administro más de 30 sitios web para pequeñas y medianas empresas en Francia, Portugal y Japón. 
          </p>
          
          
        </div>
        <div className='mt-12  justify-center lg:justify-start flex lg:flex-none'>
        <a class="group inline-flex text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                    Contactame por Whatsapp
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
        </div>
        
      </div>
      <div className='max-w-2xl px-4  hidden lg:block relative -mt-6  lg:pt-20'>
        <Image src='/man-in-blue-jackset-701x1024.png'  height={400} width={400} alt='Main Image'/>
      </div>
		</div>
     
    </div>

{/* Carrousel de Marcas */}
    <section class="bg-neutral-900  text-white py-8 md:px-28">  
  <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
    <div  style={{animation: 'slide-left  12s linear infinite '}} class="group-hover:animation-pause inline-block w-max">
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>

    <div style={{animation: 'slide-left 12s linear infinite  '}} class=" group-hover:animation-pause inline-block w-max">
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
      <img class="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
    </div>
  </div>
    </section>

{/* Servicios */}
    <div class="bg-neutral-900 bg-gradient-to-t from-black to-transparent">
          <div class="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
            <div class="max-w-3xl mb-10 lg:mb-14">
              <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Servicios</h2>
              <p class="mt-1 text-neutral-400">Cada día se realizan 6.900 millones de búsquedas y se visitan 20.000 millones de sitios web en Google. Hoy en día es la forma más efectiva y rentable de tener mejor visibilidad y estar más cerca de tus clientes, ¡así que comencemos a crear tu sitio web!</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
              <a class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#683fe4]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="/logros">
                <div class="mb-5">
                <Image src="/sensible.png" width={40} height={40} alt="Web Design"/>

                  <div class="mt-5">
                    <h2 class="mt-5 font-medium text-lg text-white">Sitios Web</h2>
                    <p class="mt-1 text-neutral-400">Creo tus sitios web en WordPress y Shopify para permitirte tener presencia en línea.</p>
                  </div>
                </div>
                <p class="mt-auto">
                  <span class="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] pb-1 border-b-2 border-neutral-700 group-hover:border-[#683fe4] transition focus:outline-none group-focus:border-[#683fe4]">
                    Ver mas
                  </span>
                </p>
              </a>

              <a class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#683fe4]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="/design">
                <div class="mb-5">
                
                  <div class="mt-0">
                  <Image src="/disenador-grafico.png" width={40} height={40} alt="Graphic Design"/>
                    <h3 class="mt-5 font-medium text-lg text-white">Diseño Grafico</h3>
                    <p class="mt-1 text-neutral-400">
                  Creo tus cartas gráficas, tus logotipos, tus visuales y tu identidad digital.


                  Redes sociales
                  Creo tu contenido, tus estrategias y tu copywriting para tener impacto y resultados.</p>
                  </div>
                </div>
                <p class="mt-auto">
                  <span class="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] pb-1 border-b-2 border-neutral-700 group-hover:border-[#683fe4] transition focus:outline-none group-focus:border-[#683fe4]">
                    Ver mas
                  </span>
                </p>
              </a>

              <a class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#683fe4]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="/redes">
                <div class="mb-5">
                <Image src="/redes-sociales.png" width={40} height={40} alt="Web Design"/>

                  <div class="mt-5">
                  
                    <h3 class="mt-5 font-medium text-lg text-white">Redes sociales</h3>
                    <p class="mt-1 text-neutral-400">Creo tu contenido, tus estrategias y tu copywriting para tener impacto y resultados.</p>
                  </div>
                </div>
                <p class="mt-auto">
                  <span class="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] pb-1 border-b-2 border-neutral-700 group-hover:border-[#683fe4] transition focus:outline-none group-focus:border-[#683fe4]">
                    Ver mas
                  </span>
                </p>
              </a>

              <a class="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#683fe4]/10 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100" href="/seo">
                <div class="mb-5">
                <Image src="/redes-sociales.png" width={40} height={40} alt="Web Design"/>

                  <div class="mt-5">
                  
                    <h3 class="mt-5 font-medium text-lg text-white">SEO</h3>
                    <p class="mt-1 text-neutral-400">Creo tu contenido, tus estrategias y tu copywriting para tener impacto y resultados.</p>
                  </div>
                </div>
                <p class="mt-auto">
                  <span class="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] pb-1 border-b-2 border-neutral-700 group-hover:border-[#683fe4] transition focus:outline-none group-focus:border-[#683fe4]">
                    Ver mas
                  </span>
                </p>
              </a>

            

              
            </div>
            

          </div>
    </div>

{/* Portafolio */}
    <div class="relative lg:mx-20 flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div class="mx-auto max-w-screen-xl px-4 w-full">
      <div class="overflow-hidden mb-6">
          <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
              <div class="text-center md:mx-20 lg:mx-20">
                <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                  Portafolio
                </p>
                <h3 class="text-3xl text-gray-800 lg:mb-12 font-bold sm:text-5xl lg:text-5xl lg:mx-14 lg:leading-tight dark:text-neutral-200">
                  Conoce mis<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> trabajos recientes</span>
                </h3>
              </div>

          
            

              <div class="hidden absolute top-2/4 start-0 -rotate-180 transform -translate-y-3/4 translate-x-40 md:block lg:-translate-x-40" aria-hidden="true">
                <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-white"/>
                  <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-[#683fe4]"/>
                </svg>
              </div>
              <div class="hidden absolute top-2/4 end-0 lg:top-8 transform -translate-y-3/4 translate-x-40 md:block lg:translate-x-40" aria-hidden="true">
                <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-white"/>
                  <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-[#683fe4]"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">

          <div class="relative  bg-neutral-900 flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text- absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>  
          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text-gray-200 absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text-gray-200 absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text-gray-200 absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text-gray-200 absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <a href="" class="hover:text-gray-200 absolute z-30 top-2 right-0 mt-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </a>
            <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
            <div class="h-auto overflow-hidden">
              <div class="h-44 overflow-hidden relative">
                <img src="https://picsum.photos/400/400" alt=""/>
              </div>
            </div>
            <div class="bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 py-4 px-3">
              <h3 class="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
              <div class="flex justify-between items-center">
                <p class="text-xs text-gray-400">
                Lorem, ipsum dolor sit amet
              </p>
              <div class="relative z-40 flex items-center gap-2">
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a class="text-gray-200 hover:text-blue-500" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
        
          
          
        </div>
        <a class="group inline-flex mt-6 text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                      Ver mas
                        <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
      </div>

    </div>
    
{/* Clientes satisfechos */}
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Clientes Satisfechos</h2>
          <p class="mt-1 text-neutral-400">Me aseguro de brindarte la mejor experiencia profesional posible y la mejor atencion tanto a ti como a los detalles que tu proyecto require para lograr el mejor resultado y siempre dejar a mis clientes 100% felices</p>
        </div>

        <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div>
            <blockquote>
              <p class="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                To say that switching to Preline has been life-changing is an understatement. My business has tripled since then.
              </p>

              <footer class="mt-6">
                <div class="flex items-center">
                  <div class="md:hidden flex-shrink-0">
                    <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
                  </div>
                  <div class="ms-4 md:ms-0">
                    <div class="text-base font-semibold text-white">Nicole Grazioso</div>
                    <div class="text-xs text-neutral-400">Director Payments & Risk | Airbnb</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div class="hidden md:block mb-24 md:mb-0">
            <img class="rounded-xl" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
          </div>
        </div>
      </div>
    </div>

{/* Ofrecemos */}
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
      <div class=" flex justify-center mb-10 lg:mb-14">
          <h2 class="text-white text-center justify-center font-semibold text-2xl md:text-4xl md:leading-tight">Diseñando un portal web integral y completo.</h2>
        </div>
        <div class="border border-neutral-800 rounded-xl">
          <div class="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
            <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
              <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
             <div className='flex justify-center '>
              <Image src="/diseno-de-respuesta.png" width={60} height={60} alt="Web Design"/>
             </div>
                <div class="mt-3 sm:mt-5">
                
                  <p class="mt-1 text-sm sm:text-base text-neutral-400">Responsive Design</p>
                </div>
              </div>

              <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
              <div className='flex justify-center '>
              <Image src="/carga-rapida.png" width={60} height={60} alt="Web Design"/>
             </div>
                <div class="mt-3 sm:mt-5">
               
                  <p class="mt-1 text-sm sm:text-base text-neutral-400">Carga rápida.</p>
                </div>
              </div>

              <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
              <div className='flex justify-center '>
              <Image src="/codigo-limpio.png" width={60} height={60} alt="Web Design"/>
             </div>
                <div class="mt-3 sm:mt-5">
                 
                  <p class="mt-1 text-sm sm:text-base text-neutral-400">Diseño Limpio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* Enfoque */}
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Nuestro enfoque</h2>
          <p class="mt-1 text-neutral-400">Esta profunda comprensión guía nuestra estrategia integral — desde la investigación meticulosa y la planificación estratégica hasta la ejecución impecable del desarrollo de marca y el despliegue de sitios web o productos.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
          </div>

          <div>
            <div class="mb-4">
              <h3 class="text-xs font-medium uppercase text-gray-200">
                Steps
              </h3>
            </div>
            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0  justify-center items-center size-8 border border-neutral-800 text-[#683fe4] font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm lg:text-base text-neutral-400">
                  <span class="text-white">Diálogo Inicial 🗣️💡: </span>
                  Iniciemos una conversación enriquecedora. Agendemos un encuentro, ya sea virtual o presencial, donde pueda sumergirme en la esencia de tu proyecto. Mi objetivo es captar la visión que tienes para tu presencia digital y comprender a fondo los matices de tus aspiraciones en línea.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#683fe4] font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm lg:text-base text-neutral-400">
                  <span class="text-white">Propuesta Personalizada 📊💼: </span>
                  Tras nuestro intercambio de ideas, elaboraré un plan detallado y a medida. Este documento abarcará una proyección completa de los recursos necesarios, incluyendo una línea temporal meticulosamente trazada para llevar tu visión del mundo virtual a la realidad tangible
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#683fe4] font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm md:text-base text-neutral-400">
                  <span class="text-white">Materialización Digital 🖥️🛠️: </span>
                  Con el visto bueno de tu parte, me sumerjo en la fase de creación. Cada pixel y línea de código se coloca con precisión y cuidado, dando forma a tu sitio web. Durante este proceso, tu visión digital cobra vida, transformándose en una plataforma funcional y atractiva.


                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#683fe4] font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm md:text-base text-neutral-400">
                  <span class="text-white">Evaluación y Perfeccionamiento 🔍✨: </span>
                  Llegado este punto, te invito a un recorrido exhaustivo por tu nuevo espacio digital. Juntos, examinaremos cada aspecto del sitio, asegurándonos de que cada elemento esté alineado con tus expectativas. Si se requieren modificaciones, las implementaré con esmero para alcanzar la excelencia que buscas.
                </p>
              </div>
            </div>

            <a class="group inline-flex items-center gap-x-2 py-2 px-3 text-white bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="#">
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  
{/* <!-- Pricing --> */}
    <div class="lg:mx-16  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
       {/* Title */}
       <div class="overflow-hidden">
          <div class=" mx-auto px-4 sm:px-6  h-80 lg:px-8 py-4">
            <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
              <div class="text-center lg:mx-10 md:mx-10 ">
                <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                  Tarifas
                </p>
                <h3 class="text-3xl text-gray-800 lg:mb-12 font-bold sm:text-5xl lg:text-5xl lg:mx-14 lg:leading-tight dark:text-neutral-200">
                  Precios para la<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> creacion de sitios web</span>
                </h3>
              </div>

          
            

              <div class="hidden lg:block absolute top-2/4 start-0 -rotate-180 transform -translate-y-3/4 translate-x-40 md:block lg:-translate-x-40" aria-hidden="true">
                <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-white"/>
                  <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-[#683fe4]"/>
                </svg>
              </div>
            
              <div class="hidden  absolute top-2/4 end-0 lg:top-8 transform -translate-y-3/4 translate-x-40 md:block lg:translate-x-40" aria-hidden="true">
                <svg class="sm:w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-white"/>
                  <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-[#683fe4]"/>
                </svg>
              </div>

              <div class="absolute md:hidden top-48 rotate-[-90deg] right-32
               lg:hidden bottom-0 end-0 transform lg:translate-x-32" aria-hidden="true">
              <svg class="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-[#683fe4]"/>
                <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
                <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-white"/>
              </svg>
             </div>
     
            </div>
          </div>
        </div>
        {/* Title */}
      

       
  

      <div class="relative shadow-2xl shadow-gray-500   before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#525252,transparent)] mt-12">
        <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <div class="flex flex-col h-full text-center">
            <div class="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
              <h3 class="font-medium text-2xl text-gray-800 dark:text-neutral-200">Sitio web de una pagina</h3>
            </div>

            <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
              <span class="mt-7 font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">
              299 $
              </span>
            </div>

            <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
              <ul class="space-y-2.5 text-center text-sm">
                <li class="text-gray-800 dark:text-neutral-400">
                  1 user
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Plan features
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Product support
                </li>
              </ul>
            </div>

            <div class="bg-white py-8 px-8 dark:bg-neutral-900">
            <a class="group inline-flex text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                        Contactame
                        <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
            </div>
          </div>

          <div class="flex flex-col h-full text-center">
            <div class="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
              <h3 class="font-medium text-2xl text-gray-800 dark:text-neutral-200">Sitio web de varias paginas</h3>
            </div>

            <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
              <span class="mt-7 font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">
                
                599 $
              </span>
            </div>

            <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
              <ul class="space-y-2.5 text-center text-sm">
                <li class="text-gray-800 dark:text-neutral-400">
                  2 users
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Plan features
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Product support
                </li>
              </ul>
            </div>

            <div class="bg-white py-8 px-8 dark:bg-neutral-900">
            <a class="group inline-flex text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                        Contactame
                        <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
            </div>
          </div>

          <div class="flex flex-col h-full text-center">
            <div class="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
              <h3 class="font-medium text-2xl text-gray-800 dark:text-neutral-200">Sitio web E-commerce</h3>
            </div>

            <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
              <span class="mt-7 font-bold text-5xl text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">
                
                799 $
              </span>
            </div>

            <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
              <ul class="space-y-2.5 text-center text-sm">
                <li class="text-gray-800 dark:text-neutral-400">
                  5 users
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Plan features
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Product support
                </li>
              </ul>
            </div>

            <div class="bg-white py-8 px-8 dark:bg-neutral-900">
            <a class="group inline-flex text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                        Contactame
                        <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
            </div>
          </div>

          <div class="flex flex-col h-full text-center">
            <div class="bg-white pt-8 pb-5 px-8 dark:bg-neutral-900">
              <h3 class="font-medium text-2xl text-gray-800 dark:text-neutral-200">Mantenimiento</h3>
            </div>

            <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-neutral-900">
              <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                
              29 $ / Hora
              </span>
            </div>

            <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-neutral-900">
              <ul class="space-y-2.5 text-center text-sm">
                <li class="text-gray-800 dark:text-neutral-400">
                  Actualizaciones
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Modificaciones Especiales
                </li>

                <li class="text-gray-800 dark:text-neutral-400">
                  Creacion digital
                </li>
              </ul>
            </div>

            <div class="bg-white py-8 px-8 dark:bg-neutral-900">
            
            </div>
          </div>
        </div>
      </div>

      
    </div>

{/* Contactame */}
    <div class="bg-neutral-900">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contactame</h2>
          <p class="mt-1 text-neutral-400">Sin importar cual sea tu meta, la alcanzaremos.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div class="md:order-2 border-b md:-mt-20  border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div class="space-y-4">
                <div class="relative">
                  <input type="text" id="hs-tac-input-name" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Name"/>
                  <label for="hs-tac-input-name" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Nombre</label>
                </div>

                <div class="relative">
                  <input type="text" id="hs-tac-input-name" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Name"/>
                  <label for="hs-tac-input-name" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Apellido</label>
                </div>

                <div class="relative">
                  <input type="email" id="hs-tac-input-email" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Email"/>
                  <label for="hs-tac-input-email" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Correo Electronico</label>
                </div>

                

                <div class="relative">
                  <input type="text" id="hs-tac-input-phone" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Phone"/>
                  <label for="hs-tac-input-phone" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Telefono</label>
                </div>

                <div class="relative">
                  <textarea id="hs-tac-message" class="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                  <label for="hs-tac-message" class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Cuentame acerca de tu proyecto</label>
                </div>
              </div>

              <div class="mt-2">
                <p class="text-xs text-neutral-500">
                  Todos los campos son requeridos
                </p>

                <p class="mt-5">
                  <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] text-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="#">
                   Enviar
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div class="space-y-14">
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div class="grow">
                <h4 class="text-white font-semibold">Nuestra Direccion</h4>

                <address class="mt-1 text-neutral-400 text-sm not-italic">
                  300 Bath Street, Tay House<br/>
                  Glasgow G2 4JR, United Kingdom
                </address>
              </div>
            </div>

            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div class="grow">
                <h4 class="text-white font-semibold">Escribeme a:</h4>

                <a class="mt-1 text-neutral-400 text-sm" href="#mailto:example@site.co" target="_blank">
                  passantinodev@gmail.com
                </a>
              </div>
            </div>

            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div class="grow">
                <h4 class="text-white font-semibold">Fija una cita</h4>
                <p class="mt-1 text-neutral-400">Enviame un correo electronico para agendar tu primera cita y conocer un poco mas acerca de ti y tus necesidades</p>
                <p class="mt-2">
                  <a class="group inline-flex items-center gap-x-2 font-medium text-sm text-gray-200 decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                    Con gusto te contestare lo antes posible.
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5   group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>



  
</>

  )
}

export default Personalpage