let container = document.querySelector(".tcontainer")
let team = [
    {
        name:"Dennis Norris",
        post:"CEO",
        imgsrc:"teamimg/team-thumb-1.jpeg"
    },
    {
        name:"Justin Hammer",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-2.jpeg"
    },
    {
        name:"Ashley Hardy",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-3.jpeg"
    },
    {
        name:"Ashley Hardy",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-4.jpeg"
    },
    {
        name:"Clark Roberts",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-5.jpeg"
    },
    {
        name:"Justin Hammer",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-6.jpeg"
    },
    {
        name:"Dennis Norris",
        post:"CEO",
        imgsrc:"teamimg/team-thumb-7.jpeg"
    },
    {
        name:"Clark Roberts",
        post:"Marketing Analyst",
        imgsrc:"teamimg/team-thumb-8.jpeg"
    }
]

team.forEach((e)=>{
    let box = document.createElement("div");
    box.classList.add("tbox");
    box.innerHTML = `<div class="timgbox">
    <img src=${e.imgsrc} alt="">
</div>
<div class="tinfo">
    <h3>${e.name}</h3>
    <p>${e.post}</p>
    <div class="ticon">
        <li><a href="../#"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="../#"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="../#"><i class="fa-brands fa-twitter"></i></a></li>
    </div>
</div>
    `
    container.appendChild(box)
})