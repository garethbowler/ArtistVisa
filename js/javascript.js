$(document).ready(function() {    
    /* Every time the window is scrolled ... */
    var distance = $('#sidebar-left').offset().top - parseInt($('#sidebar-left').css('top')) ,
    $window = $(window);
    var position = $('#sidebar-left');
    var fixed = false;
    $window.scroll(function() {
        if(fixed == false){
            if ( $window.scrollTop() >= distance) {
                $('#sidebar-left').css({
                    // 'top': '20%',
                    'left': '-1%',
                    'position': 'fixed'
                });
            }
            else if( $window.scrollTop() <= distance) {
                $('#sidebar-left').css({
                    
                    'left': '-5%',
                    'position': 'absolute'
                });
            }
           
        } 
        else if(fixed == true){
            if( $window.scrollTop() >= $('#sidebar-left').offset().top - parseInt($('#sidebar-left').css('top'))){
                $('#sidebar-left').css({top: '20%','left': '-1%',
                    'position': 'fixed'});
              
            }
            else if( $window.scrollTop() <= distance){
                $('#sidebar-left').css({top: '20%', 'left': '-5%',
                    'position': 'absolute'});
              
            }
        }
    }); 

    function scrollTo(aid){
        var aTag = $('#charts');
        $('html, body').animate({scrollTop: aTag.offset().top},'slow'); 
    }
     if(window.location.href.indexOf("index.html") != -1){
           setTimeout(scrollTo, 8600);
        }
    // animtation collapse
    
    setTimeout(function () {

        
        if(window.location.href.indexOf("index.html") != -1 ){
            // $('#sidebar-left').css({top:'20%', left: '-5%', color: 'blue'});
            fixed = true;
        } 
        $('#Stage').animate({ height: '0px', opacity: '0', display: 'none'}, 'slow');
    }, 8000);


    if($(window).width()<995){
            $('#Stage').insertAfter('#animation-m');
        }
    $(window).resize(function(){
        if($(window).width()<995){
            $('#Stage').insertAfter('#animation-m');
        }
        else{
            $('#Stage').insertAfter('#animation');
        }
    });
    
   showHide();
});

function showHide(){
       var homeURLWelcome = [
        'index.html#welcome-m',
        'index.html#about-m',
        'index.html#press-m',
        'index.html#contact-m'
    ];
    var homeURLGreen = ['index.html#greenChart-m', 'index.html#EB-1-m'];
    var homeURLPeach = ['index.html#blueChart-m', 'index.html#peachChart-m'];
    var visaURLSteps = [
        '0-1Visa.html#0-1ListChart-m',
        '0-1Visa.html#steps-m', 
        '0-1Visa.html#apply-m',
        '0-1Visa.html#duration-m', 
        '0-1Visa.html#petitioners-m',
        '0-1Visa.html#employers-m',
        '0-1Visa.html#agent-m',
    ];
    var visaURLWho = ['0-1Visa.html#qualify-m'];
    var visaURLPrep = [
        '0-1Visa.html#preparation-m', 
        '0-1Visa.html#letters-m', 
        '0-1Visa.html#translations-m',
        '0-1Visa.html#next-m',
        '0-1Visa.html#processing-m',
        '0-1Visa.html#after-issued-m'
    ];
    var visaURLConsid = [
        '0-1Visa.html#considerations-m',
        '0-1Visa.html#trends-m',
        '0-1Visa.html#eligibility-m',
        '0-1Visa.html#relatives-m',
        '0-1Visa.html#consular-shopping-m',
        '0-1Visa.html#ssn-m',
        '0-1Visa.html#j-1-m',
    ];
    // var visaURLConsid = ['0-1Visa.html#-m',];
    var greenURLOverview = [
        'greenCard.html#overview-m',
        'greenCard.html#i-40-m',
        'greenCard.html#standard-m',
        'greenCard.html#evidence-m',
    ];
    var greenURLDoc = [
        'greenCard.html#partA-m',
        'greenCard.html#partB-m',
        'greenCard.html#partC-m',
    ];
    var greenURLWays = [
        'greenCard.html#USCIS-m',
        'greenCard.html#adjustment-m',
        'greenCard.html#consular-processing-m',
    ];


    function timer(){
        $('#collapseWelcome').collapse('hide');
        $('#collapseProcess').collapse('show');
        $('#collapseTwo').collapse('show');
        $('#collapseOne').collapse('hide');
    }
    // function scrollTo(hash){
    //     location.hash = '#' + hash;
    // }
    $('#0-1ListChart-m').on('click', function(){
        $('#collapseTwo').collapse('show');
        $('#collapseOne').collapse('hide');
    });
     $('#qualify-m').on('click', function(){
        $('#collapseOne').collapse('show');
        $('#collapseTwo').collapse('hide');
    });
    //  $('#EB-1-m').on('click', function(){
    //     $('#collapseGreenCard').collapse('show');
    //     $('#collapseWelcome').collapse('hide');
    //     $('#collapseProcess').collapse('hide');
    // });
    
    // if($(window).width()<995 && window.location.href.indexOf(homeURLGreen) == -1 && window.location.href.indexOf(homeURLPeach) == -1){
    //     setTimeout(timer, 7000);
        
    // }

    if(window.location.href.indexOf(homeURLGreen) != -1 || window.location.href.indexOf(homeURLPeach) != -1){
        $('#collapseProcess').collapse('show');
    }
    // HOME URL CHECK

    else if($.grep(homeURLWelcome, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseWelcome').collapse('show');
        $('#collapseGreenCard').collapse('hide');
        // $('#collapseProcess').collapse('hide');

    } 
    else if($.grep(homeURLGreen, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
         $('#collapseGreenCard').collapse('show');
         $('#collapseWelcome').collapse('hide');
         // $('#collapseProcess').collapse('hide');

         // if($('#collapseGreenCard').collapse('show')) scrollTo(homeURLGreen);

    }
    else if($.grep(homeURLPeach, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseProcess').collapse('show');
        $('#collapseWelcome').collapse('hide');
        // $('#collapseGreenCard').collapse('hide'); 
    }

    // VISA URL CHECK

    else if($.grep(visaURLSteps, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseOne').collapse('show');
        // $('#collapseTwo').collapse('hide');
        // $('#collapseThree').collapse('hide');
    }
    else if($.grep(visaURLWho, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseTwo').collapse('show');
        $('#collapseOne').collapse('hide');
        // $('#collapseThree').collapse('hide');

    }
     else if($.grep(visaURLPrep, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseThree').collapse('show');
        $('#collapseOne').collapse('hide');
        // $('#collapseTwo').collapse('hide');
    }
    else if($.grep(visaURLConsid, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseFour').collapse('show');
        $('#collapseOne').collapse('hide');
        // $('#collapseTwo').collapse('hide');
    }

    // GREEN CARD URL CHECK

    else if($.grep(greenURLOverview, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseOne').collapse('show');
        // $('#collapseTwo').collapse('hide');
        // $('#collapseThree').collapse('hide');

    }
    else if($.grep(greenURLDoc, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseTwo').collapse('show');
        $('#collapseOne').collapse('hide');
        // $('#collapseThree').collapse('hide');
    }
    else if($.grep(greenURLWays, function(str) { return location.href.indexOf(str) > -1; }).length > 0){
        $('#collapseThree').collapse('show');
        $('#collapseOne').collapse('hide');
        // $('#collapseThree').collapse('hide');
    }

    //Charts shows

    // if($('#collapseGreenCard').collapse('show')) scrollTo(homeURLGreen);
    // else if($('#collapseProcess').collapse('show')) scrollTo(homeURLPeach);

    
  
}