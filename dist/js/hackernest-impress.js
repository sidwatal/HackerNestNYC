$(document).ready(function() {
  var DEFAULT_DURATION = 5;
  var TRANSITION_DURATION = 1;
  var api = impress();
  var getCurrentStep = function() {
    var num_steps = $('.step').length;
    for (i = 0; i < num_steps; ++i) {
      if ($($('.step').get(i)).hasClass('active')) {
        console.log("found step");
        return i;
      }
    }
    return 0;
  };
  var getCurrentDuration = function() {
    var step = getCurrentStep();
    return ($($('.step').get(step)).attr('data-duration') || DEFAULT_DURATION) * 1000;
  };
  api.init();
  var next = function() {
    api.next();
    var duration = getCurrentDuration();
    console.log("duration: " + duration);
    window.setTimeout(next, duration + TRANSITION_DURATION * 1000);
  };
  window.setTimeout(next, getCurrentDuration());
});
