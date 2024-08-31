<template>
    <div class="w-full px-8 md:px-32 lg:px-24">
        <form class="bg-white rounded-md shadow-2xl p-5">
            <h1 class="text-gray-800 font-bold text-2xl mb-8">Olvido Contraseña</h1>
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input
                    id="email"
                    class="pl-2 w-full outline-none border-none"
                    type="email"
                    name="email"
                    placeholder="Correo electrónico" />
            </div>
            
            <button
                type="submit"
                class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" >
                Restablecer contraseña
            </button>

            <hr class="my-6" />

            <div class="flex justify-between">
                <RouterLink :to="{ name: 'login' }"
                    class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    Iniciar sesión
                </RouterLink>

                <RouterLink :to="{ name: 'register' }"
                    class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                    >¿Aún no tienes una cuenta?
                </RouterLink>
            </div>
        </form>
    </div>
</template>
