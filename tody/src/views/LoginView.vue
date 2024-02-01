<script setup lang="ts">
import ButtonComponentVue from '@/components/atoms/ButtonComponent.vue';
import InputComponent from '@/components/atoms/InputComponent.vue';

const handleSubmit = () => {
    console.log("login sample")
}
</script>

<template>
    <main class="w-full h-screen flex items-center justify-center">
        <form class="flex w-full max-w-md py-16 px-12 flex-col justify-center items-start gap-4 rounded-sm bg-background sm:shadow-sm  sm:h-auto sm:border sm:border-200 " @submit.prevent="handleSubmit">
            <h1 class="text-2xl leading-8 font-medium">Login</h1>
            <span class=" text-base leading-6 font-normal">Insert your credentials to see your results</span>
            <InputComponent label="Email" placeholder="Insert your email"/>
            <InputComponent label="Password" type="password" placeholder="Insert your password"/>
            <ButtonComponentVue type="submit">
                Login
            </ButtonComponentVue>
            <div class="flex self-stretch justify-center gap-1 ">
                <span class="text-base leading-6 font-normal">Don't have an account?</span>
                <router-link to="/register" class="text-base leading-6 font-normal underline text-primary">Register</router-link>
            </div>
        </form>
    </main>
</template>