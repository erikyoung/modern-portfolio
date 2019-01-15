$(document).ready(function() {
        

        $(window).scroll(function() {
            var scrollval = $(this).scrollTop(); 

            $("#app-title-mirror").css('transform', 'translate(0px,' + scrollval/2 + '%)'); 
            $('#spotify-cover').css('transform', 'translate(0px,' + scrollval/2 + '%)');
            $('#app-title').css('transform', 'translate(0px,' + scrollval/2 + '%)');
            $('.intro-message').css('transform', 'translate(0px,' + scrollval/2 + '%)');
        }); 

        $(".hw-top-box").animate({
                scrollTop: $(document).height()
                }, 600);
                return false;
 

  }); 


$(function() {
    window.scrollReveal = new scrollReveal();
  });
