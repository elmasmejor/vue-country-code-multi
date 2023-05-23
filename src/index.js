import VueCountryCode from "./components/VueCountryCode.vue";
import VueCountryCodeMulti from "@/components/VueCountryCodeMulti.vue";

export default {
  ...VueCountryCodeMulti,
  install: Vue => {
    Vue.component(VueCountryCodeMulti.name, VueCountryCodeMulti);
    return Vue;
  }
};
