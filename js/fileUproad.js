$(document).ready(function(){
  var input6 = new InputFile({
        ele : $('.input1'),
        designInputbox : ".inpuBox"
    });

    var input2 = new InputFile({
        ele : $('.input2'),
        designInputbox : ".inpuBox"
    });

    var input3 = new InputFile({
        ele : $('.input3'),
        designInputbox : ".inpuBox"
    });

    var input4 = new InputFile({
        ele : $('.input4'),
        designInputbox : ".inpuBox"
    });

    var input5 = new InputFile({
        ele : $('.input5'),
        designInputbox : ".inpuBox"
    });

    var input6 = new InputFile({
        ele : $('.input6'),
        designInputbox : ".inpuBox"
    });

    function InputFile(opt){
        var ele = opt.ele;
        var input = ele.next();
        var designInputbox = ele.find(opt.designInputbox);


        ele.on("click", fileOn);
        input.on("change", getFileText);


        function fileOn(e){
            input.trigger("click")

        }

        function getFileText(e){
            designInputbox.html(input.val())
        }

    }
});



