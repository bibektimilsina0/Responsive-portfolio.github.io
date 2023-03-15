$(document).ready(function () {

    $('#icon').click(function () {
        $('.navbar .menu').toggleClass("active");
        console.log("bid")
    });
    $('#l1 ,#l3,#l4').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    $('#l2 , #l5').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    
});