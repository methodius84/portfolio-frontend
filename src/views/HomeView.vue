<script setup lang="ts">
import DiscoverMyWorkButton from "@/components/DiscoverMyWorkButton.vue";
import router from "@/router";

const discoverClick = () => {
  router.push({
    name: 'about' // todo 'projects' route
  })
}
</script>

<template>
  <div class="home-wrapper">
    <div class="container">
      <div class="description">
        <h1 class="description-title">Welcome to My Portfolio</h1>
        <p class="description-text">
          I am an experienced Back-End developer with expertise in PHP, Laravel framework.
          Also have skills in Python, cybersecurity, data privacy.<br><br>
          Attender of penetration testing courses and Go lang.
        </p>
        <div class="description-actions">
          <DiscoverMyWorkButton @click="discoverClick()"/>
          <span class="discover-annotation">Connect with me</span>
        </div>
      </div>
    </div>
  </div>
</template>
