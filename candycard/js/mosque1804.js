$(function(){
    $(".btn").click(function() {
        $(".input").toggleClass("click")
        $(".btn").toggleClass("btn_po")
    });
    $(function(){
        $(window).load(function(){
            setTimeout(function() { 
                $(".alert_itms").css({"opacity": "1","visibility": "visible","display": "inline-block"});
            }, 2000);
        });
        $(".cut_icon").click(function(){
            $(".alert_itms").hide(500);//.css({"opacity": "0","visibility": "hidden","display": "none"});
        }); 
    }); 


    $(".eff_card").hover(function(){
        $(".img_main_card").hide(300)
        setTimeout(function() { 
            $(".hover_card").css({"opacity": "1","visibility": "visible","display": "inline-block"});
        },300);
    }, function(){
        $(".img_main_card").show(300)
        $(".hover_card").hide(300);
    });
});