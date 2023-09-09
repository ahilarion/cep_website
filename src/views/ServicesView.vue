<template>
  <Banner :title="this.title" :url="this.url"/>
  <div class="w-full top-0 pt-16 pb-16 left-0 h-full z-20 flex items-center justify-center">
    <div class="flex select-none flex-wrap p-2 md:w-1/2 w-full h-full md:min-w-[765px] justify-stretch items-center gap-16">
      <div class="flex md:flex-row flex-col w-full rounded overflow-hidden shadow bg-white">
        <img src="/src/assets/service.jpg" class="md:w-72">
        <div class="flex flex-col items-start p-4 gap-4">
          <h1 class="font-medium text-lg">Services</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae est fugit laudantium placeat quasi quis veritatis. Ad atque consectetur eius, enim est eum in laboriosam maxime natus nesciunt quo repellendus vitae voluptates! At blanditiis doloribus facilis nam provident voluptates voluptatum? Cum excepturi perspiciatis possimus sapiente, sequi tenetur voluptate! Nobis?
          </p>
        </div>
      </div>
      <div class="flex md:flex-row flex-col w-full rounded overflow-hidden shadow bg-white">
        <img src="/src/assets/service.jpg" class="md:w-72">
        <div class="flex flex-col items-start p-4 gap-4">
          <h1 class="font-medium text-lg">Services</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae est fugit laudantium placeat quasi quis veritatis. Ad atque consectetur eius, enim est eum in laboriosam maxime natus nesciunt quo repellendus vitae voluptates! At blanditiis doloribus facilis nam provident voluptates voluptatum? Cum excepturi perspiciatis possimus sapiente, sequi tenetur voluptate! Nobis?
          </p>
        </div>
      </div>
      <div class="flex md:flex-row flex-col w-full rounded overflow-hidden shadow bg-white">
        <img src="/src/assets/service.jpg" class="md:w-72">
        <div class="flex flex-col items-start p-4 gap-4">
          <h1 class="font-medium text-lg">Services</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae est fugit laudantium placeat quasi quis veritatis. Ad atque consectetur eius, enim est eum in laboriosam maxime natus nesciunt quo repellendus vitae voluptates! At blanditiis doloribus facilis nam provident voluptates voluptatum? Cum excepturi perspiciatis possimus sapiente, sequi tenetur voluptate! Nobis?
          </p>
        </div>
      </div>
      <div class="flex md:flex-row flex-col w-full rounded overflow-hidden shadow bg-white">
        <img src="/src/assets/service.jpg" class="md:w-72">
        <div class="flex flex-col items-start p-4 gap-4">
          <h1 class="font-medium text-lg">Services</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae est fugit laudantium placeat quasi quis veritatis. Ad atque consectetur eius, enim est eum in laboriosam maxime natus nesciunt quo repellendus vitae voluptates! At blanditiis doloribus facilis nam provident voluptates voluptatum? Cum excepturi perspiciatis possimus sapiente, sequi tenetur voluptate! Nobis?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {Banner},
  data() {
    return {
      title: "Services",
      url: "/services"
    }
  },
}
</script>