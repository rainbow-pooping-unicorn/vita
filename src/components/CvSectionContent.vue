<template>
  <div class="cv-content__item">
    <p class="cv-content__title" v-if="title">
      <strong class="cv-content__title--prio" v-if="emphasizeTitle" v-html="emphasizeTitle"></strong>
      {{ title }}
    </p>
    <p class="cv-content__underline" v-if="underline" v-html="underline"></p>
    <p class="cv-content__copy--small" v-if="small" v-html="small"></p>
    <p class="cv-content__copy" v-if="copy" v-html="copy"></p>
    <ul class="cv-content__list" v-if="list">
      <li v-for="listItem in list" class="cv-content__list-item" v-html="listItem"></li>
    </ul>
  </div>
  <!-- <List v-for="listItem in listItems" :listitem="listitem" :key="listitem.id" /> -->
</template>

<script>
// import List from 'List'

export default {
  name: 'CvSectionContent',
  props: {
    emphasizeTitle: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    underline: {
      type: String,
      required: false
    },
    small: {
      type: String,
      required: false
    },
    copy: {
      type: String,
      required: false
    },
    list: {
      type: Array,
      required: false
    },
  }
}
</script>
