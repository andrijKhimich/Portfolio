<script>
	import HeroSection from '../components/home/HeroSection.vue';
	import AboutSection from '../components/home/AboutSection.vue';
	import PortfolioSection from '../components/home/PortfolioSection.vue';
	// import ContactSection from '../components/home/ContactSection.vue';
	export default {
		components: {
			HeroSection,
			AboutSection,
			PortfolioSection,
			// ContactSection,
		},
	};
</script>

<template>
	<main class="main">
		<HeroSection />
		<AboutSection />
		<PortfolioSection />
		<!-- <ContactSection /> -->
	</main>
</template>
