<script setup lang="ts">
import ButtonComponentVue from '@/components/atoms/ButtonComponent.vue';
import InputComponent from '@/components/atoms/InputComponent.vue';
</script>

<template>
    <main class="w-full h-screen flex items-center justify-center">
        <div
            class="flex w-full max-w-md py-16 px-8 flex-col justify-center items-start gap-4 rounded-sm bg-white h-full shadow-sm sm:bg-gray-50 sm:h-auto sm:border sm:border-200">
            <h1 class="text-2xl leading-8 font-medium">Create an account</h1>
            <span class=" text-base leading-6 font-normal">Create an account to store your tasks</span>
            <InputComponent label="Email" placeholder="Insert your email" />
            <InputComponent label="Password" type="password" placeholder="Insert your password" />
            <ButtonComponentVue>
                Create account
            </ButtonComponentVue>
            <div class="flex self-stretch justify-center gap-1 ">
                <span class="text-base leading-6 font-normal">Already have an account?</span>
                <router-link to="/login"
                    class="text-base leading-6 font-normal underline text-green-600">Login</router-link>
            </div>
        </div>
    </main>
</template>