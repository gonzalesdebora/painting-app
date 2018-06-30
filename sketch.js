let pincelSeleccionado = 1;

let elColor;

let i = 0;

let bot1x = 12;
let bot1y = 15;
let bot1an = 19;
let bot1al = 19;

let bot2x = 37;
let bot2y = 15;
let bot2an = 19;
let bot2al = 19;

let bot3x = 62;
let bot3y = 15;
let bot3an = 19;
let bot3al = 19;

let bot4x = 87;
let bot4y = 15;
let bot4an = 19;
let bot4al = 19;

let bot5x = 112;
let bot5y = 15;
let bot5an = 19;
let bot5al = 19;

let bot6x = 137;
let bot6y = 15;
let bot6an = 19;
let bot6al = 19;

let bot7x = 246;
let bot7y = 15;
let bot7an = 19;
let bot7al = 19;

let bot8x = 271;
let bot8y = 15;
let bot8an = 19;
let bot8al = 19;

let bot9x = 296;
let bot9y = 15;
let bot9an = 19;
let bot9al = 19;

let bot10x = 321;
let bot10y = 15;
let bot10an = 19;
let bot10al = 19;

let bot11x = 346;
let bot11y = 15;
let bot11an = 19;
let bot11al = 19;

let bot12x = 371;
let bot12y = 15;
let bot12an = 19;
let bot12al = 19;

let bot13x = 163;
let bot13y = 15;
let bot13an = 19;
let bot13al = 19;


function setup() {

  createCanvas(400, 400);
  background(255);

}

function draw()  {

  //borrador
  if ((mouseX >= bot13x)
    && (mouseX <= bot13x + bot3an)
    && (mouseY > bot13y)
    && (mouseY < bot13y + bot3al)
    && (mouseIsPressed == true)) {

    background(255);

    }

    //dibujo de colores
  if (mouseX > bot1x
    && mouseX < bot1x + bot1an
    && mouseY > bot1y
    && mouseY < bot1y + bot1al
    && mouseIsPressed == true) {
      elColor=1;
  }

  if (mouseX > bot2x
    && mouseX < bot2x + bot2an
    && mouseY > bot2y
    && mouseY < bot2y + bot2al
    && mouseIsPressed == true) {
      elColor=2;
  }

    if (mouseX > bot3x
    && mouseX < bot3x + bot3an
    && mouseY > bot3y
    && mouseY < bot3y + bot3al
    && mouseIsPressed == true) {
      elColor=3;
  }

    if (mouseX > bot4x
    && mouseX < bot4x + bot4an
    && mouseY > bot4y
    && mouseY < bot4y + bot4al
    && mouseIsPressed == true) {
      elColor=4;
  }

    if (mouseX > bot5x
    && mouseX < bot5x + bot5an
    && mouseY > bot5y
    && mouseY < bot5y + bot5al
    && mouseIsPressed == true) {
      elColor=5;
  }

     if (mouseX > bot6x
    && mouseX < bot6x + bot6an
    && mouseY > bot6y
    && mouseY < bot6y + bot6al
    && mouseIsPressed == true) {
      elColor=6;
  }

  if (mouseX > bot7x
    && mouseX < bot7x + bot7an
    && mouseY > bot7y
    && mouseY < bot7y + bot7al
    && mouseIsPressed == true) {
    pincelSeleccionado = 1;
  }

    if (mouseX > bot8x
    && mouseX < bot8x + bot8an
    && mouseY > bot8y
    && mouseY < bot8y + bot8al
    && mouseIsPressed == true) {
    pincelSeleccionado = 2;
  }

    if (mouseX > bot9x
    && mouseX < bot9x + bot9an
    && mouseY > bot9y
    && mouseY < bot9y + bot9al
    && mouseIsPressed == true) {
    pincelSeleccionado = 3;
  }

    if (mouseX > bot10x
    && mouseX < bot10x + bot10an
    && mouseY > bot10y
    && mouseY < bot10y + bot10al
    && mouseIsPressed == true) {
    pincelSeleccionado = 4;
  }

    if (mouseX > bot11x
    && mouseX < bot11x + bot12an
    && mouseY > bot11y
    && mouseY < bot11y + bot11al
    && mouseIsPressed == true) {
    pincelSeleccionado = 5;
  }

    if (mouseX > bot12x
    && mouseX < bot12x + bot12an
    && mouseY > bot12y
    && mouseY < bot12y + bot12al
    && mouseIsPressed == true) {
    pincelSeleccionado = 6;
  }

  //dibujo de pinceles
  if (mouseIsPressed == true) {
    if (pincelSeleccionado == 1) {
      ellipse(mouseX, mouseY, 15, 15);
    }
    if (pincelSeleccionado == 2) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (pincelSeleccionado == 3) {
      triangle(mouseX, mouseY, mouseX+15, mouseY-40, mouseX+30, mouseY);
       }
    if (pincelSeleccionado == 4) {
      line(mouseX, mouseY, mouseX+60, mouseY);
      line(mouseX+30, mouseY+30, mouseX+30, mouseY-30);
       }
    if (pincelSeleccionado == 5) {
      rect(mouseX, mouseY, 15, 15);
       }
    if (pincelSeleccionado == 6) {
      polet(pmouseX, pmouseY);

  }
}

 //BARRA DE COLORES Y HERRAMIENTAS

    fill(1);
    noStroke();
    rect(0, 0, 400, 51);

    fill(255, 0, 0);
    rect(0, 0, 400, 50);

  //carita
    fill(1);
    ellipse(208, 17, 6, 6);

    fill(1);
    ellipse(219, 17, 6, 6);

    stroke(0);
    noFill();
    arc(212, 20, 30, 30, 0, 2*HALF_PI);

  //botones de colores
    noStroke();
    fill(65, 75, 165);
    rect(bot1x, bot1y, bot1an, bot1al);
          if (elColor==1){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot1x, bot1y, bot1an, bot1al);
      }

    noStroke();
    fill(65, 175, 120);
    rect(bot2x, bot2y, bot2an, bot2al);
          if (elColor==2){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot2x, bot2y, bot2an, bot2al);
      }

    noStroke();
    fill(252, 143, 186);
    rect(bot3x, bot3y, bot3an, bot3al);
              if (elColor==3){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot3x, bot3y, bot3an, bot3al);
      }

    noStroke();
    fill(243, 112, 0);
    rect(bot4x, bot4y, bot4an, bot4al);
              if (elColor==4){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot4x, bot4y, bot4an, bot4al);
      }

    noStroke();
    fill(0, 119, 114);
    rect(bot5x, bot5y, bot5an, bot5al);
              if (elColor==5){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot5x, bot5y, bot5an, bot5al);
      }

    noStroke();
    fill(252, 173, 0);
    rect(bot6x, bot6y, bot6an, bot6al);
              if (elColor==6){ //cuando esta seleccionado el color, cambia el boton
      noFill();
      stroke(0);
      rect(bot6x, bot6y, bot6an, bot6al);
      }

      //botones blancos de los iconos
    noStroke();
    fill(255, 255, 255);
    rect(bot7x, bot7y, bot7an, bot7al);
    noStroke();
    fill(255, 255, 255);
    rect(bot8x, bot8y, bot8an, bot8al);
    noStroke();
    fill(255, 255, 255);
    rect(bot9x, bot9y, bot9an, bot9al);
    noStroke();
    fill(255, 255, 255);
    rect(bot10x, bot10y, bot10an, bot10al);
    noStroke();
    fill(255, 255, 255);
    rect(bot11x, bot11y, bot11an, bot11al);
    noStroke();
    fill(255, 255, 255);
    rect(bot12x, bot12y, bot12an, bot12al);
    fill(255, 255, 255);
    rect(bot13x, bot13y, bot13an, bot13al);
    stroke(255, 0, 0);
    line(163, 15, 182, 34);
    line(182, 15, 163, 34);

    //DIBUJO DE LOS ICONOS

    //bolita
    noStroke();
    fill(0);
    ellipse(255, 25, 12, 12);
      if (pincelSeleccionado==1){ //cuando esta seleccionado el pincel, cambia el boton
        noFill();
        stroke(0);
        rect(bot7x, bot7y, bot7an, bot7al);
      }

    //triangulo
    noStroke();
    fill(0);
    beginShape();
    vertex(305, 18);
    vertex(312, 32);
    vertex(298, 32);
    endShape(CLOSE);
      if (pincelSeleccionado==3){ //cuando esta seleccionado el pincel, cambia el boton
      noFill();
      stroke(0);
      rect(bot9x, bot9y, bot9an, bot9al);
      }

    //cruz
    stroke(0);
    line(321, 25, 340, 25);
    line(330, 15, 330, 34);
      if (pincelSeleccionado==4){ //cuando esta seleccionado el pincel, cambia el boton
      noFill();
      stroke(0);
      rect(bot10x, bot10y, bot10an, bot10al);
      }

    //linea
    stroke(0);
    line(271, 15, 290, 34);
      if (pincelSeleccionado==2){ //cuando esta seleccionado el pincel, cambia el boton
      noFill();
      stroke(0);
      rect(bot8x, bot8y, bot8an, bot8al);
      }

    //cuadradro
    stroke(0);
    fill(0);
    rect(349, 18, 12, 12);
      if (pincelSeleccionado==5){ //cuando esta seleccionado el pincel, cambia el boton
      noFill();
      stroke(0);
      rect(bot11x, bot11y, bot11an, bot11al);
      }

    //punticos
    noStroke();
    fill(0);
    ellipse(380, 25, 5, 5);
          if (pincelSeleccionado==6){ //cuando esta seleccionado el pincel, cambia el boton
      noFill();
      stroke(0);
      rect(bot12x, bot12y, bot12an, bot12al);
      }

    //aplicación de la variable de los colores
    if (elColor==1) {
      stroke(65, 75, 165);
      fill(65, 75, 165);
    } else if (elColor==2) {
      stroke(65, 175, 120);
      fill(65, 175, 120);
    } else if (elColor==3) {
      stroke(252, 143, 186);
      fill(252, 143, 186);
    } else if (elColor==4) {
      stroke(243, 112, 0);
      fill(243, 112, 0);
    } else if (elColor==5) {
      stroke(0, 119, 114);
      fill(0, 119, 114);
    } else if (elColor==6) {
    stroke(252, 173, 0);
    fill(252, 173, 0);
    }
    else {
      noStroke();
      noFill();
    }


}
