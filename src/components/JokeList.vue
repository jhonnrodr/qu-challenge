<script setup>
import { defineProps } from 'vue';
import JokeItem from './JokeItem.vue';

const props = defineProps({
    jokes: {
        type: Object
    },
});
</script>

<template>
 <section class="bg-white p-10">
 <ul role="list" class="divide-y divide-gray-100" >
   <JokeItem v-for="joke in jokes" :key="joke.id" :joke="joke" />
 </ul>
</section>
</template>