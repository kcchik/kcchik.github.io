const app = document.getElementById('status')
const card = document.createElement('div')
card.setAttribute('class', 'card')
const status = document.createElement('span')
const img = document.createElement('img')
img.setAttribute('class', 'status-img')

function request() {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://mcapi.us/server/status?ip=limelight.dance.com.ar', true)
  request.onload = function () {
    var data = JSON.parse(this.response)
    img.src = data.online? "images/online.png" : "images/offline.png"
    status.textContent = data.online ? "Limelight server is online! (" + data.players.now + "/" + data.players.max + ")" : "Limelight server is offline."
    app.appendChild(card)
    card.appendChild(img)
    card.appendChild(status)
  }
  request.send()
}

request()
var interval = setInterval(request, 60000)

$(function() {

  $(".header").animate({
    marginLeft: '+=1000px'
  }, 800)
  
  $(".bio").animate({
    marginTop: '-=400px'
  }, 800)

  $("#resume").on({
    mouseenter: function() {
      $(".popup").animate({
        bottom: "0"
      }, 350)
    },
    mouseleave: function() {
      $(".popup").animate({
        bottom: "-200px"
      }, 350)
    }
  })

  $(".work-link").on({
    mouseenter: function() {
      $(this).find(".work-img").animate({
        opacity: 0.7
      }, 150)
    },
    mouseleave: function() {
      $(this).find(".work-img").animate({
        opacity: 1
      }, 150)
    }
  })

})
