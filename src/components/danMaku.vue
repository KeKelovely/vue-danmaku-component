<template>
  <div class="danMaku">
    <canvas id="danmaku" :style='danMakuStyle'>
    </canvas>
  </div>
</template>

<script>
import createDanMaku from './index.js'
export default {
  name: 'danMaku',
  mounted () {
    createDanMaku(this.innerText, this.danMakuSetting)
  },
  props: {
    width: {
      type: [String, Number],
      default: '600px'
    },
    height: {
      type: [String, Number],
      default: '300px'
    },
    innerText: {
      type: Array,
      default: () => {
        return ['嘤嘤嘤', '前方高能预警', '许愿清泉流响', '注意弹幕礼仪哦！']
      }
    },
    danMakuSetting: {
      type: Object,
      default: () => {
        return {
          topValue: 100,
          speedValue: 0.3,
          textFont: {
            size: '20px',
            font: 'Arial'
          }
        }
      }
    }
  },
  computed: {
    danMakuStyle () {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
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
