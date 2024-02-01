<script setup lang="ts">
import ButtonComponentVue from '@/components/atoms/ButtonComponent.vue';
import InputComponent from '@/components/atoms/InputComponent.vue';

const handleSubmit = () => {
    console.log("login sample")
}

</script>

<template>
    <main class="w-full h-screen flex items-center justify-center">
        <form
            class="flex w-full max-w-md py-16 px-12 flex-col justify-center items-start gap-4 rounded-sm bg-white  sm:shadow-sm  sm:h-auto sm:border sm:border-200" @submit.prevent="handleSubmit">
            <h1 class="text-2xl leading-8 font-medium">Create an account</h1>
            <span class=" text-base leading-6 font-normal">Create an account to store your tasks</span>
            <InputComponent label="Email" placeholder="Insert your email" />
            <InputComponent label="Password" type="password" placeholder="Insert your password" />
            <ButtonComponentVue type="submit">
                Create account
            </ButtonComponentVue>
            <div class="flex self-stretch justify-center gap-1 ">
                <span class="text-base leading-6 font-normal">Already have an account?</span>
                <router-link to="/login"
                    class="text-base leading-6 font-normal underline text-primary">Login</router-link>
            </div>
        </form>
    </main>
</template>