<template>
  <div class="danMaku">
    <canvas id="danmaku">
    </canvas>
  </div>
</template>

<script>
import createDanMaku from './index.js'
export default {
  name: 'danMaku',
  data () {
    return {
      msgText: ['嘤嘤嘤', '前方高能预警', '许愿清泉流响', '注意弹幕礼仪哦！'],
    }
  },
  mounted () {
    createDanMaku(this.msgText)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#danmaku {
  width: 600px;
  height: 300px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: -99;
}
</style>
