import React from 'react'
import Image from 'next/image'
import ElBlog from '../components/blog'
import Servicios from '../components/otros-servicios'

const Contact = () => {
  return (
    <>
<div className='lg:mx-20'>
{/* <!-- Hero --> */}
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  {/* <!-- Grid --> */}
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">

    {/* Left */}
    <div class="relative mt-10 lg:mr-20 ">
      <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Hero Image"/>
      <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

      {/* <!-- SVG--> */}
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
      {/* <!-- End SVG--> */}
    </div>

    {/* Right */}
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
     Contactame
      </h1>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">
        Contactame via e-mail a traves de este formulario
      </p>
    </div>
  </div>

  <div class="mt-12 max-w-lg mx-auto">
    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
        Llena los campos
      </h2>

      <form>
        <div class="grid gap-4 lg:gap-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Nombre</label>
              <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label for="hs-lastname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Apellido</label>
              <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Correo electronico</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label for="hs-phone-number-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Telefono</label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
            </div>
          </div>

          <div>
            <label for="hs-about-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Detalles</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></textarea>
          </div>
        </div>

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent  text-whitefocus:outline-none bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4] disabled:opacity-50 disabled:pointer-events-none">Enviar</button>
        </div>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            Te respondere en un periodo de 1 a 2 dias habiles
          </p>
        </div>
      </form>
    </div>
  </div>
    </div>
    {/* Right */}

  </div>

 
</div>

<div class="mt-12 lg:mx-24 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
    <a class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10" href="#">
      <svg class="size-9 text-gray-800 mx-auto dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">Knowledgebase</h3>
        <p class="mt-1 text-gray-500 dark:text-neutral-500">We're here to help with any questions or code.</p>
        <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
          Contact support
          <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>

    <a class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10" href="#">
      <svg class="size-9 text-gray-800 mx-auto dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">FAQ</h3>
        <p class="mt-1 text-gray-500 dark:text-neutral-500">Search our FAQ for answers to anything you might ask.</p>
        <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
          Visit FAQ
          <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>

    <a class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 dark:hover:bg-neutral-500/10 dark:focus:bg-neutral-500/10" href="#">
      <svg class="size-9 text-gray-800 mx-auto dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">Developer APIs</h3>
        <p class="mt-1 text-gray-500 dark:text-neutral-500">Check out our development quickstart guide.</p>
        <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500">
          Contact sales
          <svg class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
  </div>




  <Servicios/>


</div>
<ElBlog/>
</>
  )
}

export default Contact