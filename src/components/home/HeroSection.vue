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
        <!-- <div class="abstract-lines"> -->
        <!-- <transition-group 
          @before-enter="showLines"
          tag="div"
          class="abstract-lines"
          appear
        >
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
        </transition-group> -->
        <!-- </div> -->
        <transition @before-enter="showTitle" appear>
          <div class="home-title__text">
            <h1 class="title-1">Andrew Khimich</h1>
            <p class="sub-title">
              <span>#</span> Front end developer <span>#</span> freelancer
            </p>
          </div>
        </transition>
      </div>
      <ul class="social__list">
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
      <button class="scroll-btn">
        <span class="button-text"> scroll </span>
      </button>
    </div>
  </section>
</template>

<script>
import SvgIcons from "../icons/SvgIcons.vue";
import gsap from "gsap";

export default {
  setup() {
    const showLines = (el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "Power2.easeOut",
        stagger: 2,
      });
    };
    const showTitle = (el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "Power2.easeOut",
      });
    };
    return { showTitle, showLines };
  },

  components: {
    SvgIcons,
  },
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
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

  .abstract-lines {
    @include d(768px) {
      right: 60%;
      bottom: 80%;
    }

    @include d(575px) {
      width: 160px;
      height: 240px;
      bottom: 90%;
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

  @include d(768px) {
    font-size: 16px;
  }

  @include d(575px) {
    max-width: 70%;
    margin: 0 auto;
  }

  @include d(340) {
    max-width: 80%;
  }

  span {
    color: $yellow;
  }
}

.abstract-lines {
  width: 200px;
  height: 300px;
  background-color: transparent;
  position: absolute;
  bottom: 50%;
  right: 80%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 0;
  pointer-events: none;

  span {
    width: 200px;
    height: 1px;
    background-color: $gray;
    display: block;
    transform: rotate(-48deg);

    &:nth-last-child(-n + 3) {
      opacity: 0;
    }
  }
}

.social {
  &__list {
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
  bottom: 100px;
  font-size: 14px;
  transform: rotate(90deg);
  text-transform: uppercase;
  transition: color $duration $timing;
  cursor: pointer;
  width: 100%;
  max-width: 140px;

  @include d(768px) {
    right: -20px;
    font-size: 10px;
  }

  @include rh(1024) {
    &:hover {
      color: $yellow;

      &::after {
        right: -10px;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 1px;
    background-color: $gray;
    transition: right $duration $timing;
  }

  .button-text {
    letter-spacing: 2px;
    font-weight: 300;
  }
}
</style>