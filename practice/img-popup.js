const imgBtn = document.querySelectorAll(".before>img");
const imgElem = document.querySelector(".after");
const exitBtn = document.querySelector(".exit");
const $body = document.querySelector("body");
const $img = document.querySelector("#change");
const $p = document.querySelector("#txt");
const overlay = document.querySelector(".overlay");

imgElem.style.display = "none";
overlay.style.display = "none";

imgBtn.forEach((img, idx) => {
    img.addEventListener("click",()=>{
        imgElem.style.display = "block";
        overlay.style.display = "block";
        $img.src = img.src;
        $p.textContent = `이미지 ${idx + 1}에 대한 설명입니다.`;
    })
});

exitBtn.addEventListener("click",()=>{
    imgElem.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener("click",()=>{
    imgElem.style.display = "none";
    overlay.style.display = "none";
});