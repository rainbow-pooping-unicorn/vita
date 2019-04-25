<template>
  <section class="section">
    <div v-for="(topic, index) in topics" class="cv-content">
      <h3 class="cv-content__header">{{ topic['NAME'] }}</h3>
      <CvSectionContent
        v-for="cvContent in topic['CV_CONTENTS']"
        :emphasizeTitle="cvContent['EMPHASIZE_TITLE']"
        :title="cvContent['TITLE']"
        :underline="cvContent['UNDERLINE']"
        :copy="cvContent['COPY']"
        :list="cvContent['LIST']"
        :key="cvContent.id" />
    </div>
  </section>
</template>

<script>
import CvSectionContent from '../CvSectionContent'
import data from './data.json'

export default {
  name: 'AboutMe',
  data () {
    return {
      topics: data
    }
  },
  components: {
    CvSectionContent
  }
}
</script>
