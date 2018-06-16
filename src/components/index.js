var createDanMaku = function (msgText) {
    var getTop = function () {
      return Math.random() * 100 + 20
    }
    var getColor = function () {
      return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }
    var getOffset = function () {
      return Math.random() * 0.3 + 1
    }
    var msg = {
      text: msgText,
      danmucolor: [],
      danmutop: [],
      offset: [],
      left: []
    }
    if (document.getElementById('danmaku')) {
      var d = document.getElementById('danmaku'),
          x = d.getContext('2d'),
          r = d.getBoundingClientRect(),
          w = r.right - r.left,
          h = r.bottom - r.top,
          left = w
      var getMsgData = function(msg) {
        msg.danmucolor = [],
        msg.danmutop = [],
        msg.offset = [],
        msg.left = []
        for (var i in msg.text) {
          msg.danmucolor.push(getColor())
          msg.danmutop.push(getTop())
          msg.offset.push(getOffset())
          msg.left.push(left)
        }
      }
      getMsgData(msg)
      var drawText = function (msg, i) {
        msg.left[i] -= msg.offset[i]
        x.fillStyle = msg.danmucolor[i]
        x.fillText(msg.text[i], msg.left[i], msg.danmutop[i])
      }
      var anime = function () {
        x.clearRect(0, 0, w, h)
        x.font = "20px Arial"
        for (var i in msg.text) {
          if (msg.left[i] < -1 * x.measureText(msg.text[i]).width) {
            msg.left[i] = 500
          }
          drawText(msg, i)
        }
        window.requestAnimationFrame(anime)
      }
      window.requestAnimationFrame(anime)
    }
}

export default createDanMaku