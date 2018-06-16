var createDanMaku = function (innerText, options) {
  // set the basic params: text, color, top, offset, left
  var msg = {
    text: innerText,
    danMakuColor: [],
    danMakuTop: [],
    danMakuLeft: [],
    danMakuOffset: []
  }
  // set Top(distance from the canvas Element) params
  var getTop = function () {
    return Math.random() * options.topValue + 20
  }
  // set random Color
  var getColor = function () {
    return '#' + Math.ceil(Math.random() * 0xffffff).toString(16)
  }
  // set Speed , and the Orginal SpeedValue is 1 (for making it fast enough)
  var getSpeed = function () {
    return Math.random() * options.speedValue + 1
  }
  // if the canvas element does exists
  if (document.getElementById('danmaku')) {
    var d = document.getElementById('danmaku')
    var x = d.getContext('2d')
    var r = d.getBoundingClientRect()
    var w = r.right - r.left
    var h = r.bottom - r.top
    var left = w
    // set the params
    // left is the original position where the danMaku Start, default value is the width of element Canvas
    // if u want to make it show earlier, you can decrease the value of left
    for (let i = 0; i < msg.text.length; i++) {
      msg.danMakuColor.push(getColor())
      msg.danMakuTop.push(getTop())
      msg.danMakuOffset.push(getSpeed())
      msg.danMakuLeft.push(left)
    }
    // draw danMaku
    var drawText = function (msg, i) {
      msg.danMakuLeft[i] -= msg.danMakuOffset[i]
      x.fillStyle = msg.danMakuColor[i]
      x.fillText(msg.text[i], msg.danMakuLeft[i], msg.danMakuTop[i])
    }
    // u can also use setInterval to make this animation
    // but It seems that window.requestAnimationFrame is a better way!
    var anime = function () {
      x.clearRect(0, 0, w, h)
      // this is the Font Setting
      x.font = options.textFont.size + ' ' + options.textFont.font
      for (let i = 0; i < msg.text.length; i++) {
        if (msg.danMakuLeft[i] < -1 * x.measureText(msg.text[i]).width) {
          msg.danMakuLeft[i] = w
        }
        drawText(msg, i)
      }
      window.requestAnimationFrame(anime)
    }
    window.requestAnimationFrame(anime)
  }
}

export default createDanMaku
