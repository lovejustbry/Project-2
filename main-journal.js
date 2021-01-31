//Toggle on Journal Entry//



// $(document).ready(function() {
//     $('#entry').on('click', function() {
//         $('.show-description').toggleClass('.show-description');
//     });
// });


// $('#entry').hide();

$(document).ready(function() {
    $('#entry').on('click', function() {
        $('.show-description').toggle();
    });
});