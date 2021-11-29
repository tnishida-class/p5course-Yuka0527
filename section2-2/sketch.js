// テキスト「練習：繰り返し」
// 太い線と細い線が交互に出てくるパターン
// 練習：以下の2パターンにプログラムを書き換えてみましょう
// (1) 細い、太い、すごく太い、の3本周期で太さが変わる
// (2) 最初の3本が細い、次の3本が太い、最後の3本がすごく太い

function setup() {
  createCanvas(100,100);
  background(196);
  for(let i=0;i<9;i++){

    let x=10 +i*10;
line(x,0,x,100);
if(i%3==0){
  strokeWeight(2);
}
else if(i%3==2) {
  strokeWeight(8);
}
else
strokeWeight(4)}
}
