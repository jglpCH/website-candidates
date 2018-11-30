import Positions from './routes/positions/Positions'
import Index from './routes/index/Index'
import About from './routes/about/About'
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Index},
        {path: '/positionen', component: Positions},
        {path: '/persoenlich', component: About}
    ]
});

export default router;
