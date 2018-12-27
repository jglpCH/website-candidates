import Positions from './routes/positions/Positions'
import Index from './routes/index/Index'
import About from './routes/about/About'
import Imprint from './routes/Imprint'
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {name: 'index', path: '/', component: Index},
    {name: 'positions', path: '/positionen', component: Positions},
    {name: 'about', path: '/persoenlich', component: About},
    {name: 'imprint', path: '/impressum', component: Imprint}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
