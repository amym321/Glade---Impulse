(function($) {
  function moveToolTip() {
    $('.tooltip-container').append($('.wiper-info-wrap').closest('.shopify-section'));
  }
  
  $(document).ready(function() {
    moveToolTip();
  });
})(jQuery);