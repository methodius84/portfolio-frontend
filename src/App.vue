<script setup lang="ts">
import OpacityTransition from "@/components/transitions/OpacityTransition.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent/>
  <RouterView v-slot="{ Component }">
    <OpacityTransition>
      <Component :is="Component"/>
    </OpacityTransition>
  </RouterView>
</template>

<style scoped>
</style>
