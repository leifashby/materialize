// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // jQuery global can be hidden, but it's in the window object. Check to prevent overloading.
  if (typeof(window.jQuery) !== 'undefined') {
    jQuery = $ = window.jQuery;
  }
  // Check if require is a defined function.
  else if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
