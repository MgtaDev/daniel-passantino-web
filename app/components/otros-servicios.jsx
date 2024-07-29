import React from 'react'
import Image from 'next/image'

const Servicios = () => {
  return (
    <>
<div class="text-center mt-20">
    
    <h3 class="text-3xl mx-4 text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
    Explora mis <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-[#7d5ed7] to-[#683fe4]">otros servicios</span>
    </h3>
</div>
<div class="max-w-[85rem] flex justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
  <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
    <a href="/logros">
    <div class="flex flex-col items-center gap-x-4 mb-3">
        <Image className='mb-2' src='/sensible.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Sitios Web</h3>
      </div>
    </div>
  </a>
  </div>

  <div class="size-full  bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
    <a href='/redes'>
    <div class="flex flex-col items-center gap-x-4 mb-3">
      <Image className='mb-2' src='/disenador-grafico.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Redes sociales</h3>
      </div>    
    </div>
    </a>
  </div>

  <div class="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
  <a href="/design">
    <div class="flex flex-col items-center gap-x-4 mb-3">
    <Image className='mb-2' src='/redes-sociales.png' height={50} width={50} alt='website icon'/>
      <div class="shrink-0">
        <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Diseño Grafico</h3>
      </div>
    </div>
    </a>
  </div>

</div>
</div>
</>
  )
}

export default Servicios