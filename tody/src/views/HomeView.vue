<script setup lang="ts">
  import ButtonComponent from '@/components/atoms/ButtonComponent.vue';
  import InputComponentVue from '@/components/atoms/InputComponent.vue';
  import FilterItemComponentVue from '@/components/atoms/FilterItemComponent.vue';
  import TaskItemComponentVue from '@/components/molecules/TaskItemComponent.vue';
  import { ref } from 'vue';
  const checked = ref(false)

  const tasks = ref([
    {
      title: 'Task 1',
      checked: false
    },
    {
      title: 'Task 2',
      checked: false
    },
    {
      title: 'Task 3',
      checked: false
    },
    {
      title: 'Task 4',
      checked: false
    }
  ])
  const filters = ref([
    {
      title: 'All',
      selected: true
    },
    {
      title: 'Pending',
      selected: false
    },
    {
      title: 'Completed',
      selected: false
    }
  ])

  const toggleCheck = (index: number) => {
    tasks.value[index].checked = !tasks.value[index].checked;
  };



</script>

<template>
  <main class="w-full flex items-start justify-center sm:p-4">
    <div
      class="flex w-full max-w-md py-16 px-8 flex-col justify-center items-start gap-4 rounded-lg bg-background shadow-sm sm:h-auto sm:border sm:border-200">
      <h1 class="text-2xl leading-8 font-medium">Tasks</h1>
      <span class="text-base leading-6 font-normal">There are the tasks that you have and completed</span>
      <div class="flex self-stretch gap-4">
        <InputComponentVue placeholder="Add new task"/>
        <ButtonComponent>Add Task</ButtonComponent>
      </div>
      <div class="flex self-stretch gap-2">
        <FilterItemComponentVue v-for="(filter, index) in filters" :key="index" :selected="filter.selected" :title="filter.title"/>

      </div>
      <div class="flex flex-col self-stretch overflow-y-auto h-64">
        <TaskItemComponentVue v-for="(task, index) in tasks" :key="index" :title="task.title" :checked="task.checked" :toggleCheck="()=>toggleCheck(index)"/>
      </div>
    </div>
  </main>
</template>