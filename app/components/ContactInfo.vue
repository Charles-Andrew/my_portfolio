<script setup lang="ts">
const props = defineProps<{
  name: string;
  icon: string;
  type: "email" | "link" | "phone" | "string";
  value: string;
}>();
</script>

<template>
  <div v-motion-slide-visible-top class="flex items-start">
    <div
      class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4"
    >
      <Icon :name="icon" class="w-8 h-8" />
    </div>
    <div>
      <h4 class="font-bold mb-1">{{ name }}</h4>
      <ULink v-if="type == 'email'" :to="`mailto:${value}`">{{ value }}</ULink>
      <ULink v-if="type == 'phone'" :to="`tel:${value}`">{{ value }}</ULink>
      <ULink v-else-if="type == 'link'" :to="value" target="_blank">{{
        value
      }}</ULink>
      <p v-else-if="type == 'string'" class="text-dark-600">{{ value }}</p>
    </div>
  </div>
</template>
