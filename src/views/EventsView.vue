<template>
  <Banner :title="this.title" :url="this.url"/>
  <Events/>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Events from "@/components/Events.vue";

export default {
  components: {Events, Banner},
  data() {
    return {
      title: "Concours",
      url: "/events"
    }
  },
}
</script>