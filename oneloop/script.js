setInterval(()=>{
    gsap.from(".watch i",{
        border:".1rem",
    })
},1000)

if(window.innerWidth > 900){
    
addEventListener("DOMContentLoaded", () => {
    
    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section1",
            start: "top bottom",
            end: "100% 0%",
        }
    });
    
    t1.from(".hleft h4,.hleft h1,.hleft p,.hleft .btn",{
        y:"100%",
        opacity:0,
        stagger:.1,
        duration:1
    },'a')
    t1.from(".prev",{
        x:"-50rem",
        duration:1.5,
        opacity:0
    },'a')
    t1.from(".next",{
        x:"50rem",
        duration:1.5,
        opacity:0
    },'a')

    let t2 = gsap.timeline({scrollTrigger:{
        trigger:".section2",
        start:"0% 80%",
        end:"100% 0%",
    }})
    t2.from(".leftbox,.rightbox",{
        y:'70%',
        duration:1,
        opacity:0
    })
    let t3 = gsap.timeline({scrollTrigger:{
        trigger:".section3",
        start:"0% 90%",
        end:"100% 0%",
    }})
    t3.from(".section3 .top,.s3left,sright img",{
        y:'80%',
        duration:1,
        opacity:0
    })


    let t4 = gsap.timeline({scrollTrigger:{
        trigger:".section4",
        start:"0% 80%",
        end:"100% 0%",
    }})

    t4.from(".section4 .top,.section4 .imgslide",{
        y:'100%',
        duration:1,
        opacity:0
    })
  

    let t5 = gsap.timeline({scrollTrigger:{
        trigger:".section5",
        start:"0% 80%",
        end:"100% 0%",
    }})
    t5.from(".section5 .top,.section5 .center",{
        y:'100%',
        duration:1,
        opacity:0
    })


    let t6 = gsap.timeline({scrollTrigger:{
        trigger:".section6",
        start:"0% 80%",
        end:"100% 0%",
    }})
    t6.from(".section6 .top,.section6 .s6center",{
        y:'100%',
        duration:1,
        opacity:0
    })

    let t7 = gsap.timeline({scrollTrigger:{
        trigger:".section7",
        start:"0% 80%",
        end:"100% 0%",
    }})
    t7.from(".section7 .s7top",{
        y:'100%',
        duration:1,
        opacity:0
    },'s7')
    t7.from(".section7 .s7center .box",{
        y:'100%',
        duration:1,
        opacity:0,
        stagger:.2
    },'s7')

    
    let t8 = gsap.timeline({scrollTrigger:{
        trigger:".section8",
        start:"0% 80%",
        end:"100% 0%",
    }})
    t8.from(".section8 .top,.section8 .s8bottom",{
        y:'100%',
        duration:1,
        opacity:0
    },'s8')
    t8.from(".section8 .s8center .boxf",{
        y:'100%',
        duration:1,
        opacity:0
    },'s8')
    t8.from(".section8 .s8center .boxl",{
        y:'100%',
        duration:1,
        delay:.5,
        opacity:0
    },'s8')

    let t9 = gsap.timeline({scrollTrigger:{
        trigger:".section9",
        start: "top bottom",
        end: "100% 0%",
    }})
    t9.from(".section9",{
        y:'100%',
        duration:.5,
        opacity:0,
    })
});

}



let slider1 = () =>{
    let maincontainer = document.querySelector(".maincontainer");
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let slides = document.querySelectorAll(".hcontainer")
let index = 1;

let firstclone = slides[0].cloneNode(true)
let lastclone = slides[slides.length - 1].cloneNode(true)

firstclone.id = "first-clone"
lastclone.id = "last-clone"

maincontainer.append(firstclone)
maincontainer.prepend(lastclone)
slides = document.querySelectorAll(".hcontainer")

maincontainer.style.transform = `translateX(${-100 * index}vw)`;

next.addEventListener("click", () => {
    if(index >= slides.length-1){
        return
    }
    index++
    maincontainer.style.transform = `translateX(${-100 * index}vw)`;
    maincontainer.style.transition = ".7s"
})

maincontainer.addEventListener("transitionend", () => {
    slides = document.querySelectorAll(".hcontainer");
    if (slides[index].id === firstclone.id) {
        maincontainer.style.transition = 'none';
        index = 1;
        maincontainer.style.transform = `translateX(${-100 * index}vw)`;
    }
    if (slides[index].id === lastclone.id) {
        maincontainer.style.transition = 'none';
        index = slides.length-2;
        maincontainer.style.transform = `translateX(${-100 * index}vw)`;
    }
});


prev.addEventListener("click", () => {
    if(index <= 0){
        return
    }
    index--;
    maincontainer.style.transform = `translateX(${-100 * index}vw)`;
    maincontainer.style.transition = ".7s"
})

}



let slider2 = () =>{
    if(window.innerWidth < 900){
        document.querySelector(".slidebtns").style.display = "flex"
        let slidebox = document.querySelector(".imgslide");
        let iprev = document.querySelector(".iprev")
        let inext = document.querySelector(".inext")
        
        let islides = document.querySelectorAll(".imgbox")
        let index = 1;
        
        let ifirstclone = islides[0].cloneNode(true)
        let ilastclone = islides[islides.length-1].cloneNode(true)
        
        ifirstclone.id = "first-clone"
        ilastclone.id = "last-clone"
        
        slidebox.append(ifirstclone)
        slidebox.prepend(ilastclone)
        
        let boxwidth = islides[index].getBoundingClientRect().width;
        
        slidebox.style.transform = `translate(${-boxwidth * index}px)`
        
        inext.addEventListener("click",()=>{
            if(index >= islides.length-1){
                return
            }
            index++;
            slidebox.style.transform = `translateX(${-boxwidth * index}px)`
            slidebox.style.transition = "0.7s"
        
        })
        slidebox.addEventListener("transitionend", () => {
            islides = document.querySelectorAll(".imgbox")
            console.log(index)
            if (islides[index].id == ifirstclone.id) {
                slidebox.style.transition = 'none';
                index = 1;
                slidebox.style.transform = `translateX(${-boxwidth * index}px)`;
            }
            if (islides[index].id == ilastclone.id) {
                slidebox.style.transition = 'none';
                index = islides.length-2;
                slidebox.style.transform = `translateX(${-boxwidth * index}px)`;
            }
        });
        
        iprev.addEventListener("click",()=>{
            if(index <= 0){
                return
            }
            index--;
            slidebox.style.transform = `translateX(${-boxwidth * index}px)`
            slidebox.style.transition = "0.7s"
        
        })
    }
    
}

slider1()
slider2()

let menu = document.querySelector(".menuicon");
console.log(menu)

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



    const getStartedButton = document.querySelector(".startbtn");
    const crossButton = document.querySelector(".x");
    const formDiv = document.querySelector(".getstarted");

    getStartedButton.addEventListener("click", function() {
        gsap.to(formDiv,{
            opacity:1,
            scale:1,
            display:"flex",
            duration:.2,
        })
        gsap.to("#page1",{
            opacity:.2
        })
        
    });

    crossButton.addEventListener("click", function() {
        gsap.to(formDiv,{
            opacity:0,
            scale:".6",
            duration:.2,
            display:"none"

        })
        gsap.to("#page1",{
            opacity:1
        })
    });




