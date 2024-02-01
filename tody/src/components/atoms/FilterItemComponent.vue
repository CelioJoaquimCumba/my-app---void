<script setup lang="ts">
import { defineComponent, type PropType } from 'vue';

const {status} = defineProps({
    status: {
        type: String as PropType<'Selected' | 'Unselected'>,
    }
})
</script>

<template>
<div class="flex flex-col px-4 py-2 rounded-lg gap-0.5 text-base leading-6 font-normal" :class="{ 'bg-primary text-background' : status === 'Selected', ' bg-muted' : status === 'Unselected'}">
        <slot></slot>
    </div>
</template>