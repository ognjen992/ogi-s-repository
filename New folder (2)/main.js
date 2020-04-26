$(document).ready(function(){

    $('.header').css('background','black');

    function zameni () {
        $('.header').css('background','green');
    }

    setTimeout(zameni,2000);

    $('.button').on('click',()=>{
       $('.navbar').css('opacity','1');
    })

})