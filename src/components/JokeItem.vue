<script setup>
import { defineProps } from 'vue';
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    joke: {
        type: Object
    },
});
</script>
<template>
    <li class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
        <router-link :to="{ name: 'JokeDetail', params: { id: joke.id } }" >
            <div>
                <p class="text-sm font-semibold leading-6 text-gray-900">
                    <span class="hover:underline">{{ joke.setup }}</span>
                </p>
                <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p class="hover:underline">
                        {{ joke.punchline }}
                    </p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <a :href="joke.type" class="hover:underline"><span>#{{ joke.type }}</span></a>
                </div>
            </div>
        </router-link>
        <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
            <div class="flex w-16 gap-x-2.5">
                <router-link :to="{ name: 'JokeDetail', params: { id: joke.id } }" >
                    <dt>
                        <ChatBubbleLeftIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                </router-link>

            </div>
        </dl>
    </li>
</template>