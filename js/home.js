$(function(){
    
    $('#mid img').mouseenter(function(){
        $(this).removeClass().addClass('img2');
    }); 
    $('#mid img').mouseleave(function(){
        $(this).removeClass().addClass('img1');
    });
    
    
    $('#mid img').on('click', function(){
        var id = $(this).attr('id');
        if(id === 'home_img_1'){
            window.location = "chart.html";
        }else if(id === 'home_img_2'){
            window.location = "puzzle.html";
        }else if(id === 'home_img_3'){
            $('#ararea').removeClass().addClass('disarareahide');
            //显示img3
            $('#ararea_img').removeClass().addClass('large_img3').fadeIn(800)
            ;    
        }
    });
    $('#ararea_img').on('click' ,function(){
        $(this).removeClass().addClass('arareahide').fadeOut(800);
        $('#ararea').removeClass().addClass('rareahide');
    });
   
});