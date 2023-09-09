<template>
  <div :class="'overflow-hidden md:translate-x-[-100%] fixed h-full w-full z-50 transition-all duration-500 ' + (active === true ? 'translate-x-[0%] opacity-100': 'translate-x-[-100%] opacity-0')">
    <div @click="closeMenu" class="absolute z-0 top-0 left-0 h-full w-full bg-black opacity-80"></div>
    <button class="absolute p-4 right-0"  @click="closeMenu">
      <font-awesome-icon  icon="fa-solid fa-xmark" size="2xl" style="color: #ffffff;" />
    </button>
    <div class="absolute z-0 top-0 left-0 h-full w-2/3 bg-black opacity-80 flex flex-col items-center justify-between">
      <nav class="flex flex-col w-full items-center justify-start p-4 gap-4">
        <router-link @click="closeMenu" to="/" class="button-menu">Accueil</router-link>
        <router-link @click="closeMenu" to="/pricing" class="button-menu">Tarifs</router-link>
        <router-link @click="closeMenu" to="/services" class="button-menu">Services</router-link>
        <router-link @click="closeMenu" to="/news" class="button-menu">Actualités</router-link>
        <router-link @click="closeMenu" to="/events" class="button-menu">Concours</router-link>
        <router-link @click="closeMenu" to="/business" class="button-menu">Entreprises</router-link>
        <router-link @click="closeMenu" to="/about-us" class="button-menu">À propos</router-link>
        <router-link @click="closeMenu" to="/contact" class="button-menu">Contact</router-link>
      </nav>
      <div class="flex flex-col w-full items-center justify-start p-4 gap-4">
        <button class="button-menu">{{infos.email}}</button>
        <button class="button-menu">{{infos.phone}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'active',
      'closeMenu',
      'infos'
    ]
  }
</script>