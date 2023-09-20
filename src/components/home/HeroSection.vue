<template>
  <section class="section section-home">
    <!-- <div class="video_overlay">
      <video
        class="video"
        autoplay
        muted
        loop
        src="../../assets/video/1.mp4"
      ></video>
    </div> -->
    <div class="container_lg">
      <div class="home-title">
        <div class="abstract-lines js-hero-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="home-title__text js-show-down">
          <h1 class="title-1 js-title">Andrew Khimich</h1>
          <p class="sub-title js-title">
            <span>#</span> Front end developer <span>#</span> freelancer
          </p>
        </div>
      </div>
      <ul class="social__list js-show-top">
        <li class="social__item">
          <a
            href="https://github.com/andrijKhimich"
            target="_blank"
            class="social__link"
          >
            <SvgIcons name="git" class="svg-icon" />
          </a>
        </li>
        <li class="social__item">
          <a
            href="https://www.instagram.com/andrew_khimich/"
            target="_blank"
            class="social__link"
          >
            <SvgIcons name="instagram" class="svg-icon" />
          </a>
        </li>
      </ul>
      <button class="scroll-btn js-show-top">
        <span class="button-text"> scroll </span>
      </button>
    </div>
  </section>
</template>

<script>
import SvgIcons from "../icons/SvgIcons.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SvgIcons,
  },
  setup() {
    // const showLines = (el) => {
    //   gsap.from(el, {
    //     opacity: 0,
    //     y: 50,
    //     duration: 2,
    //     ease: "Power2.easeIn",
    //     stagger: 2,
    //   });
    // };
    // const showTitle = (el) => {
    //   gsap.from(el, {
    //     opacity: 0,
    //     y: 50,
    //     duration: 2,
    //     ease: "Power2.easeOut",
    //   });
    // };
    // return { showTitle, showLines };
  },
  mounted() {
    gsap.to(".js-title", {
      scrollTrigger: {
        trigger: ".js-title",
        markers: false,
        start: "200%, 30%",
        end: "200%, 30%",
        scrub: 3,
        ease: "none",
      },
      y: 200,
      opacity: 0,
    });
    gsap.to(".js-show-top", {
      scrollTrigger: {
        trigger: ".js-show-top",
        markers: false,
        start: "-250%, 30%",
        end: "250%, 30%",
        scrub: 2,
      },
      y: 160,
    });
    gsap.to(".js-hero-lines", {
      scrollTrigger: {
        trigger: ".js-hero-lines",
        markers: false,
        start: "150%, 30%",
        end: "150%, 30%",
        stagger: 0.1,
        scrub: 3,
      },
      width: 0,
      opacity: 0,
    });
  },
};
</script>

<style lang="scss">
@import "../../assets/variables";
@import "../../assets/mixins";
@import "../../assets/fonts";
.section-home {
  background-image: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(74, 74, 74, 1) 100%
  );
  background-size: 300%;
  background-position: left;
  animation: bg-animation 15s ease infinite alternate;
  height: 100vh;
}

.home-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;
  &__text {
    overflow: hidden;
  }
  .abstract-lines {
    span {
      opacity: 0;
      position: relative;
      width: 0;
      left: 100%;
      transform: translate(0, 0) rotate(132deg);
      transform-origin: left;
    }
    @include d(768px) {
      right: 100%;
      bottom: 50%;
    }

    @include d(575px) {
      height: 240px;
      bottom: 40%;
    }

    @include d(480px) {
      display: none;
    }
  }
}

.video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  &_overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        90deg,
        rgba(17, 17, 17, 1) 0%,
        rgba(74, 74, 74, 1) 100%
      );
      background-size: 300%;
      background-position: left;
      animation: bg-animation 15s ease infinite alternate;
      z-index: 1;
      opacity: 0.8;
    }
  }
}

.sub-title {
  text-align: center;
  text-transform: capitalize;
  font-weight: 300;
  color: $white;
  transform: rotate3d(1, 0, 0, 0);
  @include d(768px) {
    font-size: 16px;
  }

  @include d(575px) {
    margin: 0 auto;
  }

  span {
    color: $yellow;
  }
}

.abstract-lines {
  width: 140px;
  height: 300px;
  background-color: transparent;
  position: absolute;
  bottom: 50%;
  right: 90%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 0;
  pointer-events: none;
  @include d(1024px) {
    width: 90px;
    height: 200px;
  }
  span {
    width: 200%;
    height: 1px;
    background-color: $gray;
    display: block;

    &:nth-last-child(-n + 3) {
      opacity: 0 !important;
    }
  }
}

.social {
  &__list {
    opacity: 0;
    position: absolute;
    bottom: 30px;
    left: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @include d(768px) {
      bottom: 20px;
      left: 20px;
    }
  }

  &__item {
    padding: 5px;
  }
  &__link {
    @include rh(1024) {
      &:hover {
        .svg-icon {
          fill: $yellow;
        }
      }
    }
  }
}

.scroll-btn {
  position: absolute;
  right: 0;
  bottom: 70px;
  font-size: 14px;
  text-transform: uppercase;
  transition: color $duration $timing;
  cursor: pointer;
  width: 100%;
  max-width: 140px;
  // transform: translateY(20%);
  opacity: 0;
  @include d(768px) {
    right: -20px;
    font-size: 10px;
  }

  @include rh(1024) {
    &:hover {
      color: $yellow;

      &::after {
        top: 140%;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 110%;
    right: 50%;
    width: 1px;
    height: 30px;
    background-color: $gray;
    transition: top $duration $timing;
  }

  .button-text {
    letter-spacing: 2px;
    font-weight: 300;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
}

.js-show-down {
  opacity: 0;
  transform: translateY(-20%);
}

.js-show-top {
  opacity: 0;
  transform: translateY(20%);
}
</style>