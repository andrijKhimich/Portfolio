<script>
import HeroSection from "../components/home/HeroSection.vue";
import AboutSection from "../components/home/AboutSection.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
  },
};
</script>

<template>
  <main class="main">
    <HeroSection />
    <AboutSection />
  </main>
</template>
