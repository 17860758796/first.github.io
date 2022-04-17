let canvas = document.createElement("canvas");      //创建一个canvas标签
    let  ctx = canvas.getContext('2d');                 //指定渲染方式为二维渲染
    window.document.body.appendChild(canvas);                     //在body后添加子节点canvas(画布)
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style','position:fixed;left:0;top:0;pointer-events:none;');
    let points = [];                                              //容纳粒子的数组
    let colors = [                                                //容纳粒子颜色的数组
        '220,213,242',
        '94,231,223',
        '162,182,223',
        '240,152,25'
    ];
    let live = 50;                                                //给一个生命值，通过后面 life-- 来计算粒子存在时间
    window.addEventListener('click',function (evt) {    //添加句柄，当鼠标点击时，触发函数
        for (let i = 0; i  < 20; i++){                            //定义粒子初始为0个 当粒子小于20时循环绘制，到20个停止循环 [就是点击一次往粒子数组中加20个新的粒子]
            points.push({                                         //push是在容纳粒子的数组 points[]的尾部添加新粒子
                sx: evt.x,                                        //让sx = 鼠标点击时的x坐标
                sy: evt.y,
                vx: 0.5 - Math.random(),                          //0.5-[随机生成一个[0,1)的数]，0.5 - Math.random是为了在不同方向上的移动值
                vy: 0.5 - Math.random(),
                life: live,                                                     //生命值等于live(50)
                color: colors[(Math.random() * colors.length).toFixed()],      //colors[([0,1) * colors数组的长度)保留0位小数，四舍五入] 这样可以获得0~数组长度的随机值，作为该数组的角标

                size: Math.random()*6                                           //随机尺寸
            })
        }
    });
    function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);                       //清空画布
        let point;                                                              //定义 未定义变量粒子
        for (let i = 0; i < points.length; i++) {                               //去出第i个粒子，当i小于粒子数组长度时，再取一次
            point = points[i];
            ctx.beginPath();                                                    //取出粒子后中止路径，xy坐标都设置为0（重置）
            ctx.fillRect(point.sx, point.sy, point.size, point.size);           //开始绘制，[粒子x坐标，粒子y坐标，粒子宽度，粒子长度]（这里是方形，其他形状的格式再百度吧，，，）
            ctx.fillStyle = 'rgba('+point.color+','+point.life/live+')';        //设置填充颜色[     ,当前生命值/初始生命值（取出一次当前生命值-1，所以最后透明度会为0）]-----------------------------------这里有点问题，，
            ctx.fill();                                                             //填充
            point.life--;                                                       //生命-1
            if (point.life <= 0) {                                              //当生命<=0时
                points.splice(i, 1)                                //[重第i个开始，删除1个]效果就是删除当前元素
            }
            point.sx += point.vx * 30;                                          //新坐标=旧坐标+方向值（改变坐标，获得移动效果）
            point.sy += point.vy * 30;
            point.vy += 0.03                                                    //增加y方向上的正值，获得向下移动加速的效果（获得重力）

        }
}
setInterval(draw, 20)                                                   //每20ms调用一次draw函数，即绘制一次，，每秒50帧，，
