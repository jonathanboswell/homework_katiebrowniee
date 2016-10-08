$('.readMore1').click(function(){

  $('.readMoreContent1').slideToggle(500, function () {
        $('.readMore1').text(function () {
         
            return $('.readMoreContent1').is(":visible") ? "Read Less" : "Read More";
        });
    });

});

$('.readMore2').click(function(){
    
    $('.readMoreContent2').slideToggle(500, function () {
        $('.readMore2').text(function () {
            return $('.readMoreContent2').is(":visible") ? "Read Less" : "Read More";
        });
    });

});