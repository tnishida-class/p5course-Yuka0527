// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py;
  px=0;
  for(let i = 0; i < scores.length; i++){px=i-1}
  py=0;
  for(let i = 0; i < scores.length; i++){py=scores[i-1]}

 //px、pyの設定がわかりませんでした。
  for(let i = 0; i < scores.length; i++){
    stroke(0);
    point(i*40,scores[i]);

    stroke(0);
    line(px,py,i*40,scores[i]);

    // BLANK[1]
  }
}
