<template>
  <div class="video-page">
    <!-- 页面标题 -->
    <h1>"video-page"</h1>

    <!-- 视频播放器 -->
    <div class="video-wrapper">
      <video 
        controls                
        preload="metadata"       
        
        width="100%"            
        max-width="1000px"     
      >
        <!-- 视频源：指向 public/videos 下的文件 -->
        <source src="/videos/demo.mp4" type="video/mp4">
        <!-- 浏览器不支持时的提示 -->
        <p>sorry</p>
      </video>
    </div>

    <!-- 视频信息 -->
    <div class="video-info">
      <h2>"video-info"</h2>
      <p></p>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑，纯静态展示
</script>

<style scoped>
.video-page {
  max-width: 1200px;  /* 页面最大宽度 */
  margin: 0 auto;     /* 居中显示 */
  padding: 20px;      /* 内边距 */
}

.video-wrapper {
  margin: 30px 0;              /* 上下间距 */
  border-radius: 8px;          /* 圆角 */
  overflow: hidden;            /* 隐藏超出圆角的部分 */
  box-shadow: 0 2px 10px #0000001a;  /* 阴影效果 */
}

.video-info {
  color: #333;       /* 文字颜色 */
  line-height: 1.6;  /* 行高 */
}
</style>