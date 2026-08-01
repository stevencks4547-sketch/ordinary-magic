let currentScene = 0;


const scenes = document.querySelectorAll(".scene");


const music = document.getElementById("bgMusic");


let musicPlaying = false;





// 开始故事

function startStory(){


    music.play();


    musicPlaying = true;


    nextScene();


}







// 下一页

function nextScene(){


    if(currentScene < scenes.length - 1){


        scenes[currentScene]
        .classList.remove("active");



        currentScene++;



        scenes[currentScene]
        .classList.add("active");


    }


}







// 音乐控制

function toggleMusic(){


    if(musicPlaying){


        music.pause();


        musicPlaying = false;


    }

    else{


        music.play();


        musicPlaying = true;


    }


}
