<template>
  <div class="text-center p-4">
    <h1 class="title mb-4">{{ wellcome }}</h1>
    <button class="btn btn-primary"><nuxt-link to="/todo" class="text-light">masuk</nuxt-link></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        wellcome: 'Selamat datang',
      }
    },
  }
</script>
