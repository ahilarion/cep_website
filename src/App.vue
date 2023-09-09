<template>
  <Menu :infos="infos" :closeMenu="closeMenu" :active="this.active"/>
  <header class="w-full sticky top-0 shadow-xl z-40 select-none">
    <Informations :infos="infos" :openMenu="openMenu"/>
    <Navigation />
  </header>
  <main class="md:h-min-[calc(100vh-7.5rem)] h-min-[calc(100vh-4rem)] bg-blue-50 w-full flex flex-col items-center justify-start">
    <RouterView :infos="infos" />
    <div class="relative w-full h-[250px] ">
      <img src="/src/assets/banner2.jpg" alt="bannière" class="z-0 object-cover h-full w-full brightness-50">
    </div>
  </main>
  <Footer :infos="infos"/>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from "@/components/Navigation.vue";
  import Informations from "@/components/Informations.vue";
  import Menu from "@/components/Menu.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    setup() {
      alert("Le site est en cours de création, donc certaines parties peuvent contenir des erreurs ou être incomplètes. Nous vous remercions de votre compréhension et de votre patience pendant cette phase de développement.");
    },
    components: {
      Footer,
      Menu,
      Informations,
      Navigation,
      RouterLink,
      RouterView,
    },
    created() {
    },
    data() {
      return {
        active: false,
        infos: {
          phone: "+33 7 60 60 60 60",
          email: "cep@gmail.com",
          country: "France",
          address: "Le Pt Chem. de Cottenchy",
          town: "80440 Boves"
        }
      }
    },
    methods: {
      openMenu() {
        this.active = true;
        document.body.classList.add('overflow-hidden');
      },
      closeMenu() {
        this.active = false;
        document.body.classList.remove('overflow-hidden');
      }
    }
   }
</script>