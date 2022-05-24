<!--suppress JSDeprecatedSymbols -->
<script>
import MainHeader from "./components/header/MainHeader.vue";
import PagePreloader from "./components/preloader/PagePreloader.vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  created() {
    // console.log("App is created");
  },
  mounted() {
    
    this.preloaderAnimation();
    // console.log("App is loaded");

    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        // this.scroll();
        // let sections = gsap.utils.toArray(".section");
        // gsap.to(sections, {
        //   xPercent: -100 * (sections.length - 1),
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: ".main",
        //     pin: true,
        //     pinSpacing: false,
        //     scrub: 1,
        //     snap: 1 / (sections.length - 1),
        //     end: "+=" + document.querySelector(".main").offsetWidth,
        //   },
        // });
      }
    };
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
              duration: 1,
              width: 200 + "%",
              stagger: 0.1,
              opacity: 1,
            },
          )
          .to(".js-show-down, .js-show-top", { duration: 1, opacity: 1, y: 0 }, `-=1`)
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
@import "./assets/mixins.scss";
@import "./assets/fonts.scss";
@import "./assets/variables.scss";
@import "./assets/base.scss";
</style>
