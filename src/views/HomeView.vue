<script>
import HeroSection from "../components/home/HeroSection.vue";
import AboutSection from "../components/home/AboutSection.vue";
import PortfolioSection from "../components/home/PortfolioSection.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    PortfolioSection,
  },
};
</script>

<template>
  <main class="main">
    <HeroSection />
    <AboutSection />
    <PortfolioSection />
  </main>
</template>
