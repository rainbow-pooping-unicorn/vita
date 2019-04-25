<template>
  <div class="intro">
    <h1 v-html="getRandomIntro"></h1>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      randomIntro: [
        'Moin,<br />ich heiße Berit. <span class="emoji">🙋</span>',
        'Ahoi ihr Landratten,<br />ich heiße Berit. <span class="emoji">🙋</span>',
        'Ahoi,<br />ich heiße Berit. <span class="emoji">🙋</span>',
        'Servus,<br />ich heiße Berit. <span class="emoji">🙋</span>',
        'Griaß Di,<br />ich heiße Berit. <span class="emoji">🙋</span>',
        'Hawediere,<br />ich heiße Berit. <span class="emoji">🙋</span>'
      ]
    }
  },
  computed: {
    getRandomIntro() {
      const introData = this.randomIntro;
      return introData[Math.floor(Math.random()*introData.length)];
    }
  }
}
</script>
