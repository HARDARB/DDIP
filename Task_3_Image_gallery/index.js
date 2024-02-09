// const SCROLLED_STATE_CLASS = "scrolled";

// const scrolled = document.querySelectorAll("scrolled");
// const navbar = document.getElementById("navigationbar");



window.addEventListener('scroll', () => {

    const scroll = document.documentElement.scrollTop;
    var text = document.getElementById("text");
  
    if (scroll > 100) {
      text.classList.add("now");
    } else {
      text.classList.remove("now");
    }
  });


    /**
   * Initiate portfolio lightbox 
   */
    const portfolioLightbox = GLightbox({
        selector: '.image_lightbox'
      });
    



