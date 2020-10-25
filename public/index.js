$(document).ready(function () {



// selection for form //

$('#select-exercise').change(function(event) {
    const exerciseValue = $(this).val()
    
    switch (exerciseValue) {
        case 'cardio':
            console.log('cardio');
            break;

        case 'resistance':
            console.log('resistance');
            break;

        default:
            break;
    }


});













});