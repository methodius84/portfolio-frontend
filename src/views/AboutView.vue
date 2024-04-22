<template>
  <div class="about-wrapper">
    <div class="about">
      <h1 class="about-title">About me</h1>
      <div class="skills-wrapper">
        <div class="proficiencies">
          <h3 class="proficiencies-title">Proficiencies</h3>
          <p class="proficiencies-text">
            As a developer, I am always eager to learn new things.<br>
            My main advantage is my perfectionism, I never leave my job unfinished.
          </p>
        </div>
        <div class="skills">
          <h2 class="skills-title">My skills</h2>
          <div class="skill-list">
            <ul class="list">
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "src/assets/variables"

.about-wrapper
  position: relative
  height: 100dvh
  background-image: url("../assets/images/girl-background.png")
  background-repeat: no-repeat
  background-size: cover
  .about
    padding: 72px 45px
    position: relative
    .about-title
      display: flex
      justify-content: center
      color: $primary-h-text-color
    .skills-wrapper
      margin-top: 150px
      overflow: hidden
      //display: flex
      //flex-direction: column
      .proficiencies
        float: left
        display: block
        margin-top: 46px
        margin-left: 20%
        color: $primary-h3-text-color
      .proficiencies-text
        font-size: 16px
        text-align: left
        color: $primary-paragraph-small-text2
        width: 200px
        display: flex
        flex-wrap: wrap
      .skills
        float: left
        display: block
        margin-left: 15%
        justify-content: space-between
        flex-direction: column
        .skills-title
          display: flex
          justify-content: end
          margin-right: 22%
        .skill-list
          background-color: rgba($background-3, 0.4)
          margin-top: 40px
          margin-right: 10%
          padding: 30px
          transform: rotate3d(1, 4, -3, 15deg)
          border: 7px solid white
          border-radius: 7px
          display: flex
          .list
            list-style-type: '👉'
            li
              font-family: 'MartianMono', sans-serif
              font-weight: 500
              padding-inline: 1ch


//@media (min-width: 1024px)
//  .about
//    min-height: 100vh
//    display: flex
//    align-items: center
</style>
<script setup lang="ts">
</script>