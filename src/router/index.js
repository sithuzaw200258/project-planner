import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectCreateView from '../views/ProjectCreateView.vue'
import ProjectEditView from '../views/ProjectEditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects/create',
    name: 'create',
    component: ProjectCreateView
  },
  {
    path: '/projects/edit/:id',
    name: 'edit',
    component: ProjectEditView,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
