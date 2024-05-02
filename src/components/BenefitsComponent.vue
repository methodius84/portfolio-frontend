<script setup lang="ts">

</script>

<template>
  <div class="about__benefits">
    <div class="container">
      <div class="benefit">
        <img class="benefit__img" src="../assets/images/girl-background-2.png" alt="Image" v-scroll-animation/>
        <span class="benefit__text" v-scroll-animation>I always try to make simple and elegant code</span>
      </div>
      <div class="benefit">
        <img class="benefit__img" src="../assets/images/image-boy1.png" alt="Image" v-scroll-animation/>
        <span class="benefit__text" v-scroll-animation>
          As an ex-security operations engineer, I really care about data safety
        </span>
      </div>
      <div class="benefit">
        <img class="benefit__img" src="../assets/images/image-girl1.png" alt="Image" v-scroll-animation/>
        <span class="benefit__text" v-scroll-animation>Always seeking for cutting-edge technology</span>
      </div>
      <div class="benefit">
        <img class="benefit__img" src="../assets/images/image-boy1.png" alt="Image" v-scroll-animation/>
        <span class="benefit__text" v-scroll-animation>
          My main goal is to become a high-level specialist in back-end and self-sufficient programmer
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.benefit
  .before-enter
    opacity: 0
    transform: translateX(-10em)
    transition: all 1.5s ease-out
  .enter
    opacity: 1
    transform: translateX(0)
</style>