let content = document.getElementById('content')
let menu = document.getElementById('menu')
let mywork = document.querySelector('#mywork')


let museum = document.querySelector('#museum-text')
let planning = document.querySelector('#planning-text')
let building = document.querySelector('#building-text')
let school = document.querySelector('#school-text')
let other = document.querySelector('#other-text')
let ctn_text = document.querySelectorAll('.ctn-text');

let ctnLine = document.getElementById('ctnLine')        
    mywork.onscroll = function (){
    let hh = document.documentElement.clientHeight
      console.log(mywork.scrollTop);
      if(mywork.scrollTop < hh){
        menu.setAttribute('style','opacity:1;position: sticky;top:0')
        content.setAttribute('style','left:110vw;position:absolute;opacity:0')
      }else{
        content.setAttribute('style','left:94vw;position: sticky;opacity:1')
        if(mywork.scrollTop < hh*4){
          menu.setAttribute('style','opacity:0;position:absolute;top:-100px')
          content.setAttribute('style','left:94vw;position: sticky;opacity:1')
                      ctn_text.forEach((a) =>{
                        a.classList.remove('lumion');
                      })
                      museum.classList.add('lumion');
          ctnLine.setAttribute('style','top:50px')
        }else if(mywork.scrollTop < hh*7){
          ctnLine.setAttribute('style','top:130px')
                      ctn_text.forEach((a) =>{
                        a.classList.remove('lumion');
                      })
                      planning.classList.add('lumion');
        }else if(mywork.scrollTop < hh*10){
          ctnLine.setAttribute('style','top:210px')
                      ctn_text.forEach((a) =>{
                        a.classList.remove('lumion');
                      })
                      building.classList.add('lumion');
        }else if(mywork.scrollTop < hh*13){
          ctnLine.setAttribute('style','top:290px')
                      ctn_text.forEach((a) =>{
                        a.classList.remove('lumion');
                      })
                      school.classList.add('lumion');
        }else if(mywork.scrollTop < hh*16){
          ctnLine.setAttribute('style','top:370px')
                      ctn_text.forEach((a) =>{
                        a.classList.remove('lumion');
                      })
                      other.classList.add('lumion');
        }
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


    //边栏导航
    function ctct(){
      this.onclick = function(){
        // alert('hello')
        for(let i = 0; i < ctn_text.length; i++) {
            //获得角标
            ctn_text[i].index = i;
                                                                                                  // setTimeout(() => {
                                                                                                  //   console.log(i);
                                                                                                  //   if(i<=this.index){
                                                                                                  //     let b = i*3 + 2
                                                                                                  //     let hh = document.documentElement.clientHeight;
                                                                                                  //     mywork.scrollTop = hh*b;
                                                                                                  //   }
                                                                                                  //  }, 100 * i)
                                                                                                  // console.log(i)
                                                                                                  //获得实际应该滚动的距离
            let j = this.index*3 + 2
            let hh = document.documentElement.clientHeight;
            mywork.scrollTop = hh*j;
        }
      }
    }
    ctn_text.forEach((a) => {
        a.addEventListener('mouseenter',ctct);
    })

