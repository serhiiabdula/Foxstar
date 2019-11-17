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

if ($(".js-range-slider").length){
    $(".js-range-slider").ionRangeSlider();
}

//console.log(html);

//tabs square and list
$('.list').on('click', function(){
    $('.list').parents('.section').addClass('list-view');
});
$('.square').on('click', function(){
    $('.square').parents('.section').removeClass('list-view');
});

// adding input and select for forms
if ($('select').length) {
    $('input, select').styler({
        filePlaceholder: 'No File Chosen',
        fileBrowse: 'Choose File'
    });
}
