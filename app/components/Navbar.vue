<script setup lang="ts">
import MobileNavbar from "./MobileNavbar.vue";
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-dark-100 shadow-sm"
  >
    <UContainer
      class="mx-auto px-4 py-3 flex justify-end md:justify-between items-center"
    >
      <UButton
        @click.prevent="scrollToSection('home')"
        label="Charles.dev"
        variant="link"
        size="xl"
        color="primary"
        class="hidden md:block text-xl font-bold font-space text-primary-600 hover:text-primary-700"
      />
      <div class="hidden md:flex space-x-4">
        <UButton
          @click.prevent="scrollToSection('home')"
          label="Home"
          variant="link"
          size="xl"
          color="dark"
          class="relative hover:text-primary-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
        />
        <UButton
          @click.prevent="scrollToSection('skills')"
          label="Skills"
          variant="link"
          size="xl"
          color="dark"
          class="relative hover:text-primary-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
        />
        <UButton
          @click.prevent="scrollToSection('projects')"
          label="Projects"
          variant="link"
          size="xl"
          color="dark"
          class="relative hover:text-primary-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
        />
        <UButton
          @click.prevent="scrollToSection('experience')"
          label="Experience"
          variant="link"
          size="xl"
          color="dark"
          class="relative hover:text-primary-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
        />
        <UButton
          @click.prevent="scrollToSection('contact')"
          label="Contact"
          variant="link"
          size="xl"
          color="dark"
          class="relative hover:text-primary-600 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300"
        />
      </div>
      <div class="flex items-center space-x-4">
        <UButton
          to="https://drive.google.com/uc?export=download&id=1DMBcNzyljhqSxocueHhNb_qA1XEVx9RJ"
          target="_blank"
          label="Download CV"
          variant="solid"
          class="hidden md:inline-block px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          size="xl"
        />
        <MobileNavbar />
      </div>
    </UContainer>
  </nav>
</template>
