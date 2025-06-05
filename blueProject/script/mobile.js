//header

gsap.from("nav > .title > *", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

// 위에서 아래로 이동 1번 화살표 실행 2번 화살표 실행
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

//aboutme에 들어가는 텍스트
// 사이즈 작았다가 해당 항목이 보이면 커지면서 보이도록
const $aboutMsg = document.querySelectorAll(".about-wrap > .info > p");
$aboutMsg.forEach((msg) => {
  gsap.from(msg, {
    opacity: 0,
    scale: 0.4,
    duration: 0.5,
    y: -20,
    scrollTrigger: {
      trigger: msg,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  });
});

//keyword 부분 가로로 왔다갔다 실행
const $keywordList = document.querySelectorAll(".keyword > li");
$keywordList.forEach((elem, idx) => {
  const posX = idx === 1 ? 20 : -20;
  gsap.fromTo(
    elem,
    {
      x: posX,
    },
    {
      x: -posX,
      duration: 1,
      repeatDelay: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "none",
    }
  );
});
// const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
// tl2.to($keywordList, {
//   x: (i) => (i === 1 ? 20 : -20),
//   duration: 1.5,
//   ease: "sine.inOut",
//   stagger: { each: 0.2 },
// });

//project 영역의 .item들은 아래에서 올라오면서 보이도록
const $project = document.querySelectorAll("#projects > .project-wrap > ul");
$project.forEach((article) => {
  const $item = article.querySelectorAll(".item");
  $item.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      y: 100,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
  });
});
// const $project = document.querySelectorAll("#projects > .project-wrap > ul > li");
// $project.forEach((article) => {
//   const $item = article.querySelectorAll(".item");
//   gsap.from(elem, {
//     opacity: 0,
//     duration: 0.5,
//     y: 20,
//     scrollTrigger: {
//       trigger: elem,
//       start: "top 50%",
//       markers: true,
//       toggleActions: "play reverse play reverse",
//     },
//   });
// });

// skill
const $skillItem = document.querySelectorAll(".skill-item > li");
gsap.from($skillItem, {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "bounce.inOut",
  scrollTrigger: {
    trigger: ".skill-item",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  },
});
// $skillItem.forEach((item)=>{
// gsap.from(item,{
//   scale: 0,
//   opacity:0,
//   duration: 0,
//   stagger: 0.2,
//   ease:"bounce.out",
//   scrollTrigger: {
//       trigger: ".skill-item",
//       start: "top 50%",
//       markers: true,
//       toggleActions: "play reverse play reverse",
//   }
// });
// })

//footer
gsap.fromTo(
  "footer",
  {
    backgroundColor: "#2957E2",
  },
  {
    backgroundColor: "#eeeeee",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 60%",
      end: "bottom bottom",
      scrub: true,
      markers: true,
      toggleActions: "play none none none",
    },
  }
);

// contact
// const $link = document.querySelectorAll(".footer-wrap >.links >li");
// $link.forEach((elem, idx)=>{
//   const wb = idx === 1 ? "#2957E2" :  "#eeeeee";
//   const bw = idx === 1 ? "#eeeeee" :  "#2957E2";
//   gsap.fromTo(elem,{
//     backgroundColor: wb,
//     color:bw
//   },{
//     backgroundColor: bw,
//     color:wb,
//     yoyo: true,
//     duration: 1,
//     repeat: -1,
//     repeatDelay: 3,
//   }
// )
// });
const $link1 = document.querySelector("footer .links > li:nth-child(1)");
const $link2 = document.querySelector("footer .links > li:nth-child(2)");

// gsap.to($link1,{
//   backgroundColor: "#eeeeee",
//   color: "#2957E2",
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   repeatDelay: 3,
//   ease: "power1.out",
//   scrollTrigger: {
//     trigger:"footer",
//     start: "top 50%",
//     toggleActions: "play none none none"
//   }
// });
// gsap.fromTo($link2,{
//   backgroundColor: "#eeeeee",
//   color: "#2957E2",
// },{
//   backgroundColor: "#2957E2",
//   color: "#eeeeee",
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   repeatDelay: 3,
//   ease: "power1.out",
//   scrollTrigger: {
//     trigger:"footer",
//     start: "top 50%",
//     toggleActions: "play none none none"
//   }
// });

gsap.fromTo(".links > li",{
  backgroundColor: (i) => (i === 0 ? "#eeeeee" : "#2957E2"),
  color: (i) => (i === 0 ? "#2957E2" : "#eeeeee"),
},
  {
    backgroundColor: (i) => (i === 1 ? "#eeeeee" : "#2957E2"),
    color: (i) => (i === 1 ? "#2957E2" : "#eeeeee"),
    duration: 1,
    repeat: -1,
    yoyo: true,
    repeatDelay: 3,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "footer",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  }
);
