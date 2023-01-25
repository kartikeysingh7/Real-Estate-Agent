$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.menu-btn').addClass('sticky');
        }else{
            $('.navbar').removeClass("sticky");
            $('.menu-btn').removeClass("sticky");

            $('.navbar').removeClass('active');
            $('.navbar .menu').removeClass('active');
            $('.menu-btn i').removeClass('active');
        }
        
        if (this.scrollY > 200){
            $('.scroll-up').addClass('show');
        }else{
            $('.scroll-up').removeClass('show');
        }
    });

    
    var count = 1;
    var url = "";
    
    const phrases = [["Embrace", "Your Passion"], ["Build", "Your Future"], ["Follow", "Your Path"]];
    var text1 = "";
    var text2 = "";

    function updateGallery(){
        if (count == 3){
            count = 1;
        }else{
            count++;
        }

        text1 = phrases[count - 1][1];
        text2 = phrases[count - 1][0];

        url = '../images/' + '0' + String(count) + '-gallery'; 

        $('.gallery').css('background-image', 'url(' + url + '.jpg' + ')');
        $('.gallery-content .text-1').html(text1);
        $('.gallery-content .text-2').html(text2);
    }

    var timeInterval = 4000;
    var currentInterval = setInterval(updateGallery, timeInterval);

    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css('scrollBehaviour', 'auto');
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn, .menu li a').click(function(){
        $('.navbar').toggleClass('active');
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});