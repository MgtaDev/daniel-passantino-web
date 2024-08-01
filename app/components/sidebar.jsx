import React from 'react'

const Sidebar = () => {
  return (
    <>
   {/* <!-- Sidebar --> */}
   <div class="lg:col-span-2  lg:right-0 lg:top-14 relative ml-6 lg:ml-0 lg:mr-4 lg:h-[550px] mt-0 rounded-lg lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800 ">
   <div class="sticky top-0 start-0  py-8 lg:ps-8">
     {/* <!-- Avatar Media --> */}
     <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
       <a class="block shrink-0 focus:outline-none" href="#">
         <img class="size-10 rounded-full" src="/photo_2023-12-1817.45.05.jpeg" alt="Avatar"/>
       </a>

       <a class="group grow block focus:outline-none" href="">
         <h5 class="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:group-focus:text-neutral-400 dark:text-neutral-200">
           Daniel Passantino
         </h5>
         <p class="text-sm text-gray-500 dark:text-neutral-500">
           Web Developer & Marketing CEO
         </p>
       </a>

       <div class="grow">
         <div class="flex">
           <img class="size-8 rounded-full" src="/whatsapp.png" alt="Avatar"/>
         </div>
       </div>
     </div>

     <div class="pr-4 lg:-ml-1">
         <div className='space-y-6 overflow-y-scroll h-[40vh] min-h-[400px]'>
         <h4>Lee otros articulos:</h4>
       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-1">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
             Por que tu negocio necesita una pagina web profesional?
           </span>
         </div>

         <div class="shrink-0 relative mr-4 rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/portada-art-1.jpeg" alt="Blog Image"/>
         </div>
       </a>

       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-2">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
            El poder del diseño grafico en tu marca personal
           </span>
         </div>

         <div class="shrink-0 relative  mr-4  rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/diseño-grafico-art-2.jpg" alt="Blog Image"/>
         </div>
       </a>

       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-3">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
           Tus Redes Sociales: El Primer Impacto para Conquistar Nuevos Clientes

           </span>
         </div>

         <div class="shrink-0 relative  mr-4  rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/redes-art-3.jpg" alt="Blog Image"/>
         </div>
       </a>

       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-4">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
          Las ultimas tendencias en diseño web: Un viaje hacia el futuro digital
           </span>
         </div>

         <div class="shrink-0 relative  mr-4  rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/diseño-tendencia-4.png" alt="Blog Image"/>
         </div>
       </a>

       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-5">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
          SEO: El secreto para que te encuentren en Google
           </span>
         </div>

         <div class="shrink-0 relative  mr-4  rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/SEO.jpeg" alt="Blog Image"/>
         </div>
       </a>
    
       <a class="group flex items-center gap-x-6 focus:outline-none" href="/blog/articulo-6">
         <div class="grow">
           <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500">
             La importancia de un programador a medida en tu proyecto web
           </span>
         </div>

         <div class="shrink-0 relative  mr-4  rounded-lg overflow-hidden size-20">
           <img class="size-full absolute top-0 start-0 object-cover rounded-lg" src="/programador-a-medida.jpg" alt="Blog Image"/>
         </div>
       </a>
         </div>
          
       

     </div>
   </div>
 </div>
 {/* End Sidebar */}
 </>
  )
}

export default Sidebar