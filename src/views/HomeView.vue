<template>
  <Banner/>
  <Presentation/>
  <TransitionBanner />
  <Price/>
</template>

<script>
  import Banner from "@/components/BannerHome.vue";
  import Presentation from "@/components/Presentation.vue";
  import TransitionBanner from "@/components/TransitionBanner.vue";
  import Price from "@/components/Price.vue";

  export default {
    components: {Price, Presentation, Banner, TransitionBanner}
  }
</script>