



import { createRouter, createWebHistory } from "vue-router";

import HomeApp from '../views/HomeApp'
import AnimeDescrip from '../views/AnimeDescrip'



const routes= [{
    path: '/',
    name: "HomeApp",
    component: HomeApp
},
{
    path: '/AnimeDescrip/:id',
    name: "AnimeDescrip",
    component: AnimeDescrip
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router