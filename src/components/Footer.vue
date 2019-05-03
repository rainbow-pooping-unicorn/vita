<template>
  <footer class="footer">
    <address class="contact" v-for="contact in contactPossibilities">
      <div class="contact__item">
<!--        <div class="contact__detail" v-html="contact.detail"></div>-->
      </div>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      contactPossibilities: [
        {
          detail: 'Berit Haak &ndash; Angerweidestraße 8a &ndash; 82319 Starnberg'
        },
        {
          detail: '<a href="tel:+4917660901037">0176 - 60 90 10 37</a>'
        },
        {
          detail: '<a href="mailto:berit.haak@gmail.com">berit.haak[at]gmail[dot]com</a>'
        }
      ],
    }
  }
}
</script>
