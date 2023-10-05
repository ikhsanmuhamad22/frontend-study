<template>
  <div class="container">
    <div v-for="(task, index) in tasks" :key="index">
      <div
        v-if="[index + 1] == $route.params.id"
        class="item-task d-flex align-items-start pt-3 pb-4"
        >
        <input
        id="task"
        v-model="task.isDone"
        type="checkbox"
        name="status"
        class="me-2 mt-2"
        :checked="task.isDone"
        >
        <div>
          <div class="title-task mb-1">
          {{ task.title }}
          </div>
          <div class="description-task small text-muted mb-3">
          {{ task.description }}
          </div>
          <input class="form-control form-control-sm" type="date" />
        </div>
      </div>
    </div>
    <div class="action mt-4">
      <div
      class="btn btn-outline-secondary btn-sm mb-3"
      @click="$router.go(-1)">Kembali</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        paramsId: this.$route.params.id
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks.tasks
      }
    },
    // mounted() {
    //   console.log(this.$store.state.tasks.tasks)
    // }
  }
</script>

