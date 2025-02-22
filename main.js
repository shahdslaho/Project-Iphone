let img=document.querySelector('.img');
let container=document.querySelector('.container');
function phones(phone){
    img.src =phone;

}
function colors(color){
    container.style.background = color;
}
let img1=document.querySelector('.img1');
let container1=document.querySelector('.container1');
function phones1(phone){
    img1.src =phone;

}
function colors1(color){
    container1.style.background = color;
}
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); 
            const moreContent = this.previousElementSibling; 
            const card = this.closest(".news-item"); 
            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block"; 
                this.textContent = "Show Less"; 
                card.classList.add("expanded"); 
            } else {
                moreContent.style.display = "none"; 
                this.textContent = "Read More"; 
                card.classList.remove("expanded"); 
            }
        });
    });
});
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}

