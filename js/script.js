const boxY = document.querySelector('.boxY');
const h1 = document.querySelector('.boxY > h1');
const img = document.querySelectorAll('img');
const mp3 = document.getElementById("myAudio");
let flag = true;

function imgInv(flag){ 
    if(!flag){ 
        img[0].style.filter = `invert(0)`
        img[1].style.filter = `invert(0)`
        img[2].style.filter = `invert(0)`
    }else{ 
        img[0].style.filter = `invert(1)`
        img[1].style.filter = `invert(1)`
        img[2].style.filter = `invert(1)`
    }
    
}

function invert(){
        if (flag) {
            boxY.style.background = 'black';
            h1.style.color = 'white'
            
        } else {
            boxY.style.background = 'white';
            h1.style.color = 'black'
        }

        imgInv(flag);
        flag = !flag;
}


function action(){
    invert()
    mp3.play()
}










function openWin() {
    myWindow = window.open( "../index.html",
                            "_blank",
                            "width=700"," height=500"
                            );
    myWindow.focus(); 
    
    
  }

  window.onclose = function(event){
    event.preventDefault();
    openWin();
  }
    
    

  setInterval(action, 1000);
  //setInterval(openWin, 10000);

