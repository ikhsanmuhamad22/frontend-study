<template>
  <div id="app">
    <HeaderPage/>
    <Nuxt/>
    <FooterPage/>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'

export default {
  components: {
    HeaderPage,
    FooterPage,
  },
  data() {
    return {
      isGrid: false
    }
  }
}
</script>