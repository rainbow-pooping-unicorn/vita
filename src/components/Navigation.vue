<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item"><router-link to="/education">Education</router-link></li>
      <li class="nav__list-item"><router-link to="/experience">Experience</router-link></li>
      <li class="nav__list-item"><router-link to="/skills">Skills</router-link></li>
      <li class="nav__list-item"><router-link to="/about-me">About Me</router-link></li>
      <li class="nav__list-item nav__list-item--icon" v-if="['Intro'].indexOf($route.name) === -1"><router-link to="/"><span class="emoji">🙋</span></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
