<script setup lang="ts">
const props = defineProps<{
  imageUrl: string;
  title: string;
  description: string;
  position: string;
  techs: string[];
  githubUrl: string | null;
  websiteUrl: string | null;
}>();
</script>

<template>
  <UCard
    v-motion-slide-visible-top
    class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
    :ui="{
      body: 'h-[22rem] overflow-y-auto',
    }"
  >
    <template #header>
      <div
        class="h-full w-auto bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
      >
        <NuxtPicture
          :src="`/${imageUrl}`"
          height="700px"
          placeholder
          loading="lazy"
        />
      </div>
    </template>
    <div class="p-4 flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <span
            class="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded"
            >{{ position }}</span
          >
        </div>
        <p class="text-dark-600 mb-4">{{ description }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in techs"
            class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
            >{{ tech }}</span
          >
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex justify-between">
        <UButton
          v-if="githubUrl"
          :to="githubUrl"
          target="_blank"
          label="View Project"
          leading-icon="mdi:github"
          class="text-dark-500 hover:text-dark-700"
          variant="link"
        />
        <UButton
          v-if="websiteUrl"
          :to="websiteUrl"
          target="_blank"
          label="View Website"
          leading-icon="mdi:search-web"
          class="text-dark-500 hover:text-dark-700"
          variant="link"
        />
      </div>
    </template>
  </UCard>
</template>
