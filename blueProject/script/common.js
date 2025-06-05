// 창 사이즈별 js 가져오기
const checkDevice = ()=>{
    const device = window.innerWidth <= 769 ? "mobile" : "pc";
    const script = document.createElement("script");
    script.src = `./script/${device}.js`
    document.body.appendChild(script);
}
window.addEventListener("load",()=>{
    checkDevice();
    gsap.registerPlugin(ScrollTrigger);

})
// window.addEventListener("resize",checkDevice)