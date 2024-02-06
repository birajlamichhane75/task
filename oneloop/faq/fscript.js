let select = document.querySelectorAll(".select");

select.forEach((e, i) => {
    let answer = document.querySelector(`.answer${i + 1}`);
    e.addEventListener("click", () => {
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    });
});

