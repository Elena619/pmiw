//link youtube
//https://youtu.be/dA90DwsfSKU


let cantX = 10; // cantidad de cuadros
let cantY = 10;
let imagen
let invertirColor = false; // controla los colores invertidos


function preload() {
  imagen = loadImage("data/imagen1.jpeg");
}
function setup() {
  createCanvas(800, 400);
}


function draw() {
  background (255);
  image (imagen, 0, 0, 400, 400);

let modX = 400 / cantX; //mitad de pantalla
let modY = 400 / cantY;

//base ciclo for
for (let j = 0; j < cantY; j++) { // bucle dibuja los cuadros en vertical
  for (let i = 0; i < cantX; i++) { // dibuja los cuadros en horizontal

    //invocar la funcion de retornno valor
    fill (colorCuadros (i, j, invertirColor)); //dinujo fondo
    rect (400 + i * modX, j * modY, 40, 40);

    fill (colorCirculos (i, j, invertirColor)); //dibujo circulos
    noStroke();
    ellipse (400 + i * modX + modY / 2, j * modY + modY / 2, 18, 18);
  }
}
}



function mousePressed() {
  invertirColor = !invertirColor;
}


// declaracion de funcion que retorna valor y las condicionales

function colorCuadros ( i, j, invertirColor) {
  if ( invertirColor) {
    if (( i + j) % 2 === 0) {
      return color (0); // negro
    } else {
      return color (255); // blanco
    }
  } else {
    if (( i + j ) % 2 === 0 ) {
      return color (255); //blanco
    } else {
      return color (0); //negro
    }
  }
}

function colorCirculos ( i, j, invertirColor) {
  if ( invertirColor) {
    if (( i + j) %2 === 0) {
      return color (255); // negro
    } else {
      return color (0); // blanco
    }
  } else {
    if (( i + j ) % 2 === 0 ) {
      return color (0); //blanco
    } else {
      return color (255); //negro
    }
  }
}
