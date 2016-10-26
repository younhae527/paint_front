$(document).ready(function(){
  var fileTarget01 = $('.filebox01 .upload-hidden');
  var fileTarget02 = $('.filebox02 .upload-hidden');
  var fileTarget03 = $('.filebox03 .upload-hidden');
  var fileTarget04 = $('.filebox04 .upload-hidden');
  var fileTarget05 = $('.filebox05 .upload-hidden');
  var fileTarget06 = $('.filebox06 .upload-hidden');

  fileTarget01.on('change', function(){  // 값이 변경되면
    if(window.FileReader){  // modern browser
      var filename = $(this)[0].files[0].name;
    }
    else {  // old IE
      var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
    }

    // 추출한 파일명 삽입
    $(this).siblings('.upload-name').val(filename);
  });
});



