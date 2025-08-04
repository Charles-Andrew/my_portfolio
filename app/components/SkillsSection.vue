<template>
  <section id="skills" class="py-16 bg-dark-50">
    <UContainer class="mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-space mb-4">
          Technical Skills
        </h2>
        <p class="text-dark-600 max-w-2xl mx-auto">
          I've worked with a range of technologies in the web development world.
          Here are some of the tools I'm most proficient with.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Skill icon="i-custom-html" name="HTML 5" level="Intermediate" />
        <Skill icon="i-custom-css" name="CSS 3" level="Intermediate" />
        <Skill
          icon="i-custom-javascript"
          name="JavaScript"
          level="Intermediate"
        />
        <Skill icon="i-custom-vue" name="Vue Js" level="Intermediate" />
        <Skill icon="i-custom-nuxt" name="Nuxt Js" level="Intermediate" />
        <Skill icon="i-custom-python" name="Python" level="Intermediate" />
        <Skill icon="i-custom-django-new" name="Django" level="Intermediate" />
        <Skill
          icon="i-custom-django-new"
          name="Django Rest"
          level="Intermediate"
        />
        <Skill
          icon="i-custom-postgresql-new"
          name="PostgreSQL"
          level="Intermediate"
        />
        <Skill icon="i-custom-mysql-new" name="MySQL" level="Intermediate" />
      </div>
    </UContainer>
  </section>
</template>
