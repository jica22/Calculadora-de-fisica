const tl = gsap.timeline({defaults: {ease: "power1.out"}});

gsap.registerPlugin(ScrollTrigger);

tl.fromTo("#header1", {opacity: 0}, {opacity: 1, duration: 1, stagger: 1});
tl.to("#header1" , {y:"5%", duration: 1}, "-=1");
tl.to("#p1" , {y:"-10%", duration: 1, stagger: 0.25});
tl.fromTo("#p1", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo("#seta1", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo("#calculadorah1", {opacity: 0}, {scrollTrigger: "#calculadorah1", opacity: 1, duration: 1});
tl.fromTo("#calculadora", {opacity: 0}, {scrollTrigger: "#calculadora", opacity: 1, duration: 1});
tl.to("#calculadora", {scrollTrigger: "#calculadora", y:"-3%", duration: 1}, "-=1");
if (screen.width >= 768) {
    tl.to("#calculadorah1" , {scrollTrigger: "#calculadorah1", x:"15%", duration: 1}, "-=1");
}
tl.fromTo("#pequenoparagrafo", {opacity: 0}, {scrollTrigger: "#pequenoparagrafo", opacity: 1, duration: 1});
tl.to("#pequenoparagrafo", {scrollTrigger: "#pequenoparagrafo", y:"-3%", duration: 1}, "-=1.3");