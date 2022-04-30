let content = document.getElementById('content')
let menu1 = document.getElementById('menu1')
let container = document.querySelector('#container')

    container.onscroll = function () {
      console.log(container.scrollTop);
      if(container.scrollTop > 800){
        menu1.style.opacity = 0;
        content.style.left = 96+'vw';
        content.style.opacity = 1;
    }else{
        menu1.style.opacity = 1;
        content.style.left = 100+'vw';
        content.style.opacity = 0;
    }
    }

