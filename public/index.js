
// add evaluation button // 

$('#add-workout-button').on('click', event => {
    const airmanName = $('#airman-name').val().toLowerCase()
    const cardioTime = $('#cardio-time-1').val() + $('#cardio-time-2').val()
    const bodyComposition = $('#body-composition').val()
    const pushUps = $('#push-ups').val()
    const sitUps = $('#sit-ups').val()
    if (!airmanName || !cardioTime || !bodyComposition || !pushUps || !sitUps) {
        $('.already-tested-warning').hide()
        $('.all-fields-warning').show()
    } else {
        $('.all-fields-warning').hide()
        $('.already-tested-warning').hide()
        const airMan = {
            airmanName: airmanName,
            cardioTime: cardioTime,
            bodyComposition: bodyComposition,
            pushUps: pushUps,
            sitUps: sitUps,
        }
        addToDb(airMan)
    } 
})

// function to add to db //

function addToDb(exerciseData) {
    $.ajax('/', {
        method: 'POST',
        data: exerciseData
    })
    .then(result => {
        if (result == 'alreadytested') {
            $('.all-fields-warning').hide()
            $('.already-tested-warning').show()
        }
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
        addData(results)
        makeChart(results)
    })
    .catch(err => console.log(err))
})

// load recent searches //

function loadSearches(airmanData) {
    const AirName = airmanData.value.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    const searchBoxDiv = $('.recent-search-box')
    const nameP = $(`<a class="d-inline-block airman-link mr-2" data-value="${AirName}">${AirName}</a>`)
    searchBoxDiv.append(nameP)

}

// search link function //

$('.recent-search-box').on('click', event => {
    console.log(event.target.data('value'))

})