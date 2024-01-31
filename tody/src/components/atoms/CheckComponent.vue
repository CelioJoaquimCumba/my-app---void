<script setup lang="ts">
import type { PropType } from 'vue';

    const {checked} = defineProps({
        checked: {
            type: Boolean
        }
    })
</script>

<template>
    <div class="flex w-3 h-3 rounded-sm" :class="{ 'bg-green-600' : checked , 'bg-white border border-gray-900' : !checked}">

    </div>
</template>