<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../composables/useApi';
import JokeItem from '../components/JokeItem.vue';

const route = useRoute();
const router = useRouter()
const joke = ref(null);
const VITE_JOKE_API_URL = import.meta.env.VITE_JOKE_API_URL;
const { get } = useApi(VITE_JOKE_API_URL);

const fetchJoke = async (id) => {
    try {
        joke.value = await get(`/jokes/${id}`);
    } catch (error) {
        console.error('Failed to fetch joke:', error);
    }
};

onMounted(() => {
    if (route.params.id) {
        fetchJoke(route.params.id);
    }
});

</script>
<template>
    <section class="bg-white p-10">
        <div v-if="joke">
            <ul role="list" class="divide-y divide-gray-100">
                <JokeItem  :key="joke.id" :joke="joke" />
            </ul>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </section>
</template>