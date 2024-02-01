<script setup lang="ts">

</script>

<template>
    <button v-bind="$attrs" class="flex py-2 px-4 justify-center items-center gap-3 self-stretch rounded-2xl bg-primary hover:bg-green-700 active:bg-green-600 text-white">
        <slot></slot>
    </button>
</template>