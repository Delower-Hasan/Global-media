$(document).ready(function(){
    // mean menu
    $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "575"
    });

    // slider
    $('.slide-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // magnify popup
    $(document).ready(function() {
        $('.play').magnificPopup({type:'iframe'});
      });

})