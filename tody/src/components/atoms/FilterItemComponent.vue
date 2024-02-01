<script setup lang="ts">
import { defineComponent, type PropType } from 'vue';

const {selected, title} = defineProps({
    selected: {
        type: Boolean
    },
    title: {
        type: String
    },
    handleSelect: {
        type: Function as PropType<() => void>
    }
})
</script>

<template>
    <button class="flex flex-col px-4 py-2 rounded-lg gap-0.5 text-base leading-6 font-normal hover:opacity-60 active:opacity-100" :class="{ 'bg-primary active:text-background text-background' : selected, ' bg-muted' : !selected }" @click="handleSelect">
        {{ title }} 
    </button>
</template>