var press = true;
var width = window.innerWidth;
var interpreter = false;
var video_interpret = false;



function change_side(){
  var subscriber = document.getElementById('subscriber');
  var publisher = document.getElementById('publisher');
  if(press){
    publisher.className = 'rigth_side' + ' ' + 'pub_class';
    subscriber.className = 'left_side' + ' ' + 'subs_class';
  }else{
    publisher.className = 'left_side' + ' ' + 'pub_class';
    subscriber.className = 'rigth_side' + ' ' + 'subs_class';
  }
  press = !press;

}

function change_interpreter() {
  var subscriber = document.getElementById('subscriber');
  var publisher = document.getElementById('publisher');
  var icono = document.getElementById('interpreter');
  var tool_publisher = document.getElementById('tool_publisher');
  var camera_publisher = document.getElementById('camera_publisher');
  var audio_publisher = document.getElementById('audio_publisher');

  if(!video_interpret){
    if (!interpreter) {
      publisher.className = 'interpreter_zoom' + ' ' + 'pub_class';
      subscriber.style.visibility = 'hidden';
      icono.className = 'zoom' + ' ' + 'button_interpreter';
      tool_publisher.className = 'tool_subscriber' + ' ' + 'tool_publisher_red';
      camera_publisher.className = 'button_camera_subscriber';
      audio_publisher.className = 'button_audio_subscriber';
    } else {
      subscriber.style.visibility = 'visible';
      icono.className = 'button_interpreter';
      publisher.className = 'pub_class';
      tool_publisher.className = 'tool_publisher';
      camera_publisher.className = 'button_camera_publisher';
      audio_publisher.className = 'button_audio_publisher';
    }
    interpreter = !interpreter;
  }else{
    alert('Modo "video" activo, desactivalo para ver el interprete en pantalla completa')
  }
}


function change_video_interpreter() {
  var subscriber = document.getElementById('subscriber');
  var icono = document.getElementById('video_interpret');
  var publisher = document.getElementById('publisher');

  if(!interpreter){
    if(!video_interpret){
      subscriber.className = 'video_interpret_zoom' + ' ' + 'subs_class';
      publisher.style.visibility = 'hidden';
      icono.className = 'zoom' + ' ' + 'button_video_interpret';
    }else {
      subscriber.className = 'subs_class';
      publisher.style.visibility = 'visible';
      icono.className = 'button_video_interpret';
    }
    video_interpret = !video_interpret;
  }else{
    alert('Modo "interprete" activo, desactivalo para ver el video en pantalla completa');
  }

}


function show_message(obj, class_p, texto){
  var el = document.getElementById(obj);
  var class_name = el.className;
  var wait = obj + '_' + 'wait_person';
  var div = document.createElement('div');
  div.className = class_name + ' video_inactive';
  div.setAttribute("id",wait);
  div.style.right = '0';
  var p = document.createElement('p');
  p.className = class_p;
  var message = document.createTextNode(texto);
  p.appendChild(message);
  div.appendChild(p);
  el.appendChild(div);
}

function clear_message(obj){
  var el = document.getElementById(obj);
  var wait = obj + '_' + 'wait_person';
  var rm_el = document.getElementById(wait);
  el.removeChild(rm_el);
}
