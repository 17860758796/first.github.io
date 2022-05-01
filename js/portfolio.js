let content = document.getElementById('content')
let menu1 = document.getElementById('menu1')
let container = document.querySelector('#container')


let museum = document.querySelector('#museum-text')
let planning = document.querySelector('#planning-text')
let building = document.querySelector('#building-text')
let school = document.querySelector('#school-text')
let other = document.querySelector('#other-text')


let ctnLine = document.getElementById('ctnLine')        
    container.onscroll = function () {
    let hh = document.documentElement.clientHeight
      console.log(container.scrollTop);
      if(container.scrollTop < hh){
        menu1.setAttribute('style','opacity:1;position: sticky;top:0')
        content.setAttribute('style','left:110vw;position:absolute;opacity:0')
      }else if(container.scrollTop < hh*2){
        menu1.setAttribute('style','opacity:0;position:absolute;top:-100px')
        content.setAttribute('style','left:94vw;position: sticky;opacity:1')
                                                                            planning.setAttribute('style','color:rgb(50,50,50)')
                                                                            museum.setAttribute('style','color:rgb(214,214,214)')
        ctnLine.setAttribute('style','top:50px')
      }else if(container.scrollTop < hh*3){
        ctnLine.setAttribute('style','top:130px')
                                                                            museum.setAttribute('style','color:rgb(50,50,50)')
                                                                            building.setAttribute('style','color:rgb(50,50,50)')
                                                                            planning.setAttribute('style','color:rgb(214,214,214)')
      }else if(container.scrollTop < hh*4){
        ctnLine.setAttribute('style','top:210px')
                                                                            planning.setAttribute('style','color:rgb(50,50,50)')
                                                                            school.setAttribute('style','color:rgb(50,50,50)')
                                                                            building.setAttribute('style','color:rgb(214,214,214)')
      }else if(container.scrollTop < hh*5){
        ctnLine.setAttribute('style','top:290px')
                                                                            building.setAttribute('style','color:rgb(50,50,50)')
                                                                            other.setAttribute('style','color:rgb(50,50,50)')
                                                                            school.setAttribute('style','color:rgb(214,214,214)')
      }else if(container.scrollTop < hh*6){
        ctnLine.setAttribute('style','top:370px')
                                                                            school.setAttribute('style','color:rgb(50,50,50)')
                                                                            other.setAttribute('style','color:rgb(214,214,214)')
      }
    }
