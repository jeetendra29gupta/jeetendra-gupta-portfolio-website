import {createRouter, createWebHashHistory} from 'vue-router'

import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';

const routes = [
    {path: '/', redirect: '/hero'},
    {path: '/hero', name: 'Hero', component: Hero},
    {path: '/experience', name: 'Experience', component: Experience},
    {path: '/skills', name: 'Skills', component: Skills},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/education', name: 'Education', component: Education},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
