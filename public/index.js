$(document).ready(function () {

// selection exercise option //

$('#select-exercise').change(function(event) {
    let exerciseValue = $(this).val()
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

// add workout button // 

const time = moment().format('MMMM Do YYYY')

$('#add-workout-button').on('click', event => {
    let exerciseValue = $('#select-exercise').val()
    switch (exerciseValue) {
        case 'cardio':
            let cardioWorkout = {
                Date: time,
                Type: 'cardio',
                Name: $('#cardio-name').val(),
                Distance: $('#distance').val(),
                Duration: $('#duration').val()
            }
            addToDb(cardioWorkout)
            break;
        case 'resistance':
            let resistanceWorkout = {
                Date: time,
                Type: 'resistance',
                Name: $('#resistance-name').val(),
                Weight: $('#weight').val(),
                Sets: $('#sets').val(),
                Reps: $('#reps').val(),
                Duration: $('#resistance-duration').val()
            }
            addToDb(resistanceWorkout)
            break;
        default:
            console.log('please pick exercise message')

    }
})


// function to add to db //

function addToDb(exerciseData) {
    $.ajax('/', {
        method: 'POST',
        data: exerciseData
    })
    .then(() => {
        console.log('then ajax')
        $('.cardio-form :input').val('')
        $('.resistance-form :input').val('')
    })
    .catch(err => console.log(err))

}

});