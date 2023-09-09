<template>
  <div class="bg-white w-full h-14 md:flex hidden justify-center">
    <nav class="h-full pl-2 pr-2 w-1/2 md:min-w-[765px] flex justify-center gap-4 items-center">
      <router-link to="/" class="button-navigation">Accueil</router-link>
      <router-link to="/pricing" class="button-navigation">Tarifs</router-link>
      <router-link to="/services" class="button-navigation">Services</router-link>
      <router-link to="/news" class="button-navigation">Actualités</router-link>
      <router-link to="/events" class="button-navigation">Concours</router-link>
      <router-link to="/business" class="button-navigation">Entreprises</router-link>
      <router-link to="/about-us" class="button-navigation">À propos</router-link>
      <router-link to="/contact" class="button-navigation">Contact</router-link>
    </nav>
  </div>
</template>
<script>
  export default {

  }
</script>