<script setup lang="ts">
import type { PropType } from 'vue';

    const {checked, handleClick} = defineProps({
        checked: {
            type: Boolean
        },
        handleClick: {
            type: Function as PropType<() => void>
        }
    })
</script>

<template>
    <div class="flex w-4 h-4 rounded-sm" :class="{ 'bg-primary' : checked , 'bg-white border border-input' : !checked}" @click="handleClick">
    </div>
</template>