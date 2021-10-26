// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(mouseIsPressed){
  count = (count + 3) % cycle;
}
else{
    count = (count + 1) % cycle;
}

  // BLANK[1]
  let size=count;
  if(count<10){
  ellipse(width / 2, height / 2, size);
}

  else{
    ellipse(width / 2, height / 2, 100-size)
  }
}
