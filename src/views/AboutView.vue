<template>
  <Banner :title="this.title" :url="this.url"/>
  <Presentation/>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Presentation from "@/components/Presentation.vue";

export default {
  components: {Presentation, Banner},
  data() {
    return {
      title: "À Propos",
      url: "/about-us"
    }
  },
}
</script>