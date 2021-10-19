
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 13; // 縞1本の太さ

  for(let i = 0; i < 13; i++){

    if(i%2==0){
      fill(255,0,0)
    }
    else{
      fill(255)
    }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 7;
  rect(0, 0, 120, size);

let e=120/11
let f=size/9
  fill(255);
  for(let e=1/2; e<11; e++){
  for(let f=1/2; f<9; f++){

    if((e+f)%2==0){
      fill(blue);
    }
    else{
      fill(255);
    }

ellipse(e*11,f*9+f,10)
//上のlet e=1/2とf=1/2、ellipseの中のｙ座標は適当に色々試して出来ただけなので、考えて作れたわけじゃないです。。。
  }
  }



}
