AOS.init(); 

 $(document).on('ready', function() {

   

    $('body').on('click','.filter, .catg-list li',function(){
        $('.catg-list').toggleClass('open')
    });

   $('.banner-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.banner-slider'
  });

   $('.banner-slider').slick({
     asNavFor: '.banner-text',
       centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: false,
      cssEase: 'linear', 
      prevArrow:'',
    prevArrow:"<button type='button' class='slick-prev pull-left'><img  src='assets/img/prev-icon.png' alt=''> <span class='ms-2'>Prev</span></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'>  <span class='me-2'>Next</span> <img  src='assets/img/next-icon.png' alt=''></button>"
    });
 
 
      $('body').on('click','.menu-btn, .close-popup',function(){
        $('.menu-popup').toggleClass('d-flex');
      }) 
 
      // $('body').on('click','.work-wrapper',function(){
      //   $(this).parent('.work-container').addClass('open');
      // });

      // $('body').on('click','.close-work-popup',function(){
      //   $('.work-container').removeClass('open');
      // });      


      $('body').on('click','.next',function(){
        $('.work-container.open').removeClass('open').next().next('.work-container').addClass('open');
      });
      $('body').on('click','.prev',function(){
        $('.work-container.open').removeClass('open').next().prev('.work-container').addClass('open');
      });


      




  });

  $(window).load(function() {
    var timmer = 2000;
    $('.progress').css("animation", "loading " + timmer + "ms linear");
    setTimeout(function() {
      $('#loader').hide();
      $('#page').removeClass('hidden');
    }, timmer);

  });