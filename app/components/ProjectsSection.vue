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
        <Project
          title="HRIS"
          description="A comprehensive software solution that streamlines human resource management through nine integrated modules, modernising operations and enhancing employee experience."
          position="Fullstack"
          :techs="['Django', 'HTMX', 'Tailwind', 'Redis', 'Django Q', 'MySQL']"
          github-url="google.com"
          :website-url="null"
          image-url="hris.webp"
        />

        <Project
          title="Client Deadline Tracker"
          description="A professional tool designed to help teams track deadlines, assign tasks, and stay organise."
          position="Fullstack"
          :techs="['Django REST', 'Nuxt Js', 'Tailwind', 'Redis', 'PostgreSQL']"
          github-url="google.com"
          :website-url="null"
          image-url="cdt.webp"
        />

        <Project
          title="Scholarly Website"
          description="A professional tool designed to help teams track deadlines, assign tasks, and stay organise."
          position="Fullstack"
          :techs="[
            'Django REST',
            'Nuxt Js',
            'Tailwind',
            'Directus',
            'Redis',
            'PostgreSQL',
          ]"
          github-url="google.com"
          website-url="https://scholarlyconsulting.co/services"
          image-url="sw.webp"
        />
      </div>
      <!-- Reserved for future use. -->
      <!-- <div class="text-center mt-12">
        <a
          href="#"
          class="inline-flex items-center px-6 py-3 border border-dark-300 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition"
        >
          View All Projects
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div> -->
    </UContainer>
  </section>
</template>
