<template>
  <div class="list-task row">
    <div 
    v-for="task in tasks" :key="task.id" 
    class="item-task d-flex align-items-center border-bottom pt-3 pb-4"
    :class="[isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12']">
      <input 
      id="task" 
      v-model="task.isDone" 
      type="checkbox" 
      name="status"
      class="me-2 mt-2"
      @click="onChangeTask(task.id)"
      >
      <div class="d-flex flex-column">
        <div 
        class="title-task mb-1" 
        :class="['d-flex flex-column', task.isDone ?
        'text-decoration-line-through fst-italic' : '']">{{ task.title }}</div>
        <div class="description-task small text-muted">{{ task.desc }}</div>
        <div class="kategory-task small text-muted">{{ task.kategori }}</div>
        <nuxt-link :to="'/detail/' + task.id ">detail</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true
      },
      isGrid: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      onChangeTask(id) {
        this.$store.commit('tasks/TOGGLE_DONE', id)
      }
    }
  }
</script>