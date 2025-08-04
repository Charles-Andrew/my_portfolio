<script setup lang="ts">
import ContactSection from "~/components/ContactSection.vue";
import ExperienceSection from "~/components/ExperienceSection.vue";
import Footer from "~/components/Footer.vue";
import HeroSection from "~/components/HeroSection.vue";
import MobileNavbar from "~/components/MobileNavbar.vue";
import Navbar from "~/components/Navbar.vue";
import ProjectsSection from "~/components/ProjectsSection.vue";
import SkillsSection from "~/components/SkillsSection.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Navbar />
  <MobileNavbar />
  <HeroSection />
  <SkillsSection />
  <ProjectsSection />
  <ExperienceSection />
  <ContactSection />
  <Footer />
</template>
