let i = 0;
let img = document.getElementById('audioimg');
let bgm = document.getElementById('bgm');
function rotate(){
    i++;
    let deg = i + 'deg';
    img.style.transform = 'rotate('+ deg +')';
}
    let run = setInterval(rotate,80);


let x = 0;

img.addEventListener('click',c)
function c(){
    x++;
    if(x % 2 == 0){
        // bgm.play();
        bgm.muted = false;
        run = setInterval(rotate,80);
    }
    else{
        bgm.muted = true;
        clearInterval(run);
    }
    console.log(x);
    console.log(bgm.muted);
}
