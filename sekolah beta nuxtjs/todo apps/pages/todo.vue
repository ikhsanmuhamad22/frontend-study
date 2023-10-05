<template>
  <div class="py-4">
    <div class="container">
      <div class="title border-bottom d-flex justify-content-between">
        <h5>Task</h5>
        <div class="d-flex align-items-center gap-3">
          <p>{{ totalTask }}</p>
          <input v-model="searchQuery" type="text" class="form-control" placeholder="Search">
          <select v-model="searchKategori" class="form-select" aria-label="Default select example">
            <option selected value="semua">semua</option>
            <option value="berat">berat</option>
            <option value="ringan">ringan</option>
          </select>
          <div class="d-flex justify-content-end w-100">
            <span class="me-2">View As</span>
            <button 
            class="btn btn-outline-secondary py-1 px-3"
            @click="isGrid = !isGrid">
            {{ isGrid ? 'Grid' : 'List' }}
          </button>
        </div>        
        </div>
      </div>

      <card-item :tasks="resultQuery" :is-grid="isGrid"/>

      <form class="action py-2" @submit.prevent="addTask(task)">
        <a href="#" class="add-button" @click="iscreating = !iscreating">Add Task</a>
        <div v-if="iscreating" class="add-card mt-3">
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input v-model="task.title" class="form-control border-0 mb-2" placeholder="Title" type="text">
              <textarea
              v-model="task.desc"
              class="form-control border-0 small"
              placeholder="Description"
              rows="3">
              </textarea>
              <select v-model="task.kategori" class="form-select" aria-label="Default select example">
                <option value="berat">berat</option>
                <option value="ringan">ringan</option>
              </select>
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2">Save</button>
            <button class="btn btn-outline-secondary" @click="iscreating = !iscreating">Cancel</button>
          </div>
        </div>
      </form>

      </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import cardItem from '~/components/card/cardItem.vue';

  export default {
    components: { cardItem },
    data() {
      return {
      isGrid: false,
      iscreating: false,
      searchQuery: '',
      searchKategori: '',
        task: {
          id: this.calculateId,
          title: '',
          desc: '',
          isDone: false,
          kategori: ''
        },
      }
    },
    computed: {
      ...mapState('tasks',['tasks']),
      calculateId() {
        return this.tasks.length + 1
    },
      resultQuery() {
        if (this.searchQuery) {
          return this.tasks.filter((item) => {
            return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => item.title.toLowerCase().includes(v));
          });
        } else if (this.searchKategori) {
          if(this.searchKategori === 'semua') {
            return this.tasks
          }
          return this.tasks.filter((item) => {
            return item.kategori === this.searchKategori
          })
        } else {
          return this.tasks
        }
      },
      totalTask() {
        return this.tasks.length
      },
    },
    methods: {
      ...mapActions('tasks',['addTask']),
    },
  }
</script>