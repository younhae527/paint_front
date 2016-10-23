function Rolling( opt ){
    var ele = opt.ele;
    var btn = opt.btn;
    var item = ele.find(">li");
    var totalCnt = item.length;
    var dx = item.outerWidth(true);
    var cnt = 0;
    var moveFalg = 0;
    var speed = 700;


    btn.eq(0).on("click", rightMove);
    btn.eq(1).on("click", leftMove);


    function leftMove(e){
        e.preventDefault();
        if( !moveFalg ) {
            moveFalg = 1;

            if( cnt >= totalCnt-5 ){
                moveFalg = 0;
                return;
            }

            cnt++;
            ele.animate(
                {"left" : cnt*dx*-1},
                speed,
                function(){

                    moveFalg = 0;
                }
            );
        }
    }

    function rightMove(e){
        e.preventDefault()

        if( !moveFalg ) {
            moveFalg = 1;

            if( cnt <= 0 ){
                moveFalg = 0;
                return;
            }

            cnt--;
            ele.animate(
                {"left" : cnt*dx*-1},
                speed,
                function(){

                    moveFalg = 0;
                }
            );
        }
    }
}
