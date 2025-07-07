(function($) {


// Scripts exécutés quand le document est chargé (sauf images)
$(document).ready(function(){

	$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 200) {
         $('.duck, .cat, .eyes').hide();
     }
     else {
         //$('.duck, .cat, .eyes').show();
    }
});


});


})( jQuery );