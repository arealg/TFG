var not_camera_subscriber = false;
var not_audio_subscriber = false;


function control_camera_subscriber() {
  var subs = document.getElementById('camera_subscriber');
  if (!not_camera_subscriber) {
    subs.className = 'button_not_camera_subscriber' + ' ' + 'button_camera_subscriber';
    subscriber.subscribeToVideo(not_camera_subscriber);
  } else {
    subs.className = 'button_camera_subscriber';
    subscriber.subscribeToVideo(not_camera_subscriber);
  }
  not_camera_subscriber = !not_camera_subscriber;
}

function control_audio_subscriber() {
  var subs = document.getElementById('audio_subscriber');
  if(!not_audio_subscriber) {
    subs.className = 'button_not_audio_subscriber' + ' ' + 'button_audio_subscriber';
    subscriber.subscribeToAudio(not_audio_subscriber);
  }else{
    subs.className = 'button_audio_subscriber';
    subscriber.subscribeToAudio(not_audio_subscriber);
  }
  not_audio_subscriber = !not_audio_subscriber;
}

