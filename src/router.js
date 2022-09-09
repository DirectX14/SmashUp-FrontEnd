import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./components/MainPage.vue";
import PlayList from "./components/PlayList.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes : [
    { path: '/mainpage', component: MainPage, alias: '/' },
    { path: '/playlist', component: PlayList }
  ]
});