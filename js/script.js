const app = document.getElementById('status');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://mcapi.us/server/status?ip=limelight.dance.com.ar', true);
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div');
    const name = document.createElement('p');
    name.textContent = "Limelight Server";
    const status = document.createElement('p');
    if (data.online) {
      status.textContent = 'Online';
    } else {
      status.textContent = 'Offline';
    }
    const players = document.createElement('p');
    var playersNow = data.players.now;
    var playersMax = data.players.max;
    players.textContent = playersNow + "/" + playersMax;
    container.appendChild(card);
    card.appendChild(name);
    card.appendChild(status);
    card.appendChild(players);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();

$(function() {

  $(".header").animate({
    marginLeft: '+=1000px'
  }, 800);
  
  $(".bio").animate({
    marginTop: '-=400px'
  }, 800);

  $("#resume").on({
    mouseenter: function() {
      $(".popup").animate({
        bottom: "0"
      }, 350);
    },
    mouseleave: function() {
      $(".popup").animate({
        bottom: "-200px"
      }, 350);
    }
  });

  $(".work-link").on({
    mouseenter: function() {
      $(this).find(".work-img").animate({
        opacity: 0.7
      }, 150);
    },
    mouseleave: function() {
      $(this).find(".work-img").animate({
        opacity: 1
      }, 150);
    }
  });

});
