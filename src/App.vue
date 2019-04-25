<template>
  <div id="app">
    <main class="main">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <Navigation />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>
