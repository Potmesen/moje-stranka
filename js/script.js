(function($) {

  var icon = $('.social-icon'),
  siteHeight = { top: $('body').height() },
  speed = 2000;

icon.on('mouseenter', function() {
$(this).animate( siteHeight, speed).fadeOut(2000)
});

})(jQuery);

