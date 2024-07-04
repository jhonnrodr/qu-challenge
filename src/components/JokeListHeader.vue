<script setup>
import { ref } from 'vue'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import {  ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const categories = ref([
  { name: 'general', id: 1 },
  { name: 'programming', id: 2 },
  { name: 'knock-knock', id: 3 },
])
</script>

<template>
    <header class="flex items-center justify-between border rounded-md border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
    <h1 class="text-base font-semibold leading-7 text-black">Jokes</h1>

    <!-- Sort dropdown -->
    <Menu as="div" class="relative">
      <MenuButton class="flex items-center gap-x-1 text-sm font-medium leading-6 text-black">
        Sort by
        <ChevronUpDownIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
      </MenuButton>
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <MenuItem v-slot="{ active }" v-for="category in categories" :key="category.id">
            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{ category.name }}</a>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>