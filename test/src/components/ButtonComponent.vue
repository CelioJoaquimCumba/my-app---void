<template>
  <button
    class="flex flex-row items-center justify-center border p-4 gap-4 rounded-lg shadow-sm self-stretch text-base"
    :class="{
      'bg-primary text-primary-foreground':
        variant === 'primary' && state !== 'disabled',
      'bg-secondary text-secondary-foreground':
        variant === 'secondary' && state !== 'disabled',
      'bg-destructive text-destructive-foreground':
        variant === 'danger' && state !== 'disabled',
      'hover:shadow-md hover:opacity-95 active:shadow-none active:opacity-100':
        state !== 'loading' && state !== 'disabled',
      'cursor-not-allowed bg-muted text-muted-foreground': state === 'disabled',
    }"
    @click="state !== 'loading' && state !== 'disabled' && onClick()"
  >
    {{ value }}
    <div
      v-if="state === 'loading'"
      class="w-6 h-6 rounded-full border-2 border-gray-200 border-t-black animate-spin"
    ></div>
  </button>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ButtonComponent",
  props: {
    value: String,
    onClick: {
      type: Function,
    },
    state: {
      type: String as () => "loading" | "disabled" | "default",
      default: "default",
    },
    variant: {
      type: String as () => "primary" | "secondary" | "danger",
      default: "primary",
    },
  },
  methods: {
    handleClick() {
      this.onClick;
    },
  },
});
</script>
