<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '../composables/useApi';
import JokeList from '../components/JokeList.vue';

const jokes = ref([]);
const VITE_JOKE_API_URL = import.meta.env.VITE_JOKE_API_URL;
const { get } = useApi(VITE_JOKE_API_URL);

const fetchJokes = async () => {
  try {
    jokes.value = await get('/jokes/ten');
  } catch (error) {
    console.error('Failed to fetch jokes:', error);
  }
};

onMounted(fetchJokes);
</script>

<template>
     <JokeList :jokes="jokes" />
</template>