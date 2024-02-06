
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



