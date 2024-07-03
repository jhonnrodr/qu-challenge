import { createMemoryHistory, createRouter } from 'vue-router'
import JokesView from '../views/JokesView.vue'
import JokeDetail from '../views/JokeDetail.vue'

const routes = [
  { 
      name: 'JokeList',
      path: '/', 
      component: JokesView 
  },
  {
    name: 'JokeDetail',
    path: '/joke/:id',
    component: JokeDetail,
    props: true,
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router