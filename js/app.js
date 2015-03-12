(function(){
  var controller = new ScrollMagic(),

      highlightScale = function(){
        var highlight = $('.highlight'),
            scene = new ScrollScene({
          triggerElement: '.highlight', // starting scene, when reaching this element
          offset: -200
        })
        .setTween(TweenMax.staggerTo((highlight), 0, {scale: 1, opacity: 1, ease: Power1.easeOut}, 0.3));
        
        // Add Scene to ScrollMagic Controller
        controller.addScene(scene);
      },

      // bodyFade = function(){
      //   var body = $('body');
      //   TweenMax.to(body, 3, {opacity: 1, ease:Power1.easeOut, delay: .5});
      // },

      carouselFade = function(){
        var carousel = $('.carousel');
        TweenMax.from(carousel, 3, {opacity: 0, ease:Power1.easeOut, delay: 1});
        TweenMax.from(carousel, 1, {scale: .5, ease:Power1.easeOut, delay: 1});
      },

      navigationSlide = function(){
        var menu = $('.menu'),
            overlay = $('.overlay'),
            clicked = false;
        TweenMax.set(overlay, {opacity: 0});
        menu.click(function() {
          if(clicked){
              TweenMax.to(overlay, .5, {left: '100%', opacity: 0, ease: Power1.easeOut});
              TweenMax.to(menu, .3, {opacity: 1, ease: Power1.easeOut});
          }else{
              TweenMax.to(overlay, .5, {left: '0', opacity: 1, ease: Power1.easeOut});
              TweenMax.to(menu, .3, {opacity: 0, ease: Power1.easeOut});
          }
          clicked = !clicked;
        });  
      },

      workHover = function() {
        var background = $('.background'),
            foreground = $('.foreground');
        TweenMax.set(foreground, {opacity: 0, scale: .65});

        $(background).on('mouseenter', foreground, function(){
          $(this).closest(background).find(foreground).showText();
        });
        $(background).on('mouseleave', foreground, function(){
          $(this).closest(background).find(foreground).hideText();
        });

        $.fn.showText = function() {
          TweenMax.to($(this), .5, {opacity: 1});
          TweenMax.to($(this), .5, {scale: 1});
          return this;
        };

        $.fn.hideText = function() {
          TweenMax.to(foreground, .5, {opacity: 0});
          TweenMax.to(foreground, .5, {scale: .65});
          return this;
        };

      },

      rotateIcon = function() {
        var icon = $('.social li');
        icon.mouseenter(function() {
          TweenMax.to($(this), .5, {rotation: 45, scale: 1.1});
        });
        icon.mouseleave(function() {
          TweenMax.to($(this), .5, {rotation: 0, scale: 1});
        });
      },

      animateLogo = function() {
        var logo = $('.logo');
        logo.mouseenter(function() {
          TweenMax.to($(this), .1, {scale: 1.1});
          TweenMax.to($(this).closest('.logo').find('.left-bracket'), .3, {left: "-5px"});
          TweenMax.to($(this).closest('.logo').find('.right-bracket'), .3, {right: "-5px"});
        });
        logo.mouseleave(function() {
          TweenMax.to($(this), .1, {scale: 1});
          TweenMax.to($(this).closest('.logo').find('.left-bracket'), .3, {left: "0"});
          TweenMax.to($(this).closest('.logo').find('.right-bracket'), .3, {right: "0"});
        });
      },

      slideIn = function() {
        var paragraph1 = $('.slide-from-left'),
            paragraph2 = $('.slide-from-right');
        TweenMax.from(paragraph1, 1, {left: '-100px', opacity: 0, ease: Elastic.easeOut, delay: 1});
        TweenMax.from(paragraph2, .75, {right: '-200px', opacity: 0, ease: Power4.easeOut, delay: 1.75});
      }, 

      largeImageFade = function() {
        var image = $('.contact');
        TweenMax.from(image, 2, {opacity: 0, ease: Power1.easeIn, delay: 1.75});
        TweenMax.from(image, 1.25, {bottom: "-100px", delay: 1.75});
      };

  // TweenMax.set($('body'), {opacity: 0});
  TweenMax.set($('.highlight'), {scale: .5, opacity: 0});

  highlightScale();
  // bodyFade();
  carouselFade();
  navigationSlide();
  workHover();
  rotateIcon();
  animateLogo();
  slideIn();
  largeImageFade();
}());