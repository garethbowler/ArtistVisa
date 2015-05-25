$(document).ready(function() {    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){ 
        /* Check the location of each desired element */
        $('#sidebar-left').each( function(i){         
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();        
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).removeClass(".absolute");   
                $(this).addClass("fixed");            
            }      
        }); 
    }); 
    function timer(){
        $('#collapseWelcome').collapse('hide');
        $('#collapseProcess').collapse('show');
    }
    if($(window).width()>765){
        setTimeout(timer, 7000);
    }
    else ($('#collapseWelcome').collapse('show'));
});

