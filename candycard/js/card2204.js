$(function(){

    $(".eff_card").hover(function(){
        $(".img_main_card").hide(300)
        setTimeout(function() { 
            $(".hover_card").css({"opacity": "1","visibility": "visible","display": "inline-block"});
        },300);
    }, function(){
        $(".img_main_card").show(300)
        $(".hover_card").hide(300);
    });


    $(".card").hover(function(){
        setTimeout(function() { 
            $(".before_hover").animate({"width": "50%"}, 'fast');
        }, 300);
    }, function(){
        $(".before_hover").animate({"width": "100%"}, 'fast');
    });
});



// .animate({"width": "28%"}, 'slow')
// .css("z-index", "9999")
// .css("z-index", "9")