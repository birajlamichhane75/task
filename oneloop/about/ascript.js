let btns = document.querySelectorAll(".changebtn .btn");
let cont1 = document.querySelector(".cont-1")
let cont2 = document.querySelector(".cont-2")
let cont3 = document.querySelector(".cont-3")

btns.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        if(i==0){
            cont1.style.display = "flex"
            cont2.style.display = "none"
            cont3.style.display = "none"
         }
         if(i==1){
            cont1.style.display = "none"
            cont2.style.display = "flex"
            cont3.style.display = "none"
         }
         if(i==2){
            cont1.style.display = "none"
            cont2.style.display = "none"
            cont3.style.display = "flex"
         }
    })
})

let menu = document.querySelector(".menuicon");

let openMenu = () =>{
    
    let menuBar = document.querySelector(".menuicon");
    let cross = document.querySelector(".cross");
    
    menuBar.addEventListener("click",()=>{
        console.log("click")
        let menu = document.querySelector("#menu-section");
    
        let tl = gsap.timeline()
    
        tl.to(menu,{
            right:"0%"
        },'a')
        
    
        tl.from("#menu-section .menu a",{
            opacity:0,
            x:"-40%",
            delay:.6,
            stagger:.1
        },'a')
    })
    
    
    cross.addEventListener("click",()=>{
        let menu = document.querySelector("#menu-section");
    
        let tl2 =gsap.timeline();
    
        tl2.to(menu,{
            right:"-70%",
            duration:1
        },'a')
    
    })
    }
    
    
    openMenu();
    

let dropdown = document.querySelector(".aboutelem");
let other = document.querySelector(".other"); 

dropdown.addEventListener("click",()=>{
    if (other.style.display === "none" || other.style.display === "") {
        other.style.display = "flex";
    } else {
        other.style.display = "none";
    }
})