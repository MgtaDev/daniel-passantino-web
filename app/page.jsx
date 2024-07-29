import Image from 'next/image'
import React from 'react'

const Personalpage = () => {
  return (
    <>
  

  <main id="content">
    
{/* Hero */}
    <div class="bg-neutral-900  flex">
    <div class="area md:flex">
			
      <div class="max-w-3xl  md:left-14 lg:left-14 relative  mx-auto px-4 xl:px-0 pt-14 lg:pt-6 pb-24">
    
        <div className='flex top-[12%] relative'>
        <Image style={{animation: 'float 3s ease-in-out infinite'}} src='/bombilla.png' className='relative md:left-[85%] md:top-[12%] ' height={60} width={60} alt='bombilla icon'/>
        <Image style={{animation: 'float 3s ease-in-out infinite 1s'}} src='/cohete.png' className='relative animate-pulse md:left-[85%] md:h-[45px] md:mt-4 ' height={40} width={50}  alt='cohete icon'/>
        </div>
       
       <h1 class="font-semibold lg:text-start text-center text-white  text-5xl md:text-6xl">
        <span class=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">Daniel Passantino</span> Transformando tus ideas en realidad
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
        <div className='mt-12 -ml-1 justify-center lg:justify-start flex lg:flex-none'>
        <a class="group inline-flex text-white items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                    Contactame por Whatsapp
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
        </div>
        
      </div>
      <div className='max-w-2xl px-4 md:px-26 hidden lg:block relative -mt-6  lg:pt-20'>
        <Image src='/man-in-blue-jackset-701x1024.png'  height={400} width={400} alt='Main Image'/>
      </div>
		</div>
     
    </div>

{/* Carrousel de Marcas */}
    <section class=" text-white py-8 md:px-28">  
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
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
              <div class="text-center">
                <p class="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                  Portafolio
                </p>
                <h3 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-5xl lg:mx-14 lg:leading-tight dark:text-neutral-200">
                  Conoce mis<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> trabajos recientes</span>
                </h3>
              </div>

          
            

              <div class="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
                <svg class="w-52 h-auto" width="717" height="653" viewBox="0 0 717 653" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z" fill="currentColor" class="fill-gray-800 dark:fill-white"/>
                  <path d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z" fill="currentColor" class="fill-orange-500"/>
                  <path d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z" fill="currentColor" class="fill-cyan-500"/>
                </svg>
              </div>

              <div class="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80" aria-hidden="true">
                <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-white"/>
                  <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-500"/>
                  <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-gray-800 dark:fill-white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">

          <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
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
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Precios para la creacion de sitios web</h2>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">Tarifas</p>
      </div>
    {/* <!-- End Title --> */}

      <div class="relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#525252,transparent)] mt-12">
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
                        Contactame por Whatsapp
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
                        Contactame por Whatsapp
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
                        Contactame por Whatsapp
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