$(document).ready(function () {



// selection for form //

$('#select-exercise').change(function(event) {
    const exerciseValue = $(this).val()
    
    switch (exerciseValue) {
        case 'cardio':
            $('.resistance-form').hide()
            $('.cardio-form').show()
            break;
        case 'resistance':
            $('.cardio-form').hide()
            $('.resistance-form').show()
            break;
        default:
            $('.cardio-form').hide()
            $('.resistance-form').hide()
            break;
    }


});













});