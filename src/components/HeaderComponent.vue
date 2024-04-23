<script setup lang="ts">
import GitHubIcon from "@/components/icons/GitHubIcon.vue";

const toggleMenu = () => {
  const nav = document.getElementById('nav')
  nav.classList.toggle('opened')
}
</script>

<template>
  <div class="header">
    <div class="header__top">
      <div class="container-wide">
        <div class="header__top__title">
          <GitHubIcon/>
          <h2>@methodius84</h2>
          <button class="toggle-nav" @click="toggleMenu" aria-controls="nav" aria-expanded="false"><img src="../assets/icons/menu.svg" alt="меню"/></button>
        </div>
        <nav class="nav" id="nav">
          <router-link class="nav__item" to="/">Home</router-link>
          <router-link class="nav__item" to="/about">About</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.github-icon
  width: 24px
  height: 25px
  margin-right: 10px
</style>