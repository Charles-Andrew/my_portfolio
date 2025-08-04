<script setup lang="ts"></script>

<template>
  <div id="mobile-menu" class="fixed inset-0 z-50 hidden">
    <div class="absolute inset-0 bg-black/50" id="menu-overlay"></div>
    <div
      class="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 translate-x-full"
      id="menu-content"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <a href="#" class="text-xl font-bold font-space text-primary-700"
            >DEV<span class="text-primary-500">.</span></a
          >
          <UButton
            icon="material-symbols:close-rounded"
            size="xl"
            class="text-dark-500"
          />
        </div>

        <div class="flex flex-col space-y-4 flex-grow">
          <a
            href="#home"
            class="flex items-center py-3 px-4 rounded-lg hover:bg-primary-50 transition group"
          >
            <i
              class="fas fa-home text-primary-500 w-6 text-center mr-3 group-hover:text-primary-700"
            ></i>
            <span class="font-medium group-hover:text-primary-700">Home</span>
          </a>
          <a
            href="#skills"
            class="flex items-center py-3 px-4 rounded-lg hover:bg-primary-50 transition group"
          >
            <i
              class="fas fa-code text-primary-500 w-6 text-center mr-3 group-hover:text-primary-700"
            ></i>
            <span class="font-medium group-hover:text-primary-700">Skills</span>
          </a>
          <a
            href="#projects"
            class="flex items-center py-3 px-4 rounded-lg hover:bg-primary-50 transition group"
          >
            <i
              class="fas fa-project-diagram text-primary-500 w-6 text-center mr-3 group-hover:text-primary-700"
            ></i>
            <span class="font-medium group-hover:text-primary-700"
              >Projects</span
            >
          </a>
          <a
            href="#experience"
            class="flex items-center py-3 px-4 rounded-lg hover:bg-primary-50 transition group"
          >
            <i
              class="fas fa-briefcase text-primary-500 w-6 text-center mr-3 group-hover:text-primary-700"
            ></i>
            <span class="font-medium group-hover:text-primary-700"
              >Experience</span
            >
          </a>
          <a
            href="#contact"
            class="flex items-center py-3 px-4 rounded-lg hover:bg-primary-50 transition group"
          >
            <i
              class="fas fa-envelope text-primary-500 w-6 text-center mr-3 group-hover:text-primary-700"
            ></i>
            <span class="font-medium group-hover:text-primary-700"
              >Contact</span
            >
          </a>
        </div>

        <div class="mt-6">
          <a
            href="#"
            class="w-full block text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
