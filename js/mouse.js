let mouse = document.getElementById('mouse');
// let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
// console.log(scrollY);
let ex = 0,ey = 0,vx = 0,vy = 0,count = 0;
window.addEventListener('mousemove',function (evt) {    //添加句柄，当鼠标点击时，触发函数
    ex = evt.x - mouse.offsetLeft - mouse.clientWidth/2;
    ey = evt.y - mouse.offsetTop - mouse.clientHeight/2;
    count = 0;
});
function draw(){
    if(count < 10){
        vx += ex/10;
        vy += ey/10;
    }
    mouse.style.left = vx + 'px';
    mouse.style.top = vy + 'px';
    count++;

}
    
setInterval(draw,10)
// menu_ul.addEventListener('mousemove',function (tr){
//     mouse.style.width = '10PX';
//     mouse.style.height = '10PX';
// })