/* =================================
   REVA GIRLFRIEND DAY
   INTERACTIVE VVIP SCRIPT
================================= */



let currentScene = 1;



// ================================
// START BUTTON
// ================================


function startStory(){


const music =
document.getElementById("music");


// 音量柔和一点

music.volume = 0.5;


// 播放音乐

music.play()
.catch(()=>{

console.log(
"Music will start after interaction"
);

});


// 下一幕

nextScene(2);


}








// ================================
// CHANGE SCENE
// ================================


function nextScene(number){


const current =
document.getElementById(
"scene" + currentScene
);



const next =
document.getElementById(
"scene" + number
);



// 淡出

if(current){

current.classList.remove(
"active"
);

}


// 等待动画

setTimeout(()=>{


if(next){

next.classList.add(
"active"
);

}


},500);



currentScene = number;



}









// ================================
// FINAL MESSAGE
// ================================


function finalMessage(){



const current =
document.getElementById(
"scene8"
);



current.classList.remove(
"active"
);



setTimeout(()=>{


document
.getElementById("final")
.classList.add(
"active"
);



},700);



createHeartExplosion();



}









// ================================
// HEART EFFECT
// ================================


function createHeart(){


const heart =
document.createElement(
"div"
);



heart.innerHTML =
"❤️";



heart.style.position =
"absolute";



heart.style.left =
Math.random()*100+"vw";



heart.style.bottom =
"-20px";



heart.style.fontSize =
(
Math.random()*25+15
)+"px";



heart.style.animation =
"floatHeart 6s linear";



document.body.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},6000);



}






setInterval(
createHeart,
1000
);









// ================================
// FINAL HEART EXPLOSION
// ================================


function createHeartExplosion(){



for(
let i=0;
i<40;
i++
){


setTimeout(()=>{


const heart =
document.createElement(
"div"
);



heart.innerHTML =
"❤️";



heart.style.position =
"fixed";


heart.style.left =
"50%";


heart.style.top =
"50%";


heart.style.fontSize =
"30px";



heart.style.transform =
`
translate(
${Math.random()*400-200}px,
${Math.random()*400-200}px
)
`;



heart.style.transition =
"2s";


document.body.appendChild(
heart
);



setTimeout(()=>{

heart.remove();

},2000);



},i*30);



}



}
