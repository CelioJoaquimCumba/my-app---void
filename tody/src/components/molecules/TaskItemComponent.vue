<script setup lang="ts">
    import type { PropType } from 'vue';
import CheckComponentVue from '../atoms/CheckComponent.vue';
    import TaskOptionsComponentVue from '../atoms/TaskOptionsComponent.vue';
    const { checked, toggleCheck, title } = defineProps({
        title : {
            type: String
        }, 
        checked : {
            type: Boolean
        },
        toggleCheck: {
            type: Function as PropType<() => void>
        }
    })
    const handleClick = () => {
        if(toggleCheck)
        toggleCheck()
    }
</script>
<template>
    <div class="flex py-4 px-2 gap-2 bg-white self-stretch border-b border-gray-300 items-center">
        <CheckComponentVue :checked="checked" :handleClick="handleClick" />
        <span class="text-base leading-6 font-normal flex-grow">
            {{ title }}
        </span>
        <TaskOptionsComponentVue/>
        
    </div>
</template>