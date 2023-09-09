<template>
  <Banner :title="this.title" :url="this.url"/>
  <Business />
</template>
<script>
import Banner from "@/components/Banner.vue";
import Business from "@/components/Business.vue";

export default {
  components: {Business, Banner},
  data() {
    return {
      title: "Entreprises",
      url: "/business"
    }
  },
}
</script>