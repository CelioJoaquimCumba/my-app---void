
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, ArchiveBoxIcon } from '@heroicons/vue/20/solid'
import TaskOptionsComponent from '../atoms/TaskOptionsComponent.vue';
const { handleClick } = defineProps(['handleClick'])
</script>

<template>
    <div class=" w-56 text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton>
                    <TaskOptionsComponent/>
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-background shadow-lg ring-1 ring-foreground/5 focus:outline-none">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-destructive text-background' : 'text-foreground',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]" @click="handleClick">
                            Remove
                        </button>
                        </MenuItem>
                    </div>

                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>
