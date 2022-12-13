$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadein");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      }
    }

     // Show button after 100px
    var showAfter = 900;
    if ( $(this).scrollTop() > showAfter ) { 
      $('#top-btn').fadeIn();
    } else { 
      $('#top-btn').fadeOut();
    }
});

$('#top-btn').click(function(){
  $('html, body').animate({scrollTop: 0}, 100);
});