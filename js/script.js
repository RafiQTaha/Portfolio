$(document).ready(function(){
  $(window).scroll(function(){
      if (this.scrollY > 50) {
          $('.navbar').addClass("sticky");
      }else {
          $('.navbar').removeClass("sticky");
      }
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.navbar .menu-btn i').toggleClass("active");
      $('.navbar .menu li').toggleClass("active");
      $('body').toggleClass("active");
  });

  //TEXT ANIMATION
  var typed = new Typed(".typed",{
    strings:["FrontEnd","BackEnd","FullStack"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  });

  // CAROUSEL script
  $('.carousel').owlCarousel({
      margin:20,
      loop:true,
      autoplayTimeOut:2000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav: false
          },
          600:{
              items:2,
              nav: false
          },
          1000:{
              items:3,
              nav: false
          },
      }
  });

});
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
