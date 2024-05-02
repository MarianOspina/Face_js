/*let video = null; //Solo funciona con detectar personas
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let personCount = 0;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
}

function draw() {
  if (!video || !detecting) return;
  image(video, 0, 0);
  personCount = 0; // Reiniciamos el contador en cada frame
  for (let i = 0; i < detections.length; i++) {
    if (detections[i].label === 'person') {
      drawResult(detections[i]);
      personCount++; // Contamos solo las personas
    }
  }
  console.log("Número de personas detectadas:", personCount);
}

function drawResult(object) {
  boundingBox(object);
}

function boundingBox(object) {
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
}

function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
  
  // Filtramos las detecciones para mantener solo las personas
  detections = results.filter(result => result.label === 'person');

  if (detecting) {
    detect();
  }
}

function detect() {
  detector.detect(video, onDetected);
}

function toggleVideo() {
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}

function toggleDetecting() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Detectar Objetos';
  }
  detecting = !detecting;
}
*/

/*let video = null; //Cuenta las cosas que detecta
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let personCount = 0;
let tvCount = 0; // Variable para contar el número de televisores detectados
let phoneCount = 0; // Variable para contar el número de celulares detectados

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
}

function draw() {
  if (!video || !detecting) return;
  image(video, 0, 0);
  personCount = 0;
  tvCount = 0;
  phoneCount = 0;
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);
  }
  console.log("Número de personas detectadas:", personCount);
  console.log("Número de televisores detectados:", tvCount);
  console.log("Número de celulares detectados:", phoneCount);
}

function drawResult(object) {
  boundingBox(object);
  drawLabel(object);
}

function boundingBox(object) {
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
  switch (object.label) {
    case 'person':
      personCount++;
      break;
    case 'tv':
      tvCount++;
      break;
    case 'cell phone':
      phoneCount++;
      break;
  }
}

function drawLabel(object) {
  noStroke();
  fill('white');
  textSize(34);
  text(object.label, object.x + 15, object.y + 34);
}

function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;

  if (detecting) {
    detect();
  }
}

function detect() {
  detector.detect(video, onDetected);
}

function toggleVideo() {
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}

function toggleDetecting() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Detectar Objetos';
  }
  detecting = !detecting;
}*/

/*let video = null; //Cuenta solo las personas
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let personCount = 0;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
  // Cargar el modelo de detección
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  // Configuración inicial
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
}

function draw() {
  // Dibujar el video y las detecciones
  if (!video || !detecting) return;
  image(video, 0, 0);
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);
  }
  // Mostrar el recuento de personas detectadas en la consola
  
}

function drawResult(object) {
  // Dibujar el cuadro delimitador y el label
  boundingBox(object);
  drawLabel(object);
}

function boundingBox(object) {
  // Dibujar el cuadro delimitador
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
}

function drawLabel(object) {
  // Dibujar el label
  noStroke();
  fill('white');
  textSize(34);
  text(object.label, object.x + 15, object.y + 34);
}

function onDetected(error, results) {
  // Manejar las detecciones
  if (error) {
    console.error(error);
    return;
  }
  
  // Reiniciar el contador de personas
  personCount = 0;

  // Contar las personas detectadas
  results.forEach(result => {
    if (result.label === 'person') {
      personCount++;
    }
  });

  // Almacenar las detecciones y continuar la detección si está activada
  detections = results;
  if (detecting) {
    detect();
  }

  console.log('Cantidad de personas detectadas: ', personCount);
}

function detect() {
  // Iniciar la detección
  detector.detect(video, onDetected);
}

function toggleVideo() {
  // Alternar la visibilidad del video
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}

function toggleDetecting() {
  // Alternar la detección de objetos
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Detectar Objetos';
  }
  detecting = !detecting;
}*/

/*let video = null; //Cuenta las personas
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let personCount = 0;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {//libreria
  detector = ml5.objectDetector('cocossd');
}

function setup() {//CANVA
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);

}

function draw() {
  if (!video || !detecting) return;
  image(video, 0, 0);
  for (let i = 0; i < detections.length; i++) {
    drawResult(detections[i]);

  }

  console.log('Cantidad de personas detectadas: ', personCount);

}

function drawResult(object) {//CUADROS Y DETECTA
  boundingBox(object);
  drawLabel(object);


}

function boundingBox(object) {//CUADRO A
  stroke('blue');
  strokeWeight(6);
  noFill();
  rect(object.x, object.y, object.width, object.height);
}
function drawLabel(object) {// DONDE SE DIBUJA EL LABEL
  noStroke();
  fill('white');
  textSize(34);
  text(object.label, object.x + 15, object.y + 34);
}

function onDetected(error, results) {//elemento que se ejecuta para el modelo detecte personas
  if (error) {
    console.error(error);
  }
  detections = results;

  if (detecting) {
    detect();
  }
}

function detect() {
  detector.detect(video, onDetected);
}

function toggleVideo() {
  if (!video) return;
  if (videoVisibility) {
    video.hide();
    videoAction.innerText = 'Activar Video';
  } else {
    video.show();
    videoAction.innerText = 'Desactivar Video';
  }
  videoVisibility = !videoVisibility;
}
//Activas la camara

function toggleDetecting() {
  if (!video || !detector) return;
  if (!detecting) {
    detect();
    detectionAction.innerText = 'Parar...';
  } else {
    detectionAction.innerText = 'Detectar Objetos';
  }
  detecting = !detecting;
}
 
function onDetected(error, results) {
  if (error) {
    console.error(error);
  }
 
  // Reiniciamos el conteo en cada detección
  personCount = 0;
 
  // Filtramos las detecciones para contar solo las personas
  results.forEach(result => {
    if (result.label === 'person') {
      personCount++;
    }
  });
 
  detections = results;
 
  if (detecting) {
    detect();
  }
}*/