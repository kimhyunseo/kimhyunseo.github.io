let current = 1;
IMG_WIDTH = 1800;
let intervalID = null;
const $imgs = document.querySelectorAll(".img-list > .cat");
const $imgList = document.querySelector(".img-list");
const MAX_LEN = $imgs.length;
const $prevBtn = document.querySelector(".prev");
const $nextBtn = document.querySelector(".next");
const $menuList = document.querySelectorAll(".menu-list li");
const $playBtn = document.querySelector(".play");
const $catImg = document.querySelectorAll(".info > img");

//첫번째 이미지 복제 (맨뒤 추가)
const firstClone = $imgs[0].cloneNode(true);
$imgList.appendChild(firstClone);

//마지막 이미지 복제 (맨앞 추가)
const lastClone = $imgs[$imgs.length - 1].cloneNode(true);
$imgList.insertBefore(lastClone, $imgList.firstChild);

//초기 위치
gsap.set(".img-list", { x: -IMG_WIDTH * current });

//고양이 애니메이션
$catImg.forEach((img) => {
  gsap.killTweensOf(img);
  gsap.fromTo(
    img,
    { y: 30 },
    { y: 0, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" }
  );
});

const clickNextBtn = () => {
  current++;
  gsap.to(".img-list", {
    x: -IMG_WIDTH * current,
    duration: 0.5,
    onComplete: () => {
      //마지막에 호출되는 함수
      if (current === MAX_LEN + 1) {
        (current = 1), gsap.set(".img-list", { x: -IMG_WIDTH * current });
      }
      updateMenuClass();
    },
  });
};

// 자동 재생
const autoPlay = () => {
  intervalID = setInterval(() => {
    clickNextBtn();
  }, 4000);
  $playBtn.src = "images/stop.png";
};

// 멈춤
const stopAutoPlay = () => {
  clearInterval(intervalID);
  intervalID = null;
  $playBtn.src = "images/play.png";
};

const toglePlayBtn = () => {
  if (intervalID) {
    stopAutoPlay();
  } else {
    autoPlay();
  }
};

$playBtn.addEventListener("click", toglePlayBtn);
window.addEventListener("DOMContentLoaded", autoPlay);

// 다음 버튼 클릭
$nextBtn.addEventListener("click", () => {
  clickNextBtn();
  updateMenuClass();
  stopAutoPlay();
});

//이전 버튼 클릭
$prevBtn.addEventListener("click", () => {
  current--;
  gsap.to(".img-list", {
    x: -IMG_WIDTH * current,
    duration: 0.5,
    onComplete: () => {
      //마지막에 호출되는 함수
      if (current === 0) {
        (current = MAX_LEN), gsap.set(".img-list", { x: -IMG_WIDTH * current });
      }
      updateMenuClass();
      stopAutoPlay();
    },
  });
});

const updateMenuClass = () => {
  //이전에 부여한 active 클래스 삭제
  $menuList.forEach((elem, i) => {
    elem.classList.remove("active");
    elem.querySelector("img").src = `images/cat${i + 1}.png`;
  });
  //current 위치의 li에 active 클래스 부여
  $menuList[current - 1].classList.add("active");
  $menuList[current - 1].querySelector(
    "img"
  ).src = `images/cat${current}-1.png`;
};

$menuList.forEach((elem) => {
  //mouseEnter
  // elem.dataset.index
  elem.addEventListener("mouseenter", () => {
    current = Number(elem.dataset.index);
    gsap.to(".img-list", {
      x: -IMG_WIDTH * current,
      duration: 0.5,
    });
    updateMenuClass();
    stopAutoPlay();
  });
});
