$(".mySlide").animate({"width":"100%"},500);
$(".mySlide").animate({"height":"100vh"},1000,function(){
    $('.mySlide').slideDown(1000,function(){
        $('.row1-item2').slideDown(1000,function(){
            $(".row1-item1").show(1000,function(){
                $(".row1-item4").slideDown(1000,function(){
                    $(".row1-item3").show(1000,function(){
                        $(".colum1-item2").show(1000,function(){
                            $(".colum1-item1").slideDown(1000,function(){
                                $(".row3-item2").slideDown(1000,function(){
                                    $(".row3-item1").show(1000,function(){
                                        $(".row3-item4").slideDown(1000,function(){
                                            $(".row3-item3").show(1000,function(){
                                                $(".colum3-item2").fadeIn(1000,function(){
                                                    $(".colum3-item1").slideDown(1000,function(){
                                                        $(".colum2-main").slideDown(1000)
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
});


$(".itemImge").click(function(e){
let itemSrc= $(this).attr("src");
$("#mainImage").attr("src",itemSrc);
})
