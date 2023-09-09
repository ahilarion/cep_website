<template>
  <div class="relative w-full h-64 bg-black overflow-hidden">
    <img src="/src/assets/banner.jpg" alt="bannière" class="z-0 object-cover h-full w-full brightness-50">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6">
      <h3 class="font-medium text-white uppercase text-lg border-b-2 pb-2 pl-8 pr-8 border-blue-400 whitespace-nowrap">Centre Équestre de Picardie</h3>
      <h1 class="text-center text-white font-bold text-4xl">{{this.title}}</h1>
      <div class="flex items-center justify-center gap-4">
        <router-link class="text-white hover:underline" to="/">Accueil</router-link>
        <font-awesome-icon icon="fa-solid fa-arrow-right" style="color: #ffffff;" />
        <router-link class="text-white hover:underline" to="{{url}}">{{title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'url'
  ]
}
</script>