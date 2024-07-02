<template>
     <section class="bg-white p-10">
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="discussion in discussions" :key="discussion.id" class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
      <div>
        <p class="text-sm font-semibold leading-6 text-gray-900">
          <a :href="discussion.href" class="hover:underline">{{ discussion.setup }}</a>
        </p>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p>
            <a :href="discussion.id" class="hover:underline">{{ discussion.punchline }}</a>
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <span >#{{ discussion.type }}</span>
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
        <div class="flex w-16 gap-x-2.5">
          <dt>
            <ChatBubbleLeftIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
          </dt>
        </div>
      </dl>
    </li>
  </ul>
 </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ChatBubbleLeftIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

const baseUrl = 'https://official-joke-api.appspot.com/jokes/ten'
const discussions = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(baseUrl)
    discussions.value = data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>