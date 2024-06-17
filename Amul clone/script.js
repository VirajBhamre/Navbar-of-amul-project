let centerCircle=document.querySelector("#centrecircle");
let navLinks=document.querySelector(".nav-links");
let amulImage=document.querySelector("#amulImage");
let navBar=document.querySelector("#navbar");

let centerCircleVal=0;


navBar.onmouseenter = ()=>{
    gsap.to("#amulImage",{
        opacity:0,
        duration:1,
         ease: "slow",
    })
    gsap.to(".nav-links",{
        y:220,
        duration:1,
    })
};

navBar.onmouseleave = function(){
    gsap.to("#amulImage",{
        opacity:100,
         ease: "back.out(1.7)",
    })
    gsap.to(".nav-links",{
        y:-220,
        duration:1,
    })
};
