/* Part01_Img Hover */
//$(function(){
//    $('.part-container-wrap ul li').click(function() {
//        $('.part-container-wrap ul li').children('.check-hover').css('display','none');
//        $(this).children('.check-hover').css('display','block');
//    });
//});



$(function(){
    $('.btn_change').click(function() {
        $(this).siblings('.paintingColorPalette').css('display','block');
    });
    $('.btn-addColor').click(function() {
        $(this).siblings('.paintingColorPalette').css('display','block');
    });
});

$(function(){
    $('.part-container-wrap .popOpen-btn').click(function() {
        $('#layerSpecific').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .btn_change').click(function() {
        $('#pantoneColorPalette').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .btn-InputAreaPaper').click(function() {
        $('#layerInputFloorPlanFile').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .btn-InputPicture').click(function() {
        $('#layerInputPlacePickture').css('display','block');
        $('#dim').css('display','block');
    });
    $('.part-container-wrap .paintingColorSelectWrap__slideImg .colorPicker').click(function() {
        $('#paintingColorSelectWrap-type01').css('display','block');
        $('#dim').css('display','block');
    });
    $('.btn-areaPictureview').click(function() {
        $('#areaPictureWrap').css('display','block');
        $('#dim').css('display','block');
    });
    $('.btn-sendEmail').click(function() {
        $('#sendEmailWrap').css('display','block');
        $('#dim').css('display','block');
    });
    $('.btn-popupClose').click(function() {
        $('#layerSpecific').css('display','none');
        $('#layerInputFloorPlanFile').css('display','none');
        $('#layerInputPlacePickture').css('display','none');
        $('#paintingColorSelectWrap-type01').css('display','none');
        $('#areaPictureWrap').css('display','none');
        $('#sendEmailWrap').css('display','none');
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
    $('.customSelect01').customSelect();
    $('.customSelect02').customSelect();
});

/* Pretty Checkable */
$(document).ready(function(){
    if( $('input.prettyCheckable01').length == 0  ) return;
    $('input.prettyCheckable01').prettyCheckable({

    });
    $('input.prettyCheckable02').prettyCheckable({

    });
    $('input.prettyCheckable02').parent('.prettycheckbox').addClass('prettycheckbox01');
});



