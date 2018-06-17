# vue-danmaku-component

> a simple danmaku vue component

## danmaku ( live comment )

### What is danmaku?:neutral_face:

- which means live comment, it's used in many video websites
- it looks like that:

![danmaku1](http://static.zybuluo.com/pmworkzk250/ioytevp9hqtgxzul0f51xlht/danmaku.gif) 

### Where should I put it?

- for example, you can use it in your personal homepage :point_left:
- use danmaku to introduce yourself in a in interesting way:star: 

![danmaku2](http://static.zybuluo.com/pmworkzk250/nku4p15qo52jy7oq4usvzvie/IMG_2065.GIF)

### How to make it?

- there are many ways to create 'danmaku', such as CSS3(animation) or Canvas
- this vue-danmaku-component is depends on Canvas

## Usage

- It depends on Vue2.x, please make sure you install the correct version
- Example:

```
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
```

## Options

Props | Type | Default | Description |
---|---|---|---|
width|String Number| 600 | the canvas width |
height|String Number| 300 | the canvas height |
innerText| Array | [...] | the content of danmaku
danMakuSetting| Object | {...} | the danmaku setting(top, speed, font)
topValue| Number| 100| the vertical distance of danmaku
speedValue|Number|0.3| the speed(or offset) of danmaku
textFont|Object| {...} | font and size

## Run Example

```
cd vue-danmaku-component

npm install

npm run dev // at http://localhost:8080
```

