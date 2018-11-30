import Positions from './routes/positions/Positions'
import Index from './routes/index/Index'
import About from './routes/about/About'
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {name: 'index', path: '/', component: Index },
        {name: 'positions', path: '/positionen', component: Positions},
        {name: 'about', path: '/persoenlich', component: About}
    ]
});

export default router;
