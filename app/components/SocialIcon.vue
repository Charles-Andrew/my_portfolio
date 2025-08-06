<script setup lang="ts">
defineProps<{
  link: string;
  icon: string;
}>();
</script>

<template>
  <UButton
    :to="link"
    target="_blank"
    :icon="icon"
    class="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center hover:bg-primary-600 transition"
  />
</template>
