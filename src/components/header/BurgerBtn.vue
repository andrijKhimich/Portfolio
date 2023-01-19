<template>
  <div
    class="burger"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onHover"
  >
    <div class="burger__circle"></div>
    <div class="burger-btn">
      <span class="burger-btn__item">-</span>
      <span class="burger-btn__item">-</span>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  setup() {
    const onMouseLeave = (e) => {
      const target = e.target;
      gsap.to(target, {height: 150, width: 150, duration: 0.3});
      gsap.to(".burger__circle, .burger-btn", {scale: 1, x: 0, y: 0, duration: 0.3});
    };
    
    const onMouseEnter = (e) => {
      const target = e.target;
      gsap.to(target, {height: 200, width: 200, duration: 0.3});
      gsap.to(".burger__circle", {scale: 1.3, duration: 0.3});
    };
    
    const onHover = (e) => {
      callParallax(e);
    };
    
    const callParallax = (e) => {
      parallaxIt(e, ".burger__circle", 80);
      parallaxIt(e, ".burger-btn", 40);
    };
    
    const parallaxIt = (e, target, movement) => {
      let $this = document.querySelector(".burger");
      let relX = e.pageX - $this.offsetLeft;
      let relY = e.pageY - $this.offsetTop;
      gsap.to(target, {
        x: ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
        y: ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement,
        ease: "power2.inOut",
        duration: .3,
      });
    };
    return {onMouseLeave, onMouseEnter, onHover, callParallax, parallaxIt};
  },
};
</script>

<style lang="scss">
.burger {
  display: flex;
  position: relative;
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
}

.burger-btn {
  position: absolute;
  height: 50px;
  width: 50px;
  border: solid 2px gray;
  border-radius: 100%;
}
</style>