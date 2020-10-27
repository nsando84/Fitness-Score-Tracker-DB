
// add evaluation button // 

$('#add-workout-button').on('click', event => {
    const year = moment().format('YYYY')
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
        sitUps: sitUps,
        year: year
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



// search for an airman //

$('.search-button-wrapper').on('submit', event => {
    event.preventDefault()
    const airmanName = {
        name: $('.search-button-wrapper :input').val()
    }
    $.ajax('/', {
        method: 'GET',
        data: airmanName
    })
    .then(results => {
        console.log(results)
    })
    .catch(err => console.log(err))


})




