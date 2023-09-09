<template>
  <Banner :title="this.title" :url="this.url"/>
  <Price />
</template>
<script>
import Banner from "@/components/Banner.vue";
import Price from "@/components/Price.vue";

export default {
  components: {Price, Banner},
  data() {
    return {
      title: "Tarifs",
      url: "/pricing"
    }
  },
}
</script>