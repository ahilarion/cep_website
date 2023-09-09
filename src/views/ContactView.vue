<template>
  <Banner :title="this.title" :url="this.url"/>
  <div class="flex flex-col gap-16 p-2 md:w-1/2 w-full md:min-w-[765px]">
    <iframe class="w-full mt-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10295.637283361786!2d2.3822147330395826!3d49.82536948544469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e78fdc5243f443%3A0x58444443d7b68fd4!2sCentre%20Equestre%20De%20Picardie!5e0!3m2!1sfr!2sfr!4v1694220841331!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="w-full flex mb-16 justify-center flex-wrap gap-16 items-stretch">
      <div class="flex flex-col md:items-start items-center justify-start gap-12 flex-1 min-w-[300px]">
        <label class="flex justify-start items-center gap-8 font-medium text-blue-950">
          <font-awesome-icon icon="fa-solid fa-map-location-dot" size="2xl" style="color: #60a5fa;" />
          <span>{{infos.country}}, {{infos.town}}<br>{{infos.address}}</span>
        </label>
        <label class="flex justify-start items-center gap-8 font-medium text-blue-950">
          <font-awesome-icon icon="fa-solid fa-phone" size="2xl" style="color: #60a5fa;"  />
          <span>{{infos.phone}}</span>
        </label>
        <label class="flex justify-start items-center gap-8 font-medium text-blue-950">
          <font-awesome-icon icon="fa fa-paper-plane" size="2xl" style="color: #60a5fa;" />
          <span>{{infos.email}}</span>
        </label>
      </div>
      <div class="min-w-[380px] flex-1">
        <form class="flex h-full flex-col items-stretch justify-between gap-4 flex-1">
          <input class="border-2 rounded p-2" placeholder="Votre email ici . . ." type="email">
          <textarea class="border-2 rounded p-2 flex-1" placeholder="Message . . ."></textarea>
          <button class="h-10 rounded bg-blue-400 text-white font-medium text-lg">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon, Banner},
  props: [
    'infos'
  ],
  data() {
    return {
      title: "Contact",
      url: "/contact"
    }
  },
}
</script>