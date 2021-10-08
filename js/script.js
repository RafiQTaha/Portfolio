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
