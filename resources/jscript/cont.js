    $(document).ready(function() {
        
           /*----------------------------*/
/* FOR STICKY NAV */
/*---------------------------*/

    $(".js--sectionfeatures").waypoint(function(direction) {
   if (direction == "down") {
       $("nav").addClass("sticky");
   } else {
       $("nav").removeClass("sticky");
   }
   }, {
       offset: "60px;"
});
        
           /*----------------------------*/
/*Naviga Scroll */
/*---------------------------*/

      // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

        slideshow = new Slideshow({
                        id: 'slideshow_thumbs',
                        loop: false, //required for multiple slides
                        multiple_slides: true,
                        visibleSlidesCount: 4,
                        slide_margin_right: 3,	//unit is percent
                        align_buttons: function() {
                            //vertical align next/prev buttons with images in slideshow
                            var img_h = $('#slideshow_thumbs .slide img').height();
                            var btn_h = $('#slideshow_thumbs .next').outerHeight();
                            $('#slideshow_thumbs').find('.prev, .next').css('top', (img_h-btn_h)/2);
                        }
                    });



    /*MAPS*/
       var map = new GMaps({
      div: '.map',
      lat: 9.1055943,
      lng: 7.4082353
    });
        map.addMarker({
      lat: 9.1055943,
      lng: 7.4082353,
      title: 'MobileHouseHQ',
     infoWindow: {
      content: '<p>Our Hq</p>'
    }
    });

    });
