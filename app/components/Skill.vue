<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  level: {
    type: String as PropType<"Beginner" | "Intermediate" | "Advanced">,
  },
});
</script>

<template>
  <UCard
    class="bg-white rounded-xl shadow-sm border border-dark-100 text-center hover:shadow-md transition hover:-translate-y-1"
  >
    <div
      class="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4"
    >
      <Icon :name="icon" class="text-3xl" />
    </div>
    <h3 class="font-bold text-lg mb-1">{{ name }}</h3>
    <p class="text-sm text-dark-500">{{ level }}</p>
  </UCard>
</template>
