<template>
  <input
    v-model="inputValue"
    :placeholder="placeholder"
    class="input"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      default: "Digite um texto",
    },
    value: String,
  },
  data() {
    return {
      inputValue: this.value || "",
    };
  },
  methods: {
    handleInput(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        this.inputValue = event.target.value;
        this.$emit("input", this.inputValue);
      }
    },
  },
});
</script>
