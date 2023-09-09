<template>
  <Banner :title="this.title" :url="this.url"/>
  <div class="w-full top-0 pt-16 pb-16 left-0 h-[40rem] z-20 flex items-center justify-center">
    <h1 class="text-lg font-medium">En maintenance . . .</h1>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {Banner},
  data() {
    return {
      title: "Actualités",
      url: "/news"
    }
  },
}
</script>