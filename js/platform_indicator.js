(function ($) {
  Drupal.behaviors.platformIndicator = {
    attach: function (context, settings) {

      var platformEnvironment = Drupal.settings.environment;
      $('body').prepend('<div id="platform-indicator">' + platformEnvironment + '</div>');

    }
  }
})(jQuery);
