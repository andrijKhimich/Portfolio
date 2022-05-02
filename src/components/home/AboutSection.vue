<template>
  <section class="section section-about">
    <div class="word">
      <p>About</p>
    </div>
    <div class="abstract-lines">
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
    <div class="container_lg">
      <div class="about-row">
        <div class="about-content">
          <div class="section-title">
            <h2 class="title-2">About</h2>
          </div>
          <p>
            Hello, my name is Andrii Khimich, I am a front-end developer from
            Ukraine.
          </p>
          <p>
            I have more than 5 years of web development experience. In my work,
            I always try to provide the latest technologies and features for
            creating modern web interfaces. Usually, I work with Gulp, SASS, and
            Java-Script, so my code is always clean and minimized. Open to new
            offers and like to create something new in my daily work.
          </p>
        </div>
        <div class="about-img">
          <img :src="image" :alt="alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "../../assets/img/andrew.jpg";
export default {
  data: function () {
    return {
      image: image,
      alt: "Andrew Khimich",
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
.section-about {
  background: $gray;
  padding: 180px 0;

  @include d(768) {
    padding: 100px 0;
  }

  .abstract-lines {
    top: 0;
    left: 0;

    @include d(768) {
      right: 0;
      left: auto;
      top: 20px;
    }

    span {
      background-color: $black;
    }
  }

  .title-2 {
    color: $black;
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      width: 100px;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 95%;
      background-color: $black;

      @include d(1299) {
        bottom: 0;
      }

      @include d(575) {
        width: 60px;
        left: 90%;
      }
    }
  }

  p {
    text-align: justify;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .word {
    @include d(991) {
      right: -100px;
    }

    @include d(768) {
      right: -300px;
    }
  }
}

.about {
  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @include d(768) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  &-img {
    width: 40%;
    position: relative;
    overflow: hidden;
    img {
      position: relative;
      object-fit: cover;
      // max-width: 120%;
      // width: 120%;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // width: 100%;
      // transform: translate(-50%, -50%);
    }
    @include d(767) {
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 40px;
      width: 60%;
    }

    @include d(575) {
      width: 100%;
    }
  }

  &-content {
    width: 60%;
    padding-right: 60px;

    @include d(768) {
      width: 90%;
      margin: 0 auto;
      padding-right: 0;
    }

    @include d(575) {
      width: 100%;
    }
  }
}
</style>