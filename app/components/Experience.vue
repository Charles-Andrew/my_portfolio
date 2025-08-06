<script setup lang="ts">
const props = defineProps<{
  jobTitle: string;
  company: string;
  dateRange: string;
  briefInfo: string;
  techs: string[];
}>();
</script>

<template>
  <div v-motion-slide-visible-left class="mb-12">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3 mb-4 md:mb-0">
        <h3 class="text-xl font-bold">{{ jobTitle }}</h3>
        <p class="text-primary-600">{{ company }}</p>
        <p class="text-dark-500 text-sm">{{ dateRange }}</p>
      </div>
      <div class="md:w-2/3">
        <p class="mb-4">{{ briefInfo }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techs"
            class="bg-white border border-dark-300 text-dark-700 px-3 py-1 rounded-full text-sm"
            >{{ tech }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
