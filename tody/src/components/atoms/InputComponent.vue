<script setup lang="ts">
    import { defineProps } from 'vue';
    const { label, modelValue } = defineProps(['label', 'modelValue'])
    
</script>

<template>
    <div class="flex flex-col items-start gap-2 self-stretch flex-grow">
        <span v-if="label">{{ label }}</span>
        <input
            v-bind="$attrs"
            class="flex w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-green-500 text-base leading-6 font-normal"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>