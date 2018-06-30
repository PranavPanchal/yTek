$(function(){
  $("a").on('click', function() {
    if (this.hash !== "") {
	
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-60
      }, 600, function(){
   
        window.location.hash = hash;
      });
    } 
	});

});