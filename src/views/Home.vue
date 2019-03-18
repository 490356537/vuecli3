<template>
  <div class="home">
    <div>99999999999999999999999999999</div>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    什么玩意？{{author}}1
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },

  computed: {
    author () {
      return this.$store.state.author
    }
  }
};
</script>
