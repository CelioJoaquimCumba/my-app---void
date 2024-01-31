<script setup lang="ts">
    import { defineProps } from 'vue';
    const { label } = defineProps(['label'])
    
</script>

<template>
    <div class="flex flex-col items-start gap-2 self-stretch">
        <span>{{ label }}</span>
        <input v-bind="$attrs" class="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-0 focus:border-green-500 text-base leading-6 font-normal">
    </div>
</template>