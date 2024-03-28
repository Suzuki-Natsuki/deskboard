'use strict'

const imgarray = ["現場.png",
                  "外出.png",
                  "健診.png"]

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
