<template>
  <div id="app">
    <h1>Telephone Country Select</h1>
    <h2 style="color: #999">made with &#x2764; by Mon.</h2>
    <div style="margin: 20px auto">
      <vue-country-code
        @onSelect="onSelect"
        :preferredCountries="['vn', 'us', 'gb']"
        defaultCountry=""
      ></vue-country-code>
    </div>
    <div style="margin-bottom: 30px">
      <code>{{ selectedCountry }}</code>
    </div>

    <h2>Telephone Country Select Multi</h2>
    <div style="margin: 20px auto">
      <vue-country-code-multi @onSelect="onSelectMulti" />
    </div>
    <div>
      <code>{{ selectedCountries }}</code>
    </div>
  </div>
</template>

<script>
import VueCountryCode from "./components/VueCountryCode";
import VueCountryCodeMulti from "@/components/VueCountryCodeMulti.vue";

export default {
  name: "app",
  components: {
    VueCountryCodeMulti,
    VueCountryCode
  },
  data() {
    return {
      selectedCountry: null,
      selectedCountries: []
    };
  },
  methods: {
    onSelect(data) {
      this.selectedCountry = data;
    },
    onSelectMulti(data) {
      this.selectedCountries = data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
