$(function(){
    $('#body').css({'overflow':'hidden'});
    let allIMg = $('img');
    let num = 0;

    allIMg.each(function(i){
        let newImg = new Image();
        newImg.onload = null;

        newImg.onload = function(){
            num++;
            
            let scale = parseInt(num/$('img').length*100);
            let balign = scale/2 - 50;
            
            $('#bor1').css({'left':balign+'%'});
            $('#bor2').css({'right':balign+'%'});
            document.getElementById('jd').innerHTML = scale + '%';
            

            let bgm = document.getElementById('bgm');
            function loodingend(){
                if(num >= $('img').length){
                    bgm.play();      
                    $('#loading').fadeOut("200","linear");
                    $('#body').css({'overflow':'auto'});
                }
            }
            window.addEventListener('click',loodingend)
               

            // 加载太快看不出效果所以这里手动减速，，，
            // setTimeout(() => {
            //     loodingend()
            // }, 1000);           
        }

        newImg.src = allIMg[i].src;
    })
    $('#menu').css({'z-index':'0'});
})


