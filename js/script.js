
// 전역변수에 순서 지정
var i = 0;

function ans(x){
  // x = 전달받은 답안 1 홀 0 짝
  //응 안쓸거야~
  var r = Math.random();
  r = Math.floor( r * 5 );
  console.log(r);

  if (r<2){ // 2/5 확률로 정답
    console.log("정답");
    document.getElementById("answer").innerHTML = "정답입니다!";
  }
  else{ // 3/5 주작 그자체 ..
    document.getElementById("answer").innerHTML = "오답입니다.";
  }
  i++;
  var src = document.getElementById("cartoon").src;
  switch (i) {
    case 1: document.getElementById("cartoon").src = "imgs/1.png"; break;
    case 2: document.getElementById("cartoon").src = "imgs/2.png"; break;
    case 3: document.getElementById("cartoon").src = "imgs/3.png"; break;
    case 4: document.getElementById("cartoon").src = "imgs/4.png"; break;
    case 5: document.getElementById("cartoon").src = "imgs/5.png"; break;
    case 6: document.getElementById("cartoon").src = "imgs/6.png"; break;
    case 10: document.getElementById("cartoon").src = "imgs/10.png"; break;
    default: document.getElementById("cartoon").src = "imgs/default.png"; break;
  }

document.getElementById("hide").style.visibility = "visible";

}
