function changeColor(){


    let radios = document.getElementsByName('color');

    let fontcolor = document.getElementById('text');

    

    radios.forEach((radio)=>{

        radio.addEventListener('change',()=>{

            fontcolor.style.color = radio.value

        })

    })




}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
        
}

function changeBgColor(){
}

function changeBg(){
    let list = document.getElementById('colorsel');
    let backcolor = document.getElementById('td_text');

    backcolor.style.background = list.value
        
}
