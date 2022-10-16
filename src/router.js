import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import PlayList from "./pages/PlayList.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes : [
    { path: '/mainpage', component: MainPage, alias: '/' },
    { path: '/playlist', component: PlayList }
  ]
});