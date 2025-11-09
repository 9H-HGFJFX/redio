<!-- src/App.vue -->
<template>
  <div class="video-page">
    <h1>video-page</h1>
    <div class="video-wrapper">
      <video 
        controls 
        preload="metadata" 
        src="/videos/demo.mp4" 
        width="100%" 
        max-width="1000px"
      ></video>
    </div>
    <div class="video-info">
      <h2>video-info</h2>
      <p>show</p>
    </div>
  </div>
</template>

<style scoped>
/* 样式与之前保持一致 */
.video-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.video-wrapper {
  margin: 30px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px #0000001a;
}
.video-info {
  color: #333;
  line-height: 1.6;
}
</style>