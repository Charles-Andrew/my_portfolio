<template>
  <section id="projects" class="py-16">
    <UContainer class="mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-space mb-4">
          Featured Projects
        </h2>
        <p class="text-dark-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project reflects my passion
          for creating efficient and user-friendly solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <div
            class="h-48 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
          >
            <div
              class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
            ></div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">E-commerce Platform</h3>
              <span
                class="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded"
                >Full Stack</span
              >
            </div>
            <p class="text-dark-600 mb-4">
              A modern e-commerce solution with cart functionality, payment
              integration, and admin dashboard.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >React</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Node.js</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >MongoDB</span
              >
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary-600 font-medium hover:underline"
                >View Project</a
              >
              <a href="#" class="text-dark-500 hover:text-dark-700">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <div
            class="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
          >
            <div
              class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
            ></div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">Task Management App</h3>
              <span
                class="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded"
                >Frontend</span
              >
            </div>
            <p class="text-dark-600 mb-4">
              A productivity application with drag-and-drop interface, task
              categorization, and progress tracking.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Vue.js</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Firebase</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Tailwind CSS</span
              >
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary-600 font-medium hover:underline"
                >View Project</a
              >
              <a href="#" class="text-dark-500 hover:text-dark-700">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <div
            class="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center"
          >
            <div
              class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
            ></div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold">Health Analytics Dashboard</h3>
              <span
                class="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded"
                >Data Viz</span
              >
            </div>
            <p class="text-dark-600 mb-4">
              Interactive dashboard for healthcare professionals to visualize
              patient data and track key metrics.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >D3.js</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Python</span
              >
              <span class="bg-dark-100 text-dark-700 px-2 py-1 rounded text-sm"
                >Flask</span
              >
            </div>
            <div class="flex justify-between">
              <a href="#" class="text-primary-600 font-medium hover:underline"
                >View Project</a
              >
              <a href="#" class="text-dark-500 hover:text-dark-700">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <a
          href="#"
          class="inline-flex items-center px-6 py-3 border border-dark-300 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition"
        >
          View All Projects
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </UContainer>
  </section>
</template>
