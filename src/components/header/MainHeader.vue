<template>
  <header class="header js-show-down">
    <div class="container">
      <div class="header__row">
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/portfolio">Portfolio</RouterLink>
        </nav>
      </div>
      <BurgerBtn/>
    </div>
  </header>
  <RouterView/>
</template>

<script>
import {RouterLink, RouterView} from "vue-router";
import BurgerBtn from "./BurgerBtn.vue";

export default {
  RouterLink,
  RouterView,
  components: {
    BurgerBtn,
  },
};
</script>

<style lang="scss">
@import "../../assets/variables";
@import "../../assets/mixins";
@import "../../assets/fonts";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  text-transform: uppercase;
  z-index: 10;
  opacity: 0;
  transform: translateY(-20%);
}

.nav {
  text-align: center;
  @include d(1440) {
    font-size: 14px;
  }
  
  a {
    color: $gray;
    transition: color $duration;
    letter-spacing: 0.1em;
    
    &:hover {
      color: $yellow;
    }
    
    &:not(:last-child) {
      margin-right: 40px;
      padding: 10px;
    }
    
    &.active {
      color: $yellow;
    }
  }
}
</style>