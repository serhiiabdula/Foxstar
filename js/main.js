/*
* isotope init begin
*/
if ($('.grid').length){
    var $grid = $('.grid').isotope({
        // options
    });
}

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
// hash of functions that match data-filter values
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        // use $(this) to get item element
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        var $button = $( event.currentTarget );
        $button.addClass('is-checked');
    });
});
/*
* isotope init end
*/

var html = '<ol class="carousel-indicators">';
for (var i = 0; i < $('#recipeCarousel .carousel-item').length; i++) {
    if(i===0){
        html += '<li class="item' + i + ' active" data-number="' + i + '"></li>';
    }else{
        html += '<li class="item' + i + '" data-number="' + i + '"></li>';
    }
}
html += '</ol>';
$("#recipeCarousel").append(html);

if($('#recipeCarousel').length){
    $('#recipeCarousel').carousel({
        interval: 10000
    })
}


$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});




$("#recipeCarousel .carousel-indicators li").on('click', function(){
    $("#recipeCarousel").carousel($(this).data('number'));
});

if ($(".js-range-slider").length){
    $(".js-range-slider").ionRangeSlider();
}

//console.log(html);

// adding input and select for forms
if ($('input, select').length){
    $('input, select').styler();
}
