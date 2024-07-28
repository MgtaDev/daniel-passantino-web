import React from 'react'

const About = () => {
  return (
    <>
    {/* BANNER */}
    <div class="px-4 lg:px-6 lg:px-8 py-10">
    <div data-hs-carousel='{
        "loadingClasses": "opacity-0"
        }' class="relative">
        <div class="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div class="hs-carousel-slide">
            <div class="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span class="block text-white">Nike React</span>
                <span class="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
                <div class="mt-5">
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Read Case Studies
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div class="hs-carousel-slide">
            <div class="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span class="block text-white">CoolApps</span>
                <span class="block text-white text-xl md:text-3xl">From mobile apps to gaming consoles</span>
                <div class="mt-5">
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Read Case Studies
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div class="hs-carousel-slide">
            <div class="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span class="block text-white">Grumpy</span>
                <span class="block text-white text-xl md:text-3xl">Bringing Art to everything</span>
                <div class="mt-5">
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Read Case Studies
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
        <span class="text-2xl" aria-hidden="true">
            <svg class="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
            </svg>
        </span>
        <span class="sr-only">Previous</span>
        </button>

        <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
            <svg class="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
        </span>
        </button>
    </div>
    </div>

    {/* SECCION 1 */}
    <div class="max-w-[85rem] mx-auto px-4 pt-8 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1 class="block text-3xl text-center font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Sobre<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> Mi</span></h1>
        <p class="mt-3 text-lg text-gray-800 text-center dark:text-neutral-400">Cuidar la gestión de las redes sociales de tu empresa requiere mucho tiempo además de una estrategia si quieres resultados. Si estás un poco confundido acerca de esto, has venido al lugar correcto.</p>
  
        <div class="mt-7 grid gap-3 flex justify-center w-full sm:inline-flex">
          <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] disabled:opacity-50 disabled:pointer-events-none" href="#">
            Contactame por whatsapp
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        
        </div>
      
        
      </div>
  
      <div class="relative ">
        <img class="w-full rounded-md" src="/creation-pour-les-reseaux-sociaux.webp" alt="Hero Image"/>
        <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
  
        <div class="absolute bottom-0 start-0">
          <svg class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
            <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
            <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
            <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
            <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
            <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
            <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
            <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
            <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
            <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
            <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
            <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
            <rect x="581" width="49" height="49" fill="currentColor"/>
            <rect x="581" width="49" height="64" fill="currentColor"/>
            <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
            <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
            <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
    </div>

    {/* SECCION 2 */}
    <div class="max-w-[85rem] mx-auto px-4 pt-8 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">

  
      <div class="relative ">
        <img class="w-full rounded-md" src="/creation-pour-les-reseaux-sociaux.webp" alt="Hero Image"/>
        <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
  
        <div class="absolute bottom-0 start-0">
          <svg class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
            <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
            <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
            <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
            <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
            <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
            <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
            <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
            <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
            <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
            <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
            <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
            <rect x="581" width="49" height="49" fill="currentColor"/>
            <rect x="581" width="49" height="64" fill="currentColor"/>
            <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
            <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
            <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div>
        <h1 class="block text-3xl text-center font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Sobre<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]"> Mi</span></h1>
        <p class="mt-3 text-lg text-gray-800 text-center dark:text-neutral-400">Cuidar la gestión de las redes sociales de tu empresa requiere mucho tiempo además de una estrategia si quieres resultados. Si estás un poco confundido acerca de esto, has venido al lugar correcto.</p>
  
        <div class="mt-7 grid gap-3 flex justify-center w-full sm:inline-flex">
          <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] disabled:opacity-50 disabled:pointer-events-none" href="#">
            Contactame por whatsapp
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        
        </div>
      
        
      </div>
    </div>
    </div>

    {/* El blog */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">El Blog</h2>
<p class="mt-1 text-gray-600 dark:text-neutral-400">Descubre mi blog, las preguntas que puedes hacerme, las herramientas que uso y la formación que realizo.</p>
</div>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
  <div class="aspect-w-16 aspect-h-11">
    <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
  </div>
  <div class="my-6">
    <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
      Announcing a free plan for small teams
    </h3>
    <p class="mt-5 text-gray-600 dark:text-neutral-400">
      At Wake, our mission has always been focused on bringing openness.
    </p>
  </div>
  <div class="mt-auto flex items-center gap-x-3">
    <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/>
    <div>
      <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Daniel Passantino</h5>
    </div>
  </div>
</a>

<a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
  <div class="aspect-w-16 aspect-h-11">
    <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
  </div>
  <div class="my-6">
    <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
      How Google Assistant now helps you record stories for kids
    </h3>
    <p class="mt-5 text-gray-600 dark:text-neutral-400">
      Google is constantly updating its consumer AI, Google Assistant, with new features.
    </p>
  </div>
  <div class="mt-auto flex items-center gap-x-3">
    <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/>
    <div>
      <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Daniel Passantino</h5>
    </div>
  </div>
</a>

<a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40" href="#">
  <div class="aspect-w-16 aspect-h-11">
    <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
  </div>
  <div class="my-6">
    <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
      Front accounts - let's work together
    </h3>
    <p class="mt-5 text-gray-600 dark:text-neutral-400">
      Are you an accountant? Are you a company formation advisor?
    </p>
  </div>
  <div class="mt-auto flex items-center gap-x-3">
    <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"/>
    <div>
      <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Daniel Passantino</h5>
    </div>
  </div>
</a>
</div>

<div class="mt-12 text-center">
<a class="py-3 px-4 inline-flex bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]   items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
  Ver mas
  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
</a>
</div>
</div>
{/* El blog */}
</>
  )
}

export default About