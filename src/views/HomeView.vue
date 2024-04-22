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
    <div class="section-title">
      <div class="description">
        <h1 class="description-title">Welcome to My Portfolio</h1>
        <p class="description-text">
          I am a skilled Back-End developer with expertise in PHP, Laravel framework.
          Also have skills in Python, cybersecurity, data privacy.<br><br>
          Attender of penetration testing courses and Go lang.
        </p>
        <DiscoverMyWorkButton @click="discoverClick()"/>
        <span class="discover-annotation">Connect with me</span>
      </div>
    </div>
  </div>
</template>
