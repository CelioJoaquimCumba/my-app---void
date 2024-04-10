<template>
  <div class="flex flex-col w-full h-screen items-center justify-center">
    <div
      class="flex flex-col w-1/2 h-1/2 items-center justify-center shadow-md p-8"
    >
      <ButtonComponent value="Click me" onclick="console.log('clicked')" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    ButtonComponent,
  },
});
</script>
