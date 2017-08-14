
var data = {
  apiKey: '45931162',
  secret: d62e87098a72072a1acd2372cb76de807c5c3785,
  sessionID: '2_MX40NTkzMTE2Mn5-MTUwMTc0Njk0MTc4NH5IYUR4cXp0OHBmVUlPckdZYy9iaEthMTd-fg',
  token: 'T1==cGFydG5lcl9pZD00NTkzMTE2MiZzaWc9ZjAyOTk1OWVjMTFiMTFjODhiOWJlMjA3ZWQ5NDk0NDVmOTdmMDI2NzpzZXNzaW9uX2lkPTJfTVg0ME5Ua3pNVEUyTW41LU1UVXdNVGMwTmprME1UYzROSDVJWVVSNGNYcDBPSEJtVlVsUGNrZFpZeTlpYUV0aE1UZC1mZyZjcmVhdGVfdGltZT0xNTAxNzQ2OTc1Jm5vbmNlPTAuMTU4NDAxNTI3MzYwMzY1NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA0MzM4OTc0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
}


var session = sessionOT(data.apiKey, data.sessionID);


var subscriber;


function handleError(error) {
  if (error) {
    alert(error.message);
  }
}


function sessionOT(apiKey, sessionID){
  return OT.initSession(apiKey, sessionID);
}

var publisher = OT.initPublisher({insertDefaultUI: false}, handleError);
publisher.on('videoElementCreated',function(event){
  var video = event.element;
  video.setAttribute("id","video_pub");
  document.getElementById('publisher').appendChild(event.element);
});


function create_subscribe(event) {
  subscriber = session.subscribe(event.stream,{insertDefaultUI: false}, handleError);
  var subs_wait = false;
  subscriber.on('videoElementCreated', function(event) {
    var video = event.element;
    video.setAttribute("id","video_subs");
    document.getElementById('subscriber').appendChild(video);
  });
  subscriber.on('videoDisabled', function(event) {
    console.log('Video desconectado');
      show_message('subscriber', 'p_subs', 'Esperando respuesta del usuario..', 'waiting');
  });
  subscriber.on('videoEnabled', function(event) {
    console.log('Video conectado');
      clear_message('subscriber','waiting');
  });
}


function initSession() {
  session.on('streamCreated', function (event) {
      create_subscribe(event);
  });

}

function connectSession(token){
  session.connect(token, function(error) {
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

initSession();
connectSession(data.token);

var OpenTok = require('opentok'),
    
var opentok = new OpenTok(data.apiKey, data.secret);


function broadcast_live (){
  var datos =
    {
    "sessionId": data.sessionID,
    "layout": {
      "type": "custom",
      "stylesheet": "video_pub.broadcast_live {width: 780px; height: 538px; right: 20px; top:20px; z-index: 100;}"
      }
    };

    var time = +new Date;

  datos = JSON.stringify(datos);
    return new Promise(function (resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if ((this.readyState == 4 && this.status == 200)) {
          resolve(xhttp.responseText);
        }
      };

      xhttp.open('POST', 'https://api.opentok.com/v2/project/' + data.apiKey +'/broadcast', true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.setRequestHeader("X-OPENTOK-AUTH", opentok.generateJwt());
      xhttp.send(datos);
    });
}


function resolve_broadcast(){
  broadcast_live().then((value) => {
    console.log(value);
  })
}

resolve_broadcast();
