function tab(){
    var btn = $('.part04-tabButton');
    var tablayer = $('.part04-container-Inner');

    for( var i = 0; i < btn.length; i++ ){
        btn.eq(i).data("idx", i);
    }



    btn.on('click', tabOn );

    function tabOn( e ){
        e.preventDefault();
        var currentBtn = $(e.currentTarget);
        var idx = currentBtn.data('idx');

        btn.removeClass('on');
        currentBtn.addClass('on');

        tablayer.hide();
        tablayer.eq(idx).show();

    }
}