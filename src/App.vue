<script>
import MainHeader from "./components/header/MainHeader.vue";
import PagePreloader from "./components/preloader/PagePreloader.vue";

import { gsap } from "gsap";

export default {
  components: {
    MainHeader,
    PagePreloader,
  },
  data() {
    return {
      delay: null,
      isPreloader: true,
      step: 0,
    };
  },
  mounted() {
    console.log("App is loaded");
    this.preloaderAnimation();
  },
  created() {
    console.log("App is created");
  },
  methods: {
    preloaderAnimation() {
      window.addEventListener("load", () => {
        let loadTime =
          window.performance.timing.domContentLoadedEventEnd -
          window.performance.timing.navigationStart;
        this.delay += loadTime;
        const totalDelay = this.delay + 2000;

        let percent = Math.round(totalDelay / 100);

        let count = setInterval(() => {
          this.step++;
          if (this.step === 100) {
            clearInterval(count);
          }
        }, percent);
        const duration = Math.ceil(percent / 10);

        let timeline = gsap.timeline({});
        timeline
          .to(".circle", {
            duration: duration,
            opacity: 1,
            strokeDashoffset: 0,
          })
          .to(".preloader", {
            duration: duration / 3,
            opacity: 0,
            display: "none",
          })
          .to(
            ".js-hero-lines span",
            {
              duration: 0.2,
              y: 0,
              x: 0,
              stagger: 0.1,
              opacity: 1,
            },
            "-=1"
          )
          .to(".js-show-item", { duration: 1, opacity: 1, y: 0 }, `-=1`)
          .to(".js-show-item", { duration: 1, opacity: 1, y: 0 }, `-=1`)
          .to(".js-show-header", { duration: 1, opacity: 1, y: 0 }, `-=1`)
          .from(".js-title", { duration: .8, rotationX: 90 })
      });
    },
  },
};
</script>

<template>
  <PagePreloader :step="step" v-show="isPreloader" />
  <MainHeader />
</template>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
@import "@/assets/base.scss";
</style>
