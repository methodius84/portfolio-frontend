<script setup lang="ts">

</script>

<template>
  <div class="about">
    <h1 class="about-title">About me</h1>
    <div class="container">
      <div class="skills">
        <h2 class="skills-title" v-scroll-animation>My skills</h2>
        <div class="skill-list">
          <ul class="list" v-scroll-animation>
            <li>PHP</li>
            <li>Laravel Framework</li>
            <li>Vue.js</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>SQL</li>
            <li>AMQP: RabbitMQ, Yandex Message Queue</li>
          </ul>
        </div>
      </div>
      <div class="proficiencies">
        <h3 class="proficiencies-title" v-scroll-animation>Proficiencies</h3>
        <p class="proficiencies-text" v-scroll-animation>
          As a developer, I am always eager to learn new things.<br>
          My main advantage is my perfectionism, I never leave my job unfinished.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.container
  .skill-list
    & > .before-enter
      opacity: 0
      transform: translateX(30em)
      transition: all 2s ease-out
    & > .enter
      opacity: 1
      transform: translateX(0)
  .before-enter
    opacity: 0
    transform: translateX(10em)
    transition: all 1.5s ease-out
  .enter
    opacity: 1
    transform: translateX(0)
</style>