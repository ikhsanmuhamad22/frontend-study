<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a href="#" class="navbar-brand">TaskList</a>
      <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item d-flex gap-2">
            <nuxt-link to="/" :class="'nav-link active' [isActive ? 'active': '']" aria-current="page">Home</nuxt-link>
            <nuxt-link to="/todo" :class="'nav-link active' [isActive ? 'active': '']" aria-current="page">Todo</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>