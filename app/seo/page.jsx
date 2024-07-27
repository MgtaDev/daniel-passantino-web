import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid sm:grid-cols-2 sm:items-center gap-8">
{/* Hero */}
    <div class="sm:order-2 ">
       
    <h2 class="font-semibold text-center text-white  text-5xl md:text-6xl">
        <span class=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">Su sitio web</span> necesita un impuslo?
        </h2>
  
       
    </div>

    <div class="sm:order-1">
  
    <div class="relative pt-[50%] sm:pt-[100%] rounded-lg">
          <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/icon.webp" alt="Blog Image"/>
    </div>

    </div>
{/* Hero */}

<div class="relative overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
    <div class="text-center">
      <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
      Gestión SEO = mejores resultados en las búsquedas
      </h1>

      <p class="mt-3 text-gray-600 dark:text-neutral-400">
        Stay in the know with insights from industry experts.
      </p>

      <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        <form>
          <div class="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
            <div class="w-full">
              <label for="hs-search-article-1" class="block text-sm text-gray-700 font-medium dark:text-white"><span class="sr-only">Search article</span></label>
              <input type="email" name="hs-search-article-1" id="hs-search-article-1" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search article"/>
            </div>
            <div>
              <a class="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </a>
            </div>
          </div>
        </form>

        <div class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
          <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
          <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
          </svg>
        </div>
      </div>

      <div class="mt-10 sm:mt-20">
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Auditoria SEO
        </a>
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          Redaccion de articulos
        </a>
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          Margen
        </a>
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          Blog
        </a>
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          Red interna
        </a>
        <a class="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
          Optimización
        </a>
      </div>
    </div>
  </div>
</div>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <div class="lg:col-span-7">
      <div class="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div class="col-span-4">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
        </div>

        <div class="col-span-3">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
        </div>

        <div class="col-span-5">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
        </div>
      </div>
    </div>

    <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div class="space-y-6 sm:space-y-8">
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
          Buen SEO para una buena visibilidad
          </h2>
          <p class="text-gray-500 dark:text-neutral-500">
          Gestionar su SEO lleva tiempo y requiere conocimientos. Si estás un poco perdido en hacerlo tú mismo, no dudes en subcontratar la gestión de tu SEO. Agencia web, freelance,… Hay muchas personas que pueden optimizar tus resultados en Google.
          </p>
        </div>

        <ul class="space-y-2 sm:space-y-4">
          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                <span class="font-bold">Redaccion de contenidos</span>
              </span>
            </div>
          </li>

          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                Auditoria SEO
              </span>
            </div>
          </li>

          <li class="flex gap-x-3">
            <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <div class="grow">
              <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                 <span class="font-bold">Conocimiento de velocidad</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<a class="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
  <div class="relative flex items-center overflow-hidden">
    <Image width={40} height={40} class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="/Redaction-darticles-SEO.png" alt="Blog Image"/>

    <div class="grow p-4 ms-32 sm:ms-48">
      <div class="min-h-24 flex flex-col justify-center">
        <h3 class="font-semibold text-sm text-gray-800 dark:text-neutral-300">
          Redaccion de Contenidos
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        Publicar artículos de blog correctamente redactados: palabras clave, etiquetado, número de palabras, etc. Todos los criterios a respetar son importantes para tener buenos resultados SEO.
        </p>
      </div>
    </div>
  </div>
</a>

<a class="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
  <div class="relative flex items-center overflow-hidden">
    <Image width={40} height={40} class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="/Other-07.png" alt="Blog Image"/>

    <div class="grow p-4 ms-32 sm:ms-48">
      <div class="min-h-24 flex flex-col justify-center">
        <h3 class="font-semibold text-sm text-gray-800 dark:text-neutral-300">
          Auditoria SEO
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        Hacer un balance de tu SEO es muy importante para desarrollar una estrategia ganadora. Puedo realizar tu auditoría SEO y darte las recomendaciones que cambiarán tus resultados.
        </p>
      </div>
    </div>
  </div>
</a>

<a class="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
  <div class="relative flex items-center overflow-hidden">
    <Image width={70} height={70} class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="/campagnes-SEA-Google-Ads-.png" alt="Blog Image"/>

    <div class="grow p-4 ms-32 sm:ms-48">
      <div class="min-h-24 flex flex-col justify-center">
        <h3 class="font-semibold text-sm text-gray-800 dark:text-neutral-300">
        Speed Insight
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        Para mejorar sus resultados, es mejor tener un sitio que se acerque a 100/100 en la puntuación de Google Speed ​​​​Insight. Optimico tu sitio para que cargue más rápido. Llega a 99 con mis consejos y optimizaciones técnicas.


        </p>
      </div>
    </div>
  </div>
</a>

{/* Cotizacion */}
<div class="text-center mt-20">
    
    <h2 class="text-3xl mx-4 text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
    Precios de Gestion SEO
    </h2>
    <a class="group inline-flex text-whitem mt-4 items-center gap-x-2 py-2 px-3 bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]  font-medium text-sm  rounded-full focus:outline-none" href="#">
                    Contactame por Whatsapp
                    <svg class="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
    </div>
{/* Cotizacion */}
      
    
       {/* Otros servicios */}
 <div class="text-center mt-20">
    
    <h1 class="text-3xl mx-4 text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
    Explora mis <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">otros servicios</span>
    </h1>
</div>
<div class="max-w-[85rem] flex justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
  <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
    <div class="flex flex-col items-center gap-x-4 mb-3">
        <Image className='mb-2' src='/sensible.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Sitios Web</h3>
      </div>
    </div>
  </div>

  <div class="size-full  bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
    <div class="flex flex-col items-center gap-x-4 mb-3">
      <Image className='mb-2' src='/disenador-grafico.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Redes sociales</h3>
      </div>
    </div>
  </div>

  <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
    <div class="flex flex-col items-center gap-x-4 mb-3">
    <Image className='mb-2' src='/redes-sociales.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Diseño Grafico</h3>
      </div>
    </div>
  </div>





</div>
</div>
{/* Otros servicos */}


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
    
  
    </div>
  </div>
  )
}

export default Page