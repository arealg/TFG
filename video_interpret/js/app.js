var data = {
  apiKey: '45931162',
  sessionID: '2_MX40NTkzMTE2Mn5-MTUwMTc0Njk0MTc4NH5IYUR4cXp0OHBmVUlPckdZYy9iaEthMTd-fg',
  token: 'T1==cGFydG5lcl9pZD00NTkzMTE2MiZzaWc9ZjAyOTk1OWVjMTFiMTFjODhiOWJlMjA3ZWQ5NDk0NDVmOTdmMDI2NzpzZXNzaW9uX2lkPTJfTVg0ME5Ua3pNVEUyTW41LU1UVXdNVGMwTmprME1UYzROSDVJWVVSNGNYcDBPSEJtVlVsUGNrZFpZeTlpYUV0aE1UZC1mZyZjcmVhdGVfdGltZT0xNTAxNzQ2OTc1Jm5vbmNlPTAuMTU4NDAxNTI3MzYwMzY1NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTA0MzM4OTc0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9'
}

var session = OT.initSession(data.apiKey, data.sessionID);

function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

var publisher = OT.initPublisher({insertDefaultUI: false}, handleError);
publisher.on('videoElementCreated',function(event){
  var video = event.element;
  video.setAttribute("id","video_pub");
  document.getElementById('publisher').appendChild(event.element);
});


function connectSession(){
  session.connect(data.token, function(error) {
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

connectSession();
 



