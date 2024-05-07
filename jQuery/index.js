// $("h1").css("color", "white");

/*
if we give time to load jQuery, if declare in head section

$(document).ready(function(){
    $("h1").css("color", "white");
});

*/

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));
// console.log($("h1").css("font"));

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// $("h1").hasClass("margin-50"); // true

// $("h1").text("Bye"); // text manipulation

// $("button").text("Don't Click Me");

// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

// $("button").click(function() {
//     $("h1").css("color", "green");
// });

// $("input").keypress(function(event){
//     console.log(event.key);
// });

// $("body").keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });

// $("h1").mouseover(function(){
//     $("h1").css("color","yellow");
// });

// $("h1").click(function(){
//     // $("h1").hide();
//     // $("h1").show();
//     $("h1").toggle();
// });

// $("button").click(function(){
//     // $("h1").fadeOut();
//     // $("h1").fadeIn();
//     $("h1").fadeToggle();
// });

// $("button").click(function(){
//     $("h1").slideUp();
//     $("h1").slideDown();
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

setTimeout(function(){
    $("h1").animate({opacity: 1});
}, 1000);