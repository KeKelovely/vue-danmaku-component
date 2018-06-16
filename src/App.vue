<template>
  <div id="app">
    <danMaku
    :width="600"
    :height="300"
    :innerText="['LOL', 'haha', 'gitHub', 'This is KeKe']"
    :danMakuSetting="{
      topValue: 100,
      speedValue: 0.3,
      textFont: {
        size: '20px',
        font: 'Arial'
      }
    }"
    >
    </danMaku>
  </div>
</template>

<script>
import danMaku from './components/danMaku'

export default {
  name: 'App',
  components: {
    danMaku
  }
}
</script>

<style>

</style>
