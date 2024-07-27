import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
<>
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

  <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
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
</div>

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
</>
  )
}

export default Contact