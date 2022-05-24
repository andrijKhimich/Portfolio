<template>
  <section class="section section-portfolio">
    <div class="word js-portfolio-word">
      <p>Portfolio</p>
    </div>
    <div class="section-title portfolio__title">
      <h2 class="title-2">Portfolio</h2>
    </div>
    <div class="container_lg">
      <div class="portfolio-row">
        <swiper
          :modules="modules"
          :mousewheel="true"
          :parallax="true"
          :space-between="15"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :speed="750"
          :free-mode="true"
          :loop="true"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            680: {
              slidesPerView: 2.5,
            },
          }"
        >
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <div class="portfolio-card">
              <div class="portfolio-card_rotate">
                <div
                  class="portfolio-card__img"
                  :style="{ backgroundImage: `url(${slide.url})` }"
                  data-swiper-parallax-x="40%"
                ></div>
              </div>
              <div class="portfolio-card__content">
                <a
                  :href="slide.href"
                  class="button button_sm"
                  target="_blank"
                  >{{ slide.btn }}</a
                >
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";
import {Swiper, SwiperSlide} from "swiper/vue"
import { Mousewheel, Parallax } from "swiper";

// import gsap library
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// get ref from vue
import { ref } from "vue";

// init firebase
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "PortfolioSection",
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const slides = ref([]);
    const collectionsRef = collection(db, "portfolio");

    getDocs(collectionsRef).then((snapshot) => {
      let docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      slides.value = docs;
    });

    return {
      slides,
      modules: [Mousewheel, Parallax],
    };
  },
  mounted() {
    gsap.to(".js-portfolio-word", {
      scrollTrigger: {
        trigger: ".js-portfolio-word",
        markers: false,
        start: "-200%, 50%",
        end: "200%, 50%",
        scrub: 10,
        ease: "none",
      },
      x: 100 + "%",
    });
    gsap.to(".portfolio-row", {
      scrollTrigger: {
        trigger: ".portfolio-row",
        markers: false,
        start: "-600, 60%",
        end: "-300, 60%",
        ease: "none",
        scrub: 1,
      },
      opacity: 1,
      top: 0,
    });
  },
};
</script>

<style lang="scss">
@import "../../assets/variables";
@import "../../assets/mixins";
@import "../../assets/fonts";
// Import Swiper styles
//@import "swiper/css";
//@import "swiper/css/navigation";
//@import "swiper/css/mousewheel";
//@import "swiper/css/parallax";
.section-portfolio {
  background-color: $white;
  color: $black;
  padding: 180px 0;

  @include d(992px) {
    padding: 100px 0;
  }

  @include d(768px) {
    padding: 100px 0;
  }

  .word {
    left: 0;
    bottom: 0;
  }

  // .abstract-lines {
  //   top: 0;
  //   left: auto;
  //   right: 0;
  // }
}

.portfolio {
  @include d(1199px) {
    height: 440px;
  }

  @include d(768) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  &__title {
    position: absolute;
    transform: rotate(90deg);
    right: 0;
    top: 180px;

    @include d(1440px) {
      right: -60px;
    }

    @include d(992px) {
      position: relative;
      transform: rotate(0);
      top: 0;
      display: inline-block;
      right: 0;
      padding-left: 30px;
    }

    &:before {
      content: "";
      width: 100px;
      height: 1px;
      position: absolute;
      bottom: -20px;
      left: 95%;
      background-color: $black;

      @include d(1299px) {
        bottom: 0;
      }

      @include d(575px) {
        width: 60px;
        left: 90%;
      }
    }
  }
  &-row {
    max-width: 1200px;
    margin: 0 auto 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    position: relative;
    // transform: translate(0, 20%);
    top: 60px;

    @include d(1440px) {
      max-width: 1100px;
    }

    @include d(1399px) {
      max-width: 1000px;
    }

    @include d(1299px) {
      max-width: 900px;
    }

    @include d(1199px) {
      max-width: 860px;
    }

    @include d(1099px) {
      max-width: 760px;
    }

    @include d(992px) {
      max-width: 100%;
    }
  }

  &-card {
    position: relative;
    overflow: hidden;
    height: 600px;
    filter: grayscale(1);
    transition: filter 1.4s ease;
    border: 1px solid $gray;
    @include d(1440px) {
      height: 500px;
    }
    @include d(1024px) {
      height: 400px;
    }
    @include d(768px) {
      position: relative;
      width: 100%;
      height: 240px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    &_rotate {
      position: relative;
      transform: rotate(25deg);
      height: 100%;
    }
    &__img {
      height: 150%;
      top: -20%;
      width: 300%;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      left: -40%;
      will-change: transform;
    }

    &__content {
      position: absolute;
      width: 100%;
      height: 90%;
      top: 5%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba($black, 0.8);
      pointer-events: none;
      opacity: 0;
      transition: opacity $duration $timing, height $duration $timing,
        top $duration $timing;

      .button {
        text-transform: capitalize;
        top: 10px;
        transition: top $duration $timing, color $duration $timing,
          border-color $duration $timing;

        &:hover {
          border-color: $yellow;
          color: $yellow;
        }
      }
    }
  }
}
.swiper {
  width: 100%;
}
.swiper-wrapper {
  will-change: transform;
}
.swiper-slide-active {
  .portfolio-card {
    filter: saturate(1.2);
  }
  &:hover {
    .portfolio-card__content {
      height: 100%;
      top: 0;
      opacity: 1;
      pointer-events: initial;

      .button {
        top: 0;
      }
    }
  }
}

.js-portfolio-word {
  transform: translate(-100%, 0);
}
</style>