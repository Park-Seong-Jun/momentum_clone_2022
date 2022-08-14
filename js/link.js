const bookMark = document.querySelector("#book-mark > span");
const linksDetail =document.querySelector(".links");

function detailView(){
    linksDetail.classList.toggle("hidden");
};

bookMark.addEventListener("click",detailView);