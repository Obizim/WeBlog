<template>
  <div id="app">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  components: {
    AppNavigation
  }
};
</script>

<style lang="scss">
*,
body,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #000;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
