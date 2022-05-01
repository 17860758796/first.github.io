let menu_ul = document.getElementById('menu_ul');
let audio = document.getElementById('audio');

$("li, #audio").unbind("mouseenter").mouseenter(function(){
    mouse.setAttribute('style','width: 25px;height: 25px;background: rgba(255,255,255,0.2);border: 1px solid rgba(255, 255, 255, 0.7)');
})
$("li, #audio").unbind("mouseleave").mouseleave(function(){
    mouse.setAttribute('style','width: 40px;height:40px;background: rgba(255,255,255,0);border: 1px solid rgba(0, 0, 0, 0.7)');
})

let mouse = document.getElementById('mouse');
let ex = 0,ey = 0,vx = 0,vy = 0;
window.addEventListener('mousemove',function (evt) {    //添加句柄，当鼠标点击时，触发函数

    ex = evt.x - mouse.clientWidth/2;
    ey = evt.y - mouse.clientHeight/2;
    ex +=2;
    ey +=2;
});
function draw(){
    mouse.style.left = ex + 'px';
    mouse.style.top = ey + 'px';
}  
setInterval(draw,20)


