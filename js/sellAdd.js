function SellAdd(op){
    var wraper = op.wraper;
    var clickFlag = 0;



    function init(){
        var items = wraper.find(op.itme);
        var delectBtn = items.find(op.delectBtn + ">img");
        var plusBtn = items.find(".plus");
        var minusBtn = items.find(".minus");




        delectBtn.off( "click", delectSell ).on( "click", delectSell );
        plusBtn.off("click", plusCnt ).on("click", plusCnt );
        minusBtn.off("click", minusCnt ).on("click", minusCnt );

    }

    function delectSell( e ){
        e.preventDefault();
        if( clickFlag ) return;
        clickFlag = 1;
        var currentBtn = $(e.currentTarget);
        var delectElement = currentBtn.parent().parent().parent();
        delectElement.remove();
        setTimeout(function(){
            clickFlag = 0;
        },100)
    }

    function plusCnt( e ){
        e.preventDefault();
        if( clickFlag ) return;
        clickFlag = 1;

        var currentBtn = $(e.currentTarget);
        var currentCntBox = currentBtn.parent().find(".cntBox");
        var currentCnt = currentCntBox.text()*1;
        currentCnt += 1;

        currentCntBox.text( currentCnt );

        setTimeout(function(){
            clickFlag = 0;
        },100)
    }

    function minusCnt( e ){
        e.preventDefault();
        if( clickFlag ) return;
        clickFlag = 1;

        var currentBtn = $(e.currentTarget);
        var currentCntBox = currentBtn.parent().find(".cntBox");
        var currentCnt = currentCntBox.text()*1;
        currentCnt -= 1;
        if( currentCnt < 0  ){
            currentCnt = 0;
            alert("더이상 내릴수없습니다.");
        }

        currentCntBox.text( currentCnt );

        setTimeout(function(){
            clickFlag = 0;
        },100)
    }


    init();
}