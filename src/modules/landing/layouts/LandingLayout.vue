<template>
    <div class="flex flex-col h-screen">
        <!-- Header -->
        <header class="flex items-center min-h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
            <div>
                <a class="flex items-center gap-2 font-semibold" href="#">
                    <img
                        alt="Vue logo"
                        class="logo"
                        src="@/assets/logo.svg"
                        width="40"
                        height="40"
                    />
                </a>
            </div>
            <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
                <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
                <RouterLink to="/features"> Features </RouterLink>
                <RouterLink :to="'/pricing'"> Pricing </RouterLink>
                <RouterLink to="/contact"> Contact </RouterLink>
                <RouterLink :to="{ name: 'pokemons', params: { id: 1 } }">Pokemons</RouterLink>
                <RouterLink :to="{ name: 'login' }" class=" bg-blue-600 px-2 py-1.5 rounded-md text-gray-50 hover:bg-blue-700 hover:text-white transition-colors">Iniciar sesión</RouterLink>
            </nav>
        </header>
        <!-- Fin Header -->

        <!-- Main -->
        <main class="flex-1 flex items-center justify-center">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
            <!-- <RouterView /> -->
        </main>
        <!-- Fin Main -->

        <!-- Footer -->
        <footer class="flex items-center min-h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
            <p class="flex-1 text-sm text-gray-500 text-center">
                © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
            </p>
        </footer>
        <!-- Fin Footer -->
    </div>
</template>
