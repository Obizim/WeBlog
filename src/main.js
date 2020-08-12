import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// CUSTOM DIRECTIVES
Vue.directive("rainbow", {
  bind(el) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

//FILTERS
Vue.filter("uppercase", function(value) {
  return value.toUpperCase();
});

Vue.filter("reduce", function(value) {
  return value.slice(0, 50) + "...";
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
