import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://jzmzkurpojsvffaksltn.supabase.co",
  supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NTM5LCJleHAiOjE5NTg1NzQ1Mzl9.LoPkF3ovH78XqBeI3NJ56nELPBssEWWH4at4pxyjVIQ",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
