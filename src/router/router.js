// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './../App.vue'
import Intro from './../components/Intro.vue'
import Education from './../components/education/Education.vue'
import Experience from './../components/experience/Experience.vue'
import Skills from './../components/skills/Skills.vue'
import AboutMe from './../components/about-me/AboutMe.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
