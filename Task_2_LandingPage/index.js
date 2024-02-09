// Gsap for the animmation

var tl = gsap.timeline();

// Navbar
tl.from(".navbar", {
    duration: 1, y: -100, autoAlpha: 1
});


// Text stagger
tl.from(".stagger", {
    duration: 2,
    x: -800, autoAlpha: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "sine.out",
});

// Big_image
tl.from(".big_image", {
    duration: 2, y: 800, autoAlpha: 1
});


// Image_below hero
tl.from(".flying_image", {
    duration: 1, y: 100, opacity: 0
});


