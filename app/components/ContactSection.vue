<template>
  <section id="contact" class="py-16">
    <UContainer class="mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-space mb-4">
          Get In Touch
        </h2>
        <p class="text-dark-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="flex flex-col md:flex-row gap-12">
          <div class="md:w-full">
            <UCard class="bg-primary-50 p-8 rounded-xl h-full" variant="soft">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <ContactInfo
                  name="Email"
                  value="barsubiacharles@gmail.com"
                  icon="mdi:email"
                  type="email"
                />
                <ContactInfo
                  name="Location"
                  value="Mlang, North Cotabato, Philippines, 9402"
                  icon="mdi:map-marker-radius"
                  type="string"
                />
                <ContactInfo
                  name="LinkedIn"
                  value="https://www.linkedin.com/in/charles-andrew-barsubia-70085a251/"
                  icon="mdi:linkedin"
                  type="link"
                />
                <ContactInfo
                  name="Github"
                  value="https://github.com/Charles-Andrew"
                  icon="mdi:github-box"
                  type="link"
                />
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
