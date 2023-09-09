<template>
  <div class="bg-white h-16 border-b-2 flex justify-center">
    <div class="relative h-full pl-2 pr-2 md:w-1/2 md:min-w-[765px] w-full flex md:justify-between sm:justify-center justify-start items-center">
      <label class="md:flex hidden h-full items-center justify-start gap-4">
        <button class="button-information">
          <font-awesome-icon icon="fa fa-paper-plane" style="color: #ffffff;" />
        </button>
        <span class="font-medium text-sm text-blue-950">{{infos.email}}</span>
      </label>
      <router-link to="/" class="flex h-full items-center justify-center gap-4">
        <img src="/src/assets/logo.png" alt="logo de l'association" class="h-3/5">
        <span class="font-bold text-md text-blue-950 uppercase">CENTRE ÉQUESTRE DE PICARDIE</span>
      </router-link>
      <label class="md:flex hidden h-full items-center justify-end gap-4">
        <span class="font-medium text-sm text-blue-950">{{infos.phone}}</span>
        <button class="button-information">
          <font-awesome-icon icon="fa-solid fa-phone" style="color: #ffffff;" />
        </button>
      </label>
      <button  @click="openMenu" class="md:hidden block p-2 absolute right-2 top-1/2 -translate-y-1/2">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" style="color: #172554;" />
      </button>
    </div>
  </div>
</template>



<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    FontAwesomeIcon
  },
  props: [
    'openMenu',
    'infos'
  ]
}
</script>
