<script setup lang="ts">
import GitHubIcon from "@/components/icons/GitHubIcon.vue";
</script>

<template>
  <div class="header">
    <div class="title">
      <GitHubIcon/>
      <h2>@methodius84</h2>
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<style lang="sass" scoped>
.github-icon
  width: 24px
  height: 25px
  margin-right: 10px
</style>