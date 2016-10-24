function SellAdd(op){
    var wraper = op.wraper;
    var clickFlag = 0;
    var addItemBtn = op.additemList.find(">div");

    var itemDomText = '<div class="part04-container-inner__contentBox__takeArea-content"><div class="part04-container-inner__contentBox__takeArea-content-title"></div><div class="part04-container-inner__contentBox__takeArea-content-numbering"><a href="javascript:;" class="minus"><img src="../img/sub/ico_part04_minus.png" alt="" /></a><span class="cntBox">4</span></span><a href="javascript:;" class="plus"><img src="../img/sub/ico_part04_plus.png" alt="" /></a><a href="javascript:;" class="part04-delButton"><img src="../img/sub/btn_part04_delete.gif" alt="삭제" /></a></div></div>';
    var addBtn = op.addBtn;




    function init(){
        var items = wraper.find(op.itme);
        var delectBtn = items.find(op.delectBtn + ">img");
        var plusBtn = items.find(".plus");
        var minusBtn = items.find(".minus");




        delectBtn.off( "click", delectSell ).on( "click", delectSell );
        plusBtn.off("click", plusCnt ).on("click", plusCnt );
        minusBtn.off("click", minusCnt ).on("click", minusCnt );
        addItemBtn.off("click", addItems ).on("click", addItems )
        addBtn.on("click", itemlistOn );

    }

    function itemlistOn(e){
        e.preventDefault();
        console.log( itemlistOn )
        op.additemList.show();
    }

    function addItems( e ){
        e.preventDefault();
        if( clickFlag ) return;
        clickFlag = 1;
        var currentBtn = $(e.currentTarget);
        var roomName = currentBtn.data("room");
        var itemDom = $(itemDomText);

        itemDom.find(".part04-container-inner__contentBox__takeArea-content-title").text(roomName);


        wraper.append(itemDom);

        init();

        op.additemList.hide();
        setTimeout(function(){
            clickFlag = 0;
        },100)
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