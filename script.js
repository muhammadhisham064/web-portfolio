



function animateSection(section, reducedWidth, reducedHeight, start = "top center", end = "bottom top") {
    gsap.to(section, {
        width: reducedWidth,
        height: reducedHeight,
         opacity: 0.5, // Fade out
        // scale:0.5,
        scrollTrigger: {
            trigger: section,
            start: start, // Adjust start point for each section
            end: end, // Adjust end point for each section
            scrub: true,
            markers: false
        }
    });

    
}

// Adjust start/end for smoother animations
animateSection(".one", "50%", "50%", "top top", "bottom top");
animateSection(".two", "60%", "60%", "top top", "bottom top");
animateSection(".three", "70%", "70%", "top top", "bottom top");

animateSection(".four", "70%", "70%", "top top", "bottom top");

animateSection(".five", "70%", "70%", "top top", "bottom top");




function eye_follow(){
    const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (event) => {
    eyes.forEach((eye) => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;

        // Calculate the angle between the eye center and the mouse position
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);

        // Calculate the pupil position
        const pupilRadius = 10; // Adjust to control how far the pupil can move
        const pupilX = Math.cos(angle) * pupilRadius;
        const pupilY = Math.sin(angle) * pupilRadius;

        // Move the pupil
        const pupil = eye.querySelector('.pupil');
        pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
    });
});


}
eye_follow()


let cursor=document.querySelector(".cursor")

window.addEventListener("mousemove",function (dets) {
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY
    })
    gsap.to(cursor,{
        scale:1.4
    })
})


let work=document.querySelector("#lets-work")
work.addEventListener("mouseenter",function () {
    cursor.style.width = '50px';  // Increase size
  cursor.style.height = '50px';
})
work.addEventListener("mouseleave",function () {
    cursor.style.width = '20px';  // Increase size
  cursor.style.height = '20px';
})


window.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
    });
});






//WITH Timelines (cleaner, more versatile)

var tl = gsap.timeline();
tl.from("#hey", {x: -200, duration: 1,opacity:"0"});
tl.from(".eye", {y: 200, duration: 1,opacity:"0"});
tl.from("#contact", {x: 200, duration: 1,opacity:"0"});
tl.from("#stories", {y: 200, duration: 1,opacity:"0"});
tl.from("#developer", {y: 200, duration: 1,opacity:"0"});
tl.from("#lets-work", {y: 200, duration: 1,opacity:"0"});




