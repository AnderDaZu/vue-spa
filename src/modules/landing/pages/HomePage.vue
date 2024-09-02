<template>
    <div class="text-center">
        <h1 class="font-bold text-4xl tracking-tighter md:text-5xl">Bienvenido a nuestro sitio web</h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam accusantium 
            perspiciatis atque possimus harum porro dolorum iste quasi in non asperiores corrupti, at, sit debitis optio impedit ullam sequi!
        </p>

        <div class="flex flex-col justify-center items-center space-y-2 py-4 bg-purple-200 rounded-full max-w-44 mx-auto my-4">
            <p>Counter: {{ counter }}</p>
            <div class="flex w-40 space-x-4 justify-center">
                <button class="w-8 bg-blue-400 rounded-md text-gray-50 hover:bg-blue-500 hover:text-white"
                    @click="counter--">-1</button>
                <button class="w-8 bg-blue-700 text-gray-50 rounded-md hover:bg-blue-800"
                    @click="counter++">+1</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style lang="scss" scoped></style>
