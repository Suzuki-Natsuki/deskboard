'use strict'

const imgarray = ["C:/Users/1598223/Desktop/デジタル支援G関係/行先表示ボード/pic/在宅.png",
                  "C:/Users/1598223/Desktop/デジタル支援G関係/行先表示ボード/pic/帰宅.png",
                  "C:/Users/1598223/Desktop/デジタル支援G関係/行先表示ボード/pic/現場.png"]

const selectimg = document.getElementsByTagName("img")[0];
let displayNum = 0;

selectimg.addEventListener('click',() => {
  if (displayNum === 2) {
    selectimg.src = imgarray[0];
    displayNum = 0 
  } else {
    selectimg.src = imgarray[displayNum + 1];
    displayNum += 1;
  }
})
