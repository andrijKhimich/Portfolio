<script>
import MainHeader from "./components/header/MainHeader.vue";
import PagePreloader from "./components/preloader/PagePreloader.vue";

export default {
  components: {
    MainHeader,
    PagePreloader,
  },
  data() {
    return {
      delay: null,
      circleDelay: null,
      isPreloader: true,
      step: 0,
    };
  },
  mounted() {
    console.log("App is loaded", this.circleDelay);
    this.hidePreloader();
  },

  methods: {
    // hide preloader after app loaded
    hidePreloader() {
      window.addEventListener("load", () => {
        let loadTime =
          window.performance.timing.domContentLoadedEventEnd -
          window.performance.timing.navigationStart;
        this.delay += loadTime;
        const totalDelay = this.delay + 2000;

        let percent = Math.round(totalDelay / 100);
        // let step = 0;
        let count = setInterval(() => {
          this.step++;
          if (this.step === 100) {
            clearInterval(count);
          }
        }, percent);

        setTimeout(() => {
          this.isPreloader = false;
        }, totalDelay + 1000);

        console.log((this.circleDelay += totalDelay));
        console.log(this.circleDelay);
      });
    },
  },
};
</script>

<template>
  <PagePreloader :delay="circleDelay" :step="step" v-show="isPreloader" />
  <MainHeader />
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
@import "@/assets/base.scss";
</style>
