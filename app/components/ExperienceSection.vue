<template>
  <section id="experience" class="py-16 bg-dark-50">
    <UContainer class="mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-space mb-4">
          Work Experience
        </h2>
        <p class="text-dark-600 max-w-2xl mx-auto">
          My professional journey and the roles I've held that have shaped my
          expertise in software development.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <Experience
          job-title="Fullstack Web Developer"
          company="FREELANCE"
          date-range="2024 - Present"
          brief-info="Specializing in responsive web applications using Vue.js (Nuxt) and Django REST Framework. Delivered scalable solutions, optimized performance by 30%, and implemented secure authentication systems. Collaborated with stakeholders to drive adoption and deployed projects via Railway for cloud hosting."
          :techs="['Nuxt Js', 'Django REST', 'Tailwind', 'PostgreSQL', 'MySQL']"
        />
        <Experience
          job-title="Junior Software Engineer"
          company="MUGNA TECHNOLOGIES"
          date-range="2022 - 2024"
          brief-info="Specializing in scalable Django and MySQL systems. Optimized frontend performance with React and Tailwind CSS, improved release cycles by 15% through Agile collaboration, and enforced code quality via Git and peer reviews to reduce production issues."
          :techs="[
            'Django REST',
            'Django',
            'React',
            'Next Js',
            'Tailwind',
            'PostgreSQL',
            'MySQL',
          ]"
        />

        <Experience
          job-title="Software Engineer Intern"
          company="NOTRE DAME OF KIDAPAWAN COLLEGE"
          date-range="2022 - 2022"
          brief-info="Engineered a Python-based chatbot using Flask and NLP to automate student inquiries, reducing administrative workload by 20%. Enhanced dialogue logic to improve response accuracy and user engagement through iterative testing and refinement."
          :techs="['Flask', 'Facebook Messenger API']"
        />
      </div>
    </UContainer>
  </section>
</template>
