let current = 0;


const screens = document.querySelectorAll(".screen");


const music = document.getElementById("music");


let playing = false;






function start(){


    music.play();


    playing = true;


    next();


}








function next(){


    if(current < screens.length - 1){


        screens[current]
        .classList.remove("active");


        current++;


        screens[current]
        .classList.add("active");


    }


}








function toggleMusic(){


    if(playing){


        music.pause();


        playing = false;


    }

    else{


        music.play();


        playing = true;


    }


}
