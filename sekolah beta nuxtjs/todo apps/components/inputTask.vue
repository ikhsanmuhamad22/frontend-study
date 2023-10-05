<template>
  <div class="action py-2">
    <a href="#" class="add-button" @click="iscreating = !iscreating">Add Task</a>
    <div v-if="iscreating" class="add-card mt-3">
      <div class="card mb-2">
        <div class="card-body d-flex flex-column p-0">
          <input class="form-control border-0 mb-2" placeholder="Title" type="text">
          <textarea
          class="form-control border-0 small"
          placeholder="Description"
          rows="3">
        </textarea>
        </div>
      </div>
        <div class="button-wrapper d-flex">
          <button class="btn btn-primary me-2">Save</button>
          <button class="btn btn-outline-secondary" @click="iscreating = !iscreating">Cancel</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        iscreating: false
      }
    }
  }
</script>