<template>
    <div class="flex-1 h-[calc(100vh-112px)] bg-gradient-to-tr from-purple-400 to-blue-200 flex justify-center items-center py-6">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" >
                <h3 class="mb-3 text-xl font-bold text-indigo-600">Pokemon #{{ props.id }}</h3>
                <div class="relative">
                    <img class="w-full rounded-xl"
                        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`"
                        alt="Colors" />
                    <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg" >
                        FREE
                    </p>
                </div>
                <!-- <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                    Javascript Bootcamp for Absolute Beginners
                </h1> -->
                <div class="my-4 flex justify-between">
                    <RouterLink :to="{ name: 'pokemons', params: { id: (props.id > 1 ) ? props.id - 1 : props.id } }" 
                        class="mt-8 text-xl text-white py-2.5 px-6 rounded-xl shadow-lg"
                        :class="{
                            'bg-gray-400 cursor-default' : props.id === 1,
                            'bg-indigo-600 cursor-pointer' : props.id > 1
                        }" >
                        <i class="fa-solid fa-angle-left"></i>
                    </RouterLink>
                    <RouterLink :to="{ name: 'pokemons', params: { id: props.id + 1 } }" 
                        class="mt-8 text-xl text-white bg-indigo-600 py-2.5 px-6 rounded-xl shadow-lg" >
                        <i class="fa-solid fa-angle-right"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';


interface Props {
    id: number;
}

const props = defineProps<Props>();

</script>