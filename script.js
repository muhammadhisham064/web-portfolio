function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("open");
}

// For eye following
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


let nav= gsap.timeline()
nav.from("nav #logo",{
    y:-30,
    delay:0.1,
    duration:1,
    opacity:0,
    stagger:0.1
})
nav.from("#nav-list  li ",{
    y:-30,
    delay:0.3,
    duration:1,
    opacity:0,
    stagger:0.2
})

const words = ["stories", "journeys", "visions"];
let wordIndex = 0;

function changeWord() {
    document.getElementById("dynamic-word").textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}

// Change every 2 seconds
setInterval(changeWord, 2000);
gsap.to(".about", {
    width: "100%", // Animate width to full
    rotation: 0, // Rotate back to 0 degrees
    delay: 1,
    scrollTrigger: {
        trigger: ".about",
        start: "top top", // Start when .about enters viewport from bottom
        end: "top top", // End when .about reaches the top of the viewport
        scrub: 1,
        markers: false
    }
});


function work_anim() {
    
var tl = gsap.timeline({scrollTrigger:{
    trigger:".work",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".text",{
    top: "-7%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "130%"
},'a')
.to("#card-two",{
    top: "42%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "130%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')
}


work_anim()


gsap.to(".about_text > p", {
    backgroundPositionX: "0%",
    stagger: 0.5,  // Adjusts the delay between each line
    scrollTrigger: {
      trigger: ".about",
      scrub: 3,
      start: "top 50%",
      end: "top 20%",
      markers: false
    },
  });
  

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        markers:false,
        start: "bottom 80%",  // Adjust as needed
        end: "bottom 30%",   // Adjust as needed
        scrub: 3
    }
});

tl2.to(".about ,.work ", {
    backgroundColor: "#F7F7F7"
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        markers:false,
        start: "bottom 80%",  // Adjust as needed
        end: "bottom 30%",   // Adjust as needed
        scrub: 3
    }
});

tl3.to(".about ", {
    backgroundColor: "#222",
    opacity:1
});

// gsap.from(".about_skills ul li", {
//     y: 30,
//     opacity: 0,            // Start from 0 opacity to fade in
//     delay: 0.2,            // Adjusted delay for smoother entry
//     duration: 0.8,         // Reduced duration for faster animation
//     stagger: 0.15,         // Stagger to create smooth sequence
//     scrollTrigger: {
//         trigger: ".about",
//         scroller: "body",
//         markers: true,
//         start: "top 20%",   // Start animation when `.about` section reaches 75% of viewport height
//         end: "top 20%",  // End animation when `.about` is out of viewport
//         scrub: true       // Remove scrub to make the staggered animation smoother
//     }
// });




// gsap.to(".skills", {
//     backgroundColor: " #F7F7F7",
//     scrollTrigger: {
//         trigger: ".skills",
//         scroller: "body",
//         markers:true,
//         start: "top 80%",  // Adjust as needed
//         end: "top 90%",   // Adjust as needed
//         scrub: 3
//     }
// });




// Register GSAP




window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marquee", {
        x: "-100%",
        duration: 5, // Adjust duration as needed
        ease: "linear",
        repeat: -1
      });
    } else {
      gsap.to(".marquee", {
        x: "100%",
        duration: 5,
        ease: "linear",
        repeat: -1
      });
    }
  });




  var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
})


// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#content-wrapper",
//         start: "30% 30%",
//         end: "70% 90%",
//         scrub: true,
//         // markers: true,
//     }
// });

// tl.to("#previewTwo", {
//     rotateX: "0deg",
// })
// .to("#previewThree", {
//     rotateX: "0deg",
// })
// .to(".portfolio-preview", {
//     marginTop: "50vh",
//     scale: "0.8"
// }, 'sync')
// .to(".preview-image", {
//     filter: "grayscale(1)",
// }, 'sync')
// .to(".signature-text", {
//     marginTop: "-100vh",
// }, 'sync')
// .to(".background-overlay", {
//     opacity: 1,
// }, 'sync');
