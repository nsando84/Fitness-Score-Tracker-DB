
// add evaluation button // 

$('#add-workout-button').on('click', event => {
    const airmanName = $('#airman-name').val()
    const cardioTime = $('#cardio-time-1').val() + $('#cardio-time-2').val()
    const bodyComposition = $('#body-composition').val()
    const pushUps = $('#push-ups').val()
    const sitUps = $('#sit-ups').val()

    const airMan = {
        airmanName: airmanName,
        cardioTime: cardioTime,
        bodyComposition: bodyComposition,
        pushUps: pushUps,
        sitUps: sitUps
    }
    addToDb(airMan)

})


// function to add to db //

function addToDb(exerciseData) {
    $.ajax('/', {
        method: 'POST',
        data: exerciseData
    })
    .then(() => {
        console.log('then ajax')
        $('.fitness-form :input').val('')
    })
    .catch(err => console.log(err))

}








