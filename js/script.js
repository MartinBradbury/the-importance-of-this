

$('p').click(function() {
    // $('p').slideToggle('slow');
    // Above makes all P disapear. to overcome we can use the this key word
    $(this).slideToggle('slow');


});

$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});

$('button').mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});

// $(document).ready(function() { 
//     $(".box").on("click", function() {
//         var classNames = $(this).attr("class").split(" ");
//         $("." + classNames[1]).css("background-color", "red");
//     });
// });

/**
 * when we click on an element that has a 'box'
 * class, this element event will be fired
 * 
 */
$(document).ready(function() { 
    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // if the objet is red then turn it black
            $("." + className).css("background-color", "#000");        
        } else {
            //else turn all elements with box class black
            //and then change the color of all elements
            //with the same clss name as teh clicked element
            //to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});
