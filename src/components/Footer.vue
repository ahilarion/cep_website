<template>
  <footer class="w-full p-8 pt-20 pb-20 bg-white flex items-start justify-center">
    <div class="flex flex-col gap-16 p-2 md:w-1/2 w-full md:min-w-[765px]">
      <div class="flex gap-8 flex-wrap justify-stretch items-stretch">
        <label class="flex-1 min-w-[244px]">
          <h3 class="font-medium text-blue-950 text-lg">À propos de nous :</h3><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam magnam neque non numquam quam, quas
            quisquam repudiandae sit! Atque distinctio expedita explicabo incidunt libero neque nesciunt quia recusandae
            sapiente vel.
          </p>
        </label>
        <label class="flex-1 min-w-[244px]">
          <h3 class="font-medium text-blue-950 text-lg">Nous contacter</h3><br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/><br/>
            Tél : {{infos.phone}}<br/>
            E-mail : {{infos.email}}
          </p>
        </label>
      </div>
      <p>Copyright &copy;2023 Tout les droits reservés | Développé par <a class="font-medium text-blue-500" href="https://www.alan-hilarion.fr">Alan Hilarion</a> | Design par : <a class="font-medium text-blue-500" href="https://colorlib.com/">Colorlib</a></p>
    </div>
  </footer>
</template>
<script>
  export default {
    props: [
        "infos"
    ]
  }
</script>