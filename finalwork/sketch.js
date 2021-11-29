
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
if((i+j)%2==0&&i<1){
  fill(235,112,150);
}

else if((i+j)%2==0&&i<2){
  fill(235,151,112);
}
else if((i+j)%2==0&&i<3){
  fill(235,198,112);
}
else if((i+j)%2==0&&i<4){
  fill(219,235,112);
}
else if((i+j)%2==0&&i<5){
  fill(192,235,112);
}
else if((i+j)%2==0&&i<6){
  fill(157,235,112);
}
else if((i+j)%2==0&&i<7){
  fill(118,235,112);
}
else if((i+j)%2==0&&i<8){
  fill(112,235,132);
}
else if(j>7){
  fill(112,235,227);
}
else if(j>6){
  fill(112,194,235)
}
else if(j>5){
  fill(112,138,235);
}
else if(j>4){
  fill(120,112,235)
}
else if(j>3){
  fill(165,112,235);
}
else if(j>2){
  fill(192,112,235)
}
else if(j>1){
  fill(211,112,235)
}
else if(j>0){
  fill(235,112,231)
}
else{
  fill(235,112,196)
}
rect(size*i,size*j,size,size);
    }}
}

function draw(){
  if(mouseIsPressed){fill(248,210,41);}
  else{fill(255);}
  nine(100,100,60);
  fill(255);
  textSize(25);
  textFont("trebuchet MS")
  text("GLOBAL",55,111);
}
function nine(cx, cy, r){
  beginShape();
  for(let i = 0; i < 9; i++){
    const theta = TWO_PI * i * 2 / 9 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
