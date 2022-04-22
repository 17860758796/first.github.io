let lizi_canvas = document.querySelector('#canvas'),
    lizi_ctx = lizi_canvas.getContext('2d');
let particles = [],
    amount = 0,
    zssb = {x:0,y:0},
    radius = 5,                                            //鼠标影响范围
    headline = 'PORTFOLIO'                               //文字内容
    // img = document.getElementById('img');                   //图片链接

class Particle {
    constructor(x, y) {
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = { x: x, y: y };
        this.r = 0.4 * Math.PI;
        this.vx = (Math.random() - 0.5) * 25;
        this.vy = (Math.random() - 0.5) * 25;
        this._x = 0;
        this._y = 0;
        this.friction = Math.random() * 0.025 + 0.95;
        this.color = "rgba(255,255,255,0.7)";
    }
    render() {
        this._x = (this.dest.x - this.x) / 1000;
        this._y = (this.dest.y - this.y) / 1000;
        this.vx += this._x;
        this.vy += this._y;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;


        lizi_ctx.fillStyle = this.color;
        lizi_ctx.beginPath();
        lizi_ctx.arc(this.x, this.y, this.r*1, Math.PI * 2, false);        //粒子直径
        lizi_ctx.fill();
        let a = this.x - zssb.x;
        let b = this.y - zssb.y;
        let distance = Math.sqrt(a * a  + b * b);
        if (distance < (radius * 30)) {
            this._x = (this.x - zssb.x) / 1000;
            this._y = (this.y - zssb.y) / 1000;
            this.vx += this._x;
            this.vy += this._y;
        }
        else if(zssb.y > 1000){                         //这里想办法给this.x、this.y个随机值,且只赋予一次
            this.vx = (Math.random() - 0.5) * 25;
            this.vy = (Math.random() - 0.5) * 25;
        }
    }
}
function onMouseMove(e){
    zssb.x = e.clientX;
    zssb.y = e.clientY + window.pageYOffset;   //给鼠标的y轴加上窗口偏移的距离
}


function initScene(){
    ww = lizi_canvas.width = window.innerWidth,
    wh = lizi_canvas.height = window.innerHeight;
    lizi_ctx.clearRect(0,0,ww,wh)
    lizi_ctx.font = 'bold 16vw SAO UI'                               //字体
    lizi_ctx.textAlign = 'center'
    lizi_ctx.fillText(headline,ww/2,wh/2);                        //采样文字内容
    // lizi_ctx.drawImage(img,500,0,900,900);                            //采样图片
    let data = lizi_ctx.getImageData(0,0,ww,wh).data
    lizi_ctx.clearRect(0,0,ww,wh)
    lizi_ctx.globalCompositeOperation = 'screen';
    particles=[];
    for (let i = 0;i < ww;i += Math.round(ww/300)){             //粒子数量，越大采样越细，粒子越多
        for(let j = 0;j < wh;j += Math.round(ww /300)){
            if(data[((i+j*ww)*4)+3]>200){                       //大于200透明度
                particles.push(new Particle(i,j))
            }
        }
    }
    amount = particles.length
}
function go(){
    requestAnimationFrame(go)
    lizi_ctx.clearRect(0,0,ww,wh)
    for(let i = 0;i < amount;i++){
        particles[i].render()
    }
}



window.addEventListener('resize',initScene)         //窗口发生变化时
window.addEventListener('mousemove',onMouseMove)
initScene()
requestAnimationFrame(go)












