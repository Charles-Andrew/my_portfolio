<script setup lang="ts"></script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-dark-100 shadow-sm"
  >
    <UContainer class="mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" class="text-xl font-bold font-space text-primary-700"
        >DEV<span class="text-primary-500">.</span></a
      >
      <div class="hidden md:flex space-x-8">
        <ULink to="#home" class="nav-link hover:text-primary-600 transition"
          >Home</ULink
        >
        <ULink to="#skills" class="nav-link hover:text-primary-600 transition"
          >Skills</ULink
        >
        <ULink to="#projects" class="nav-link hover:text-primary-600 transition"
          >Projects</ULink
        >
        <ULink
          to="#experience"
          class="nav-link hover:text-primary-600 transition"
          >Experience</ULink
        >
        <ULink to="#contact" class="nav-link hover:text-primary-600 transition"
          >Contact</ULink
        >
      </div>
      <div class="flex items-center space-x-4">
        <UButton
          label="Download CV"
          variant="solid"
          class="hidden md:inline-block px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          size="xl"
        />
        <UButton
          icon="material-symbols:menu-rounded"
          class="md:hidden text-dark-700"
          variant="link"
          size="lg"
        />
      </div>
    </UContainer>
  </nav>
</template>
