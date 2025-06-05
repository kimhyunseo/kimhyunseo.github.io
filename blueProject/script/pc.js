gsap.registerPlugin(ScrollTrigger);

//header 영역의 title이 오른쪽에서 왼쪽으로
const $headerMsg = document.querySelectorAll("header .title li");
gsap.from($headerMsg, {
  x: 300,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
});
//화살표가 위에서 아래로 이동, 1번 화살표 실행 후 2번 화살표 실행
gsap.set(".arrow > p", { y: 0 });
const tl = gsap.timeline({ repeat: -1 });
tl.to(".arrow > p", {
  y: 10,
  opacity: 1,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out",
}).to(".arrow > p", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 0.2,
  ease: "power1.out",
});

//h1 태그는 scale 변경 bouce out 처리
gsap.from("header > h1", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  ease: "bounce.out",
});

//about 영역을 가로로 스크롤 되게 처리
const $aboutWrap = document.querySelector("#about > .about-wrap");
const scrollWidth = $aboutWrap.scrollWidth - window.innerWidth;
const horizonScroll = gsap.to($aboutWrap, {
  x: -scrollWidth,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "+=" + scrollWidth,
    pin: true,
    scrub: true,
  },
});

//about info 있는 p태그들은 오른쪽에서 왼쪽으로 이동
const $aboutMsg = document.querySelectorAll("#about .info p");
$aboutMsg.forEach((msg) => {
  gsap.from(msg, {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: msg,
      containerAnimation: horizonScroll, // 필수 가로스크롤일 경우
      start: "left 90%",
      toggleActions: "play rverse play rverse",
    },
  });
});

//keyword 부분 가로로 왔다갔다 실행
const $keywordList = document.querySelectorAll(".keyword > li");
$keywordList.forEach((elem, idx) => {
  const posX = idx === 1 ? 50 : -50;
  gsap.fromTo(
    elem,
    {
      x: posX,
    },
    {
      x: -posX,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "none",
    }
  );
});

// project 이동 gsap 애니
const fromTop = (elem, posY) => {
  gsap.from(elem, {
    opacity: 0,
    duration: 1,
    y: 200,
    scrollTrigger: {
      trigger: elem,
      start: `top ${posY}%`,
      end: "top 40%",
      scrub: true,
    },
  });
};

//project 안에 card item을 계단형으로 애니 처리
const $project = document.querySelectorAll("#projects > .normal");
$project.forEach((article) => {
  const $item = article.querySelectorAll(".item");
  $item.forEach((item, idx) => {
    let posY = 90 - idx * 15;
    fromTop(item, posY);
  });
});

const $practice = document.querySelectorAll("#projects > .practice .item");
$practice.forEach((item, idx) => {
  let posY = 70 - idx * 4;
  fromTop(item, posY);
});

//skills 에서 h2 태그는 커진 상태에서 작아지면서 안 보이게
gsap.to("#skills > h2", {
  scale: 0.5,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    toggleActions: "play reverse play reverse",
  },
});

//skills에서 li들은 작아진 상태에서 커지게 :stagger
const $shape = document.querySelectorAll(".skill-item > li");
gsap.from($shape, {
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
  stagger: 0.2,
  ease: "back.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 20%",
    toggleActions: "play reverse play reverse",
  },
});

// contact 안 글씨
const $footer = document.querySelectorAll(".footer-wrap > *")
gsap.from($footer,{
  opacity: 0,
  scale: 0.2,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 20%",
    toggleActions: "play reverse play reverse",
  }
});

//홈을 누르면 제일 상단으로 올라가기
const $home = document.querySelector("#logo");
$home.addEventListener("click",()=>{
  window.scrollTo({
    top:0
  });
})