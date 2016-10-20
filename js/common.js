/* Part01_Img Hover */
$(function(){
    $('.part-container-wrap ul li').mouseenter(function() {
        $(this).children('div').css('display','block');
    });
    $('.part-container-wrap ul li').mouseleave(function() {
        $(this).children('div').css('display','none');
    });
});

/* 커스텀셀렉트박스 */
$(document).ready(function(){
    $('.customSelect').customSelect();
});

/* Pretty Checkable */
$(document).ready(function(){
    $('input.prettyCheckable01').prettyCheckable({

    });
    $('input.prettyCheckable02').prettyCheckable({

    });
    $('input.prettyCheckable02').parent('.prettycheckbox').addClass('prettycheckbox01');
});



