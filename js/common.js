/* Part01_Img Hover */
$(function(){
    $('.part-container-wrap ul li').click(function() {
        $('.part-container-wrap ul li').children('.check-hover').css('display','none');
        $(this).children('.check-hover').css('display','block');
    });
});

$(function(){
    $('.part-container-wrap .popOpen-btn').click(function() {
        $('#layerSpecific').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .sendEmail').click(function() {
        $('#layerInputFloorPlanFile').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .btn_change').click(function() {
        $('#pantoneColorPalette').css('display','block');
        $('#dim').css('display','block');
    });
    $('.btn-popupClose').click(function() {
        $('#layerSpecific').css('display','none');
        $('#layerInputFloorPlanFile').css('display','none');
        $('#dim').css('display','none');
    });
    $('.btn-popupCloseW').click(function() {
        $('#pantoneColorPalette').css('display','none');
        $('#dim').css('display','none');
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



