$(document).ready(function() {
    $('.inicio').fadeIn(2000);
});

$(document).ready(function() {
    function scrollReveal() {
        $('.invisible').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 200) { 
                $(this).addClass('visible');
            }
        });
    }

    scrollReveal(); 
    $(window).scroll(function() {
        scrollReveal();
    });
});

$(document).ready(function(){
    $('.navbar ul li a').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});
