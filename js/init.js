(function($){
  $(function(){

    $('.sidenav').sidenav();

    lightGallery(document.getElementById('light-gallery'), {
      thumbnail: true,
      animateThumb: true,
      showThumbByDefault: false
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
