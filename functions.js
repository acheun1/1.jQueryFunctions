$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });
    $('#hide button').click(function(){
        $('#hide p').hide();
    });
    $('#show button').click(function(){
        $('#show h2').show("slow");
        $('#hide p').show("slow");
    });  
    $('#toggle button').click(function(){
        $('#toggle h1').toggle();
    });         
    $('#slideDown button').click(function(){
        $('#slideDown h2').slideDown();
    });
    $('#slideup button').click(function(){
        $('#slideup h1').slideUp();
    });
    $('#slidetoggle button').click(function(){
        $('#slidetoggle h1').slideToggle();
    });    
    $('#fadein button').click(function(){
        $('#fadein h1').fadeIn();
    });    
    $('#fadeout button').click(function(){
        $('#fadeout h1').fadeOut();
    });     
    $('#before button').click(function(){
        $('#before').before("<p>21 37 52 44 01 18</p>");
    });     
    $('#after button').click(function(){
        $('#after').after("<p>37 44 01 52 21 18</p>");
    });   
    $('#append button').click(function(){
        $('#append').append("<p>21 18 44 37 52 01 </p>");
    });      
    $('#html button').click(function(){
        $('#html').html("<p>18 37 52 01 21 44 </p>");
    });  
    $('#attr button').click(function(){
        $('#attr').attr('style','background-color: gray');
    });        
    $('#val button').click(function(){
        var text=$(this).text();
        $('input').val(text);
    });            
    $('#text button').click(function(){
        $('#text p').text("Yay!! Done!!.");
    });        
    // put your code for the remaining functions below
});