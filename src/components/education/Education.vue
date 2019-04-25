<template>
  <section class="section">
    <div class="cv-content" v-for="cvContent in cvContents">
      <CvSectionContent
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
  name: 'Education',
  data () {
    return {
      cvContents: data
    }
  },
  components: {
    CvSectionContent
  }
}
</script>
