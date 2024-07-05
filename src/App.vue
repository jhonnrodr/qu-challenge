<template>
    <nav class="px-10 py-5">
        <router-link 
        to="/" 
        class="rounded-md bg-gray-200 px-3 py-2"
        >
        Home
        </router-link>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</template>