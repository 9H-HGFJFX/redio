// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import VideoPage from '../views/VideoPage.vue';  // 导入视频页面

const routes = [
  {
    path: '/video',  // 访问路径：http://localhost:5173/video
    name: 'VideoPage',
    component: VideoPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;