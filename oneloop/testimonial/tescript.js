let container = document.querySelector(".tecontainer");
{/* <div class="person">
<div class="profile">
    <img class="testimonials" src="../images/home/testimonials.jpg" alt="">
    <div class="ts1text">
        <h3>Jane Doe</h3>
        <p>Founder / CEO</p>
    </div>
</div>

<div class="ts1feedback">
    <p class="ts1comment">"It was really great working with Mobi team and I am happy I was
        introdudced
        to this team! It's not easy to work on a website some one else I am greatful that Mobi
        team."</p>
    <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
</div>
</div> */}
for(i=1; i<=4; i++){
    let box = document.createElement("div");
    box.classList.add("ts1center");
    box.innerHTML = `<div class="person">
    <div class="profile">
        <img class="testimonials" src="../images/home/testimonials.jpg" alt="">
        <div class="ts1text">
            <h3>Jane Doe</h3>
            <p>Founder / CEO</p>
        </div>
    </div>
    
    <div class="ts1feedback">
        <p class="ts1comment">"It was really great working with Mobi team and I am happy I was
            introdudced
            to this team! It's not easy to work on a website some one else I am greatful that Mobi
            team."</p>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    </div>`

    container.appendChild(box)

}