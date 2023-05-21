import VueCountryCode from "./components/VueCountryCode.vue";
import VueCountryCodeMulti from "@/components/VueCountryCodeMulti.vue";

export default {
  ...VueCountryCode,
  install: Vue => {
    Vue.component(VueCountryCode.name, VueCountryCode);
    Vue.component(VueCountryCodeMulti.name, VueCountryCodeMulti);
    return Vue;
  }
};
