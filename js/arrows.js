$(function(){
   $('#arrow_left_home, #arrow_left_chart').mouseenter(function(){
      $(this).attr('src','imgs/arrow_on.png');
    });
    $('#arrow_left_home, #arrow_left_chart').mouseleave(function(){
        $(this).attr('src','imgs/arrow.png');
    });
   
    $('#arrow_right_home, #arrow_right_puzzle').mouseenter(function(){
      $(this).attr('src','imgs/arrow_right_on.png');
    });
    $('#arrow_right_home, #arrow_right_puzzle').mouseleave(function(){
        $(this).attr('src','imgs/arrow_right.png');
    });
    
    $('#arrow_left_home, #arrow_right_home').click(function(){
    window.location = "home.html";
    });
    $('#arrow_right_puzzle').click(function(){
        window.location = "puzzle.html";
    });
    $('#arrow_left_chart').click(function(){
        window.location = "chart.html";
    }); 
});