<template>
  <div>
    <multiselect
      v-model="value"
      :tag-placeholder="tagPlaceholder"
      :placeholder="placeholder"
      label="name"
      track-by="iso2"
      :options="items"
      :multiple="true"
      :taggable="true"
      :show-labels="false"
      tag-template="tagTemplate"
      @select="onSelect"
    >
      <template slot="option" slot-scope="props">
        <div class="option__desc">
          <div class="vti__flag" :class="props.option.iso2.toLowerCase()"></div>
          <span class="option__title"
            >{{ props.option.name }} +{{ props.option.dialCode }}</span
          >
        </div>
      </template>

      <template slot="tag" slot-scope="option">
        <span class="multiselect__tag">
          <span
            v-if="showFlag"
            class="vti__flag"
            :class="option.option.iso2.toLowerCase()"
          ></span>
          <span v-if="showName">{{ option.option.name }}</span>
          <i
            aria-hidden="true"
            tabindex="1"
            @keydown.enter.prevent="removeElement(option)"
            @mousedown.prevent="removeElement(option)"
            class="multiselect__tag-icon"
          ></i>
        </span>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import allCountries from "../utils/allCountries";

export default {
  components: { Multiselect },
  props: {
    placeholder: {
      default: "Search or add a tag"
    },
    tagPlaceholder: {
      default: "Add this as new tag"
    },
    showFlag: {
      type: Boolean,
      default: true
    },
    showName: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: [],
      items: []
    };
  },
  methods: {
    removeElement(data) {
      const index = this.value.findIndex(v => v.iso2 === data.option.iso2);
      if (index >= 0) {
        this.value.splice(index, 1);
        this.$emit("onSelect", this.value);
      }
    },
    onSelect() {
      this.$emit("onSelect", this.value);
    }
  },
  created() {
    this.items = allCountries;
  },
  mounted() {
    this.$emit("onSelect", this.value);
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style></style>