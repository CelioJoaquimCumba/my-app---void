<script setup lang="ts">
  import ButtonComponent from '@/components/atoms/ButtonComponent.vue';
  import InputComponentVue from '@/components/atoms/InputComponent.vue';
  import FilterItemComponentVue from '@/components/atoms/FilterItemComponent.vue';
  import TaskItemComponentVue from '@/components/molecules/TaskItemComponent.vue';
  import { computed, ref } from 'vue';

  interface Task {
    title: string;
    checked: boolean;
  }

  const tasks = ref<Array<Task>>([])
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
  const filteredTasks = computed(() => {
    return tasks.value.filter((task) => {
      if (filters.value[0].selected) {
        return true;
      } else if (filters.value[1].selected && !task.checked) {
        return true;
      } else if (filters.value[2].selected && task.checked) {
        return true;
      }
      return false;
    });
  });
  

  const toggleCheck = (index: number) => {
    tasks.value[index].checked = !tasks.value[index].checked;
    console.log(taskInput.value)
  };

  const handleFilter = (index: number) => {
    for (let i = 0; i < filters.value.length; i++) {
      if (i === index) {
        filters.value[i].selected = true;
      } else {
        filters.value[i].selected = false;
      }
    }
  }

  const taskInput = ref('')

  const handleSubmit = () => {
    tasks.value.unshift({
      title: taskInput.value,
      checked: false
    })
    taskInput.value = ""
  }


</script>

<template>
  <main class="w-full flex items-start justify-center sm:p-4 ">
    <div
      class="flex w-full max-w-md py-16 px-8 flex-col justify-center items-start gap-4 rounded-lg bg-background shadow-sm sm:h-auto sm:border sm:border-200">
      <h1 class="text-2xl leading-8 font-medium">Tasks</h1>
      <span class="text-base leading-6 font-normal">There are the tasks that you have and completed</span>
      <form class="flex self-stretch gap-4" @submit.prevent="handleSubmit">
        <InputComponentVue placeholder="Add new task" v-model="taskInput"/>
        <ButtonComponent type="submit" >Add Task</ButtonComponent>
      </form>
      <div class="flex self-stretch gap-2" v-if="tasks.length > 0">
        <FilterItemComponentVue v-for="(filter, index) in filters" :key="index" :selected="filter.selected" :title="filter.title" :handleSelect="()=>handleFilter(index)"/>

      </div>
      <div class="flex flex-col self-stretch overflow-y-auto h-96" v-if="filteredTasks.length > 0">
        <TaskItemComponentVue v-for="(task, index) in filteredTasks" :key="index" :title="task.title" :checked="task.checked" :toggleCheck="()=>toggleCheck(index)"/>
      </div>
      <div v-else class="text-center text-muted-foreground text-base leading-6 font-thin self-stretch">No tasks yet. add one</div>
    </div>
  </main>
</template>