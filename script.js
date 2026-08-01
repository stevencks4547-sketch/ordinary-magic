/* =========================
   REVA GIRLFRIEND DAY
   VVIP PREMIUM SCRIPT
========================= */



// =========================
// START STORY + MUSIC
// =========================


function startStory(){


const music =
document.getElementById("loveMusic");


music.volume = 0.5;


music.play();



document
.getElementById("opening")
.scrollIntoView({

behavior:"smooth"

});


}





// =========================
// LOVE JAR NOTES
// =========================


const notes = [

"Thank you for making me smile ❤️",

"Thank you for your patience with me ❤️",

"Thank you for always believing in us ❤️",

"Thank you for being my Reva ❤️"

];



function openNote(number){


document
.getElementById("note")
.innerHTML =
notes[number-1];


}







// =========================
// SECRET MESSAGE
// =========================


function openSecret(){


const secret =
document.getElementById(
"secretText"
);



secret.style.display="block";


secret.scrollIntoView({

behavior:"smooth"

});


}








// =========================
// YES BUTTON
// =========================


function yesAnswer(){


alert(

"Yay ❤️\n\n" +

"I can't wait to spend time with you, Reva.\n\n" +

"Let's create another beautiful memory together ❤️"

);


}








// =========================
// SCROLL FADE ANIMATION
// =========================


const sections =
document.querySelectorAll(
"section"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(

(entry)=>{


if(entry.isIntersecting){


entry.target.style.opacity=1;


entry.target.style.transform=
"translateY(0)";


}


}

);


},

{

threshold:0.15

}

);





sections.forEach(

(section)=>{


section.style.opacity=0;


section.style.transform=
"translateY(50px)";


section.style.transition=
"all 1.5s ease";


observer.observe(section);


}

);








// =========================
// HEART PARTICLES
// =========================


function createHeart(){


const heart =
document.createElement(
"div"
);


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize =
(Math.random()*20+15)+"px";


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

1200

);
