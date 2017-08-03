var not_camera_publisher = false;
var not_audio_publisher = false;


function control_camera_publisher() {
  var pub = document.getElementById('camera_publisher');
    if(!not_camera_publisher) {
      pub.className = 'button_not_camera_publisher' + ' ' + 'button_camera_publisher';
      publisher.publishVideo(not_camera_publisher);
      //show_message('publisher', 'p_pub', 'La camara se ha desactivado..', '');
    }else{
      pub.className = 'button_camera_publisher';
      publisher.publishVideo(not_camera_publisher);
      //clear_message('publisher', '');
    }
    not_camera_publisher = !not_camera_publisher;

}

function control_audio_publisher() {
  var pub = document.getElementById('audio_publisher');
    if(!not_audio_publisher) {
      pub.className = 'button_not_audio_publisher' + ' ' + 'button_audio_publisher';
      publisher.publishAudio(not_audio_publisher);
    }else{
      pub.className = 'button_audio_publisher';
      publisher.publishAudio(not_audio_publisher);
    }
    not_audio_publisher = !not_audio_publisher;


}

