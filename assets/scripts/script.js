$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    document.getElementsByClassName('modal-menu')[0].classList.toggle('-open-modal-menu');
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});






$('.first-sub-list-opener').on('click', function() {
    $('.sub-list2').removeClass('-open-modal-menu-punkt');
    $('.sub-list1').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').removeClass('-overflow-scroll');
});
$('.second-sub-list-opener').on('click', function() {
    $('.sub-list1').removeClass('-open-modal-menu-punkt');
    $('.sub-list2').toggleClass('-open-modal-menu-punkt');
    $('.modal-menu').toggleClass('-overflow-scroll');
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video autoplay muted loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/mp4\"></video>";
    document.getElementById("video_pop").style.display="block";
}

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = "";
}

















function emptyarrow() {
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-about')[0].offsetTop + 350) {
        document.getElementsByClassName('arrowTopDiv')[0].innerHTML = '<img style="transition: 3s;" class="arrowTopScroll animated rollOut" src="../assets/images/arrowTop.svg">';
    }
    if (document.documentElement.scrollTop < document.getElementsByClassName('section-about')[0].offsetTop + 350) {
        document.getElementsByClassName('arrowTopDiv')[0].innerHTML ='<p></p>  ';
    }
}
$('.arrowTopDiv').on('click', function() {
    document.documentElement.scrollTop = 0;
});


$('.next').on('click', function() {
    $('.mobile-background').removeClass('slideInLeft')
    $('.mobile-background').addClass('slideInRight')
});
$('.prev').on('click', function() {
    $('.mobile-background').removeClass('slideInRight')
    $('.mobile-background').addClass('slideInLeft')
});





/*function empty() {
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ОПИСАНИЕ</p>';
    }
    if (document.documentElement.scrollTop < document.getElementsByClassName('section-about')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p></p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-industry')[0].offsetTop - 120) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНДУСТРИИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-intagration')[0].offsetTop - 85) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ИНТЕГРАЦИЯ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-possibilities')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ВОЗМОЖНОСТИ</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-portfolio')[0].offsetTop - 45) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>ПОРТФОЛИО</p>';
    }
    if (document.documentElement.scrollTop > document.getElementsByClassName('section-contacts')[0].offsetTop - 110) {
        document.getElementsByClassName('empty-place')[0].innerHTML = '<p>КОНТАКТЫ</p>';
    }

}*/


