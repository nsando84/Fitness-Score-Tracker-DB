
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
        updateCheckSearchAirman(exerciseData.airmanName)  
    })
    .catch(err => console.log(err))

}

// search for an airman //

$('.search-button-wrapper').on('submit', event => {
    $('.already-tested-warning').hide()
    event.preventDefault()
    const airmanName = {
        name: $('.search-button-wrapper :input').val()
    }
    $.ajax('/', {
        method: 'GET',
        data: airmanName
    })
    .then(results => {
        $('.search-button-wrapper :input').val('')
        if (typeof results == 'object') {
        $('.no-data-error').hide()
        if (!checkSearchAirman(results)) {  
        addData(results)
        }
        $('.image-logo').hide()
        makeChart(results)
        $('.airman-link').remove()
        loadRecentSearches()
        } else {
            $('.no-data-error').show()
        }
    })
    .catch(err => console.log(err))
})

// load recent searches //

function loadSearches(airmanData) {
    const AirName = airmanData.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    const searchBoxDiv = $('.recent-search-box')
    const nameP = $(`<a class="airman-link mr-2" data-value="${AirName}">${AirName} \</a>`)
    searchBoxDiv.append(nameP) 
}

// search link function //

$('.recent-search-box').on('click', event => {
    $('.already-tested-warning').hide()
    $('.image-logo').hide()
    const nameToFind = $(event.target).data('value')
    queryName(nameToFind)
})

// check if airman exists in search bar //

function checkSearchAirman(results) {
    const resultsName = results.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    const resultsAChecker = $('.recent-search-box').children('a')
    let savedNameForDelete = ''
    const checker = Object.entries(resultsAChecker).some((e,index) => {
        if (e[1] !== 0 && index == 0) savedNameForDelete += e[1].dataset.value
        if (index < resultsAChecker.length) {
            if (e[1].dataset.value == resultsName) {
                return true
            }
        }
    })
    if (!checker && resultsAChecker.length > 4) {
        delFromChart(savedNameForDelete) 
    }
    return checker
}

// check if exists during update //

function updateCheckSearchAirman(results) {
    const resultsName = results.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
    const resultsAChecker = $('.recent-search-box').children('a')
    const checker = Object.entries(resultsAChecker).some((e,index) => {
        if (index < resultsAChecker.length) {
            if (e[1].dataset.value == resultsName) {
                updateChecker(resultsName)
                location.reload()
            }
        }
    }) 
    return checker
}