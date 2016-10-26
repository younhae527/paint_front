function imgTypeCheck(){
    var btn = $('.img-type-check');
    var countCheckBtn = $('.next-btn');
    var flag = 0;

    btn.off("click" , layerCheck ).on("click" , layerCheck );
    countCheckBtn.off("click" , countCheck ).on("click" , countCheck );

    function layerCheck( e ) {
        e.preventDefault();
        var currentBtn = $(e.currentTarget);

        if( currentBtn.hasClass("on") ){
            hideLayer();
        }else{
            showLayer();
        }

        function showLayer(){
            if( flag ) return;
            flag = 1;
            currentBtn.addClass("on");
            currentBtn.find(".check-hover").show();


            setTimeout(function(){
                flag = 0;
            },100);
        }

        function hideLayer(){
            if( flag ) return;
            flag = 1;
            currentBtn.removeClass("on");
            currentBtn.find(".check-hover").hide();

            setTimeout(function(){
                flag = 0;
            },100);
        }
    }

    function countCheck(){
        var cnt = 0;
        for( var i = 0; i < btn.length; i++ ){
            if( btn.eq(i).hasClass("on") ){
                cnt++;
            }
        }

        if( cnt < 7 ) {
            alert("��Ȯ�� �м��� ���� �ּ� 7�� �̻��� �̹����� �������ּ���");
        }
    }
}