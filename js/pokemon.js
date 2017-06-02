"use strict";
    
    $(document).ready(function(){ 
        
        $("#getpoke").click(function(){
            var url = "http://pokeapi.co/media/img/";
            //console.log("url: "+url);
            for(var i = 1;i<719;i++){
            //console.log("value of i:"+i);
            var result = "<img src='"+url+i+".png' alt='pokemon"+i+"'>"
            //console.log("result ="+result);
            //$("#testarea").html("<img src='"+url+i+".png' alt='pokemon"+i+">");
            $("#testarea").append(result);
            $("#testarea img").css({"height":"70px", "width":"70px"});
            //var img_info = $.get("http://pokeapi.co/media/img/");
            //console.log(img_info);
            }
    });    


}); 


    