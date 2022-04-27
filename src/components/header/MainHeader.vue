<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <nav class="nav">
          <RouterLink :active="active" to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/portfolio">Portfolio</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default { RouterLink, RouterView };
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
@import "@/assets/fonts.scss";
@import "@/assets/variables.scss";
@import "@/assets/base.scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  text-transform: uppercase;
  z-index: 10;
}
.nav {
  text-align: center;
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