<template>
  <footer class="py-12 bg-dark-800 text-white">
    <UContainer class="mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <UButton
            @click.prevent="scrollToSection('home')"
            label="Charles.dev"
            variant="link"
            size="xl"
            color="primary"
            class="p-0 text-xl font-bold font-space text-primary-600 hover:text-primary-700"
          />
          <p class="mt-2 text-dark-300">
            Building digital solutions with passion.
          </p>
        </div>
        <div class="flex space-x-4">
          <SocialIcon
            link="https://github.com/orgs/Scholarly-RC"
            icon="mdi:github-box"
          />
          <SocialIcon
            link="https://www.linkedin.com/in/charles-andrew-barsubia-70085a251/"
            icon="mdi:linkedin"
          />
        </div>
      </div>

      <div
        class="border-t border-dark-700 mt-12 pt-8 text-center text-dark-400"
      >
        <p>© 2025 Charles Andrew P Barsubia. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>
