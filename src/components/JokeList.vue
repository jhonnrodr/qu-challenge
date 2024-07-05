<script setup>
import { ref, watch, defineProps, computed } from 'vue';
import JokeItem from './JokeItem.vue';
import JokeListHeader from './JokeListHeader.vue';
import Paginator from './Paginator.vue';

const props = defineProps({
  jokes: {
    type: Array,
    required: true,
  }
});

const currentPage = ref(1);
const jokesPerPage = 5;
const totalPages = computed(() => {
  return Math.ceil(props.jokes.length / jokesPerPage);
});

const sortedJokes = ref([]);
const paginatedJokes = ref([]);
const filterType = ref(null);

const sortJokes = () => {
  sortedJokes.value = [...props.jokes].sort((a, b) => {
      if (a.type === filterType.value && b.type !== filterType.value) return -1;
      if (a.type !== filterType.value && b.type === filterType.value) return 1;

    return 0;
  });
  paginateJokes();
};

const paginateJokes = () => {
  const start = (currentPage.value - 1) * jokesPerPage;
  const end = start + jokesPerPage;
  paginatedJokes.value = sortedJokes.value.slice(start, end);
};

watch([() => props.jokes, currentPage], sortJokes, { immediate: true });

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    paginateJokes();
  }
};

const handleSortChange = (field) => {
  filterType.value = field;
  sortJokes();
};

</script>

<template>
  <JokeListHeader @sort-changed="handleSortChange" :jokes="jokes"/>
  <section class="bg-white p-10">
    <ul role="list" class="divide-y divide-gray-100">
      <JokeItem v-for="joke in paginatedJokes" :key="joke.id" :joke="joke" />
    </ul>
    <Paginator :current-page="currentPage" :total-pages="totalPages" @page-changed="handlePageChange" />
  </section>
</template>
