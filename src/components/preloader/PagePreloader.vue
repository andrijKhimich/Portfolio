<template>
  <div class="preloader">
    <svg height="200" width="200">
      <circle
        ref="circle"
        class="circle"
        cx="100"
        cy="100"
        r="95"
        stroke="#e9e9e9"
        stroke-width="2"
        fill-opacity="0"
      />
    </svg>
    <div class="progress">{{ step + "%" }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PagePreloader",
  props: ["delay", "step"],

  data() {
    const circle = ref(null);
    return {
      circle,
    };
  },
  created() {
    console.log("preloader is created");
  },
  mounted() {
    console.log("preloader is loaded");
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
// @import "@/assets/base.scss";

.preloader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: $black;
  top: 0;
  left: 0;
  z-index: 20;
}
.preloader {
  svg,
  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.progress {
  opacity: 0;
  animation: fadeIn 0.75s linear forwards;
}

.circle {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  opacity: 0;
  // animation: stroke 5s ease-out forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>