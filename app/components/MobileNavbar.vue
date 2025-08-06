<script setup lang="ts"></script>

<template>
  <USlideover
    title="Charles.dev"
    description=""
    :close="{
      color: 'primary',
      variant: 'outline',
    }"
    close-icon="mdi:close"
    :overlay="false"
    :ui="{
      title: 'text-xl font-bold text-primary-600 hover:text-primary-700',
    }"
  >
    <UButton
      icon="material-symbols:menu-rounded"
      class="md:hidden text-dark-700"
      variant="ghost"
      color="dark"
      size="lg"
    />
    <template #description></template>
    <template #body>
      <div class="p-6 h-full flex flex-col">
        <div class="flex flex-col space-y-4 flex-grow">
          <UButton
            @click.prevent="scrollToSection('home')"
            label="Home"
            leading-icon="mdi:home"
            size="xl"
            variant="ghost"
            color="dark"
            class="py-3"
          />
          <UButton
            @click.prevent="scrollToSection('skills')"
            label="Skills"
            leading-icon="mdi:code-tags"
            size="xl"
            variant="ghost"
            color="dark"
            class="py-3"
          />
          <UButton
            @click.prevent="scrollToSection('projects')"
            label="Projects"
            leading-icon="mdi:folder-multiple"
            size="xl"
            variant="ghost"
            color="dark"
            class="py-3"
          />
          <UButton
            @click.prevent="scrollToSection('experience')"
            label="Experience"
            leading-icon="mdi:briefcase"
            size="xl"
            variant="ghost"
            color="dark"
            class="py-3"
          />
          <UButton
            @click.prevent="scrollToSection('contact')"
            label="Contact"
            leading-icon="mdi:card-account-phone"
            size="xl"
            variant="ghost"
            color="dark"
            class="py-3"
          />
        </div>

        <div class="mt-6">
          <UButton
            to="https://drive.google.com/uc?export=download&id=1Ov0wLhwboQBPs4ak6pMPInUYUQ7ZVgec"
            target="_blank"
            label="Download CV"
            variant="solid"
            class="w-full block text-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
            size="xl"
          />
        </div>
      </div>
    </template>
  </USlideover>
</template>
