const imgBtn = document.querySelectorAll(".before>img:nth-child(1)");
const imgElem = document.querySelector(".after");
const exitBtn = document.querySelector(".exit");
const $body = document.querySelector("body");
const $img = document.querySelector("#change");
const $p = document.querySelector("#txt");
imgElem.style.display = "none";

// imgBtn[i].addEventListener("click",()=>{
//     // $body.style.backgroundColor = "rgba(0,0,0,0.5)";
//     imgElem.style.display = "block";
//     $img.src = "image/img-1.png";
//     $p.textContent = "이미지 1에 대한 설명입니다."
// });

imgBtns.forEach((img, idx) => {
    imgBtn[(idx)].addEventListener("click",()=>{
        imgElem.style.display = "block";
        $img.src = `"image/img-${idx}.png`;
        $p.textContent
    })
});

exitBtn.addEventListener("click",()=>{
    imgElem.style.display = "none";
    // $body.style.backgroundColor = "white";
});
