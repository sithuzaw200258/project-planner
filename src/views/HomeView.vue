<template>
  <div class="home">
    <h1>Home</h1>
    <FilterNav @filterNav="current = $event" :current="current"></FilterNav>
    <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
    </div>
  </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleProject from '../components/SingleProject'
export default {
  name: 'HomeView',
  components: {
    FilterNav,
    SingleProject,
  },

  data() {
    return {
      current: "all",
      projects: [],
    }
  },

  methods: {
    deleteProject(id) {
      console.log(id)
      this.projects = this.projects.filter((project) => {
        return project.id != id;
      })
    },
    completeProject(id) {
      let findProject = this.projects.find(project => {
        return project.id == id;
      })

      findProject.complete = !findProject.complete;
    }
  },

  computed: {
    filteredProjects() {
      if (this.current === "complete") {
        let completeProjects = this.projects.filter(project => {
          return project.complete;
        })
        console.log(completeProjects);
        return completeProjects;
      }

      if (this.current === "ongoing") {
        let ongoingProjects = this.projects.filter(project => {
          return !project.complete;
        })
        return ongoingProjects;
      }
      return this.projects;
    }
  },

  mounted() {
    fetch("http://localhost:3000/projects")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data)
        this.projects = data;
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>
