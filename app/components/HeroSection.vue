<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24">
    <UContainer class="mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0">
          <p class="text-primary-600 font-medium mb-2">Hello, I'm</p>
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4"
          >
            Some Guy
          </h1>
          <h2 class="text-2xl md:text-3xl text-dark-600 mb-6">
            Full Stack Developer
          </h2>
          <p class="text-lg text-dark-600 mb-8 max-w-xl">
            I build exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. With 3+ years of experience
            creating effective solutions.
          </p>
          <div class="flex flex-wrap gap-4">
            <UButton
              label="Get in Touch"
              @click.prevent="scrollToSection('contact')"
              size="xl"
              class="px-6 py-3 bg-primary-600 text-white hover:text-white rounded-lg font-medium hover:bg-primary-700 transition"
            />
            <UButton
              label="View Projects"
              @click.prevent="scrollToSection('projects')"
              variant="outline"
              size="xl"
              class="px-6 py-3 border border-dark-300 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition"
            />
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="relative">
            <div
              class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden border-16 border-white shadow-xl"
            >
              <div
                class="bg-gray-200 border-none rounded-full w-56 h-56 md:w-72 md:h-72"
              >
                <NuxtPicture
                  format="webp"
                  src="/profile-pic.webp"
                  :custom="true"
                  width="1000px"
                  placeholder
                  loading="lazy"
                />
              </div>
            </div>
            <div
              class="absolute -top-4 -right-4 bg-warning-500 text-white px-4 py-2 rounded-lg font-medium animate-bounce"
            >
              <span>3+ Years Exp</span>
            </div>
            <div
              class="absolute -bottom-0 left-4 md:left-12 bg-white shadow-lg rounded-lg px-4 py-3"
            >
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mr-3"
                >
                  <Icon name="material-symbols:check" class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-bold">Available for work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
