



let menu = document.getElementById('menu')
let mywork = document.querySelector('#mywork')

    mywork.onscroll = function (){
    let hh = document.documentElement.clientHeight
      console.log(mywork.scrollTop);
      if(mywork.scrollTop < hh){
        menu.setAttribute('style','opacity:1;position: sticky;top:0')
      }else if(mywork.scrollTop < hh*4){
        menu.setAttribute('style','opacity:0;position:absolute;top:-100px')
        }
    }

    let items = document.querySelectorAll('.item');
    function setActive(){
      items.forEach((item) => {
        item.classList.remove('active');
      })
      this.classList.add('active');
      this.onclick = function(){
        // alert('hello')
        for(let i = 0; i < items.length; i++) {
            //获得角标
            items[i].index = i;
            //获得实际应该滚动的距离
            let j = this.index*3 + 1
            let hh = document.documentElement.clientHeight;
            mywork.scrollTop = hh*j;
        }
      }
    }
    items.forEach((item) => {
        item.addEventListener('mouseenter',setActive);
    })