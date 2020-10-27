
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
        makeChart(results)
    })
    .catch(err => console.log(err))


})


// chart making function //


function makeChart(userData) {
    const years = []
    const workoutCardio = []
    const workoutBody = []
    const workoutSitups = []
    const workoutPushups = []
    const workoutTotalScore = []
    
    for (const [keyFitness, valueFitness] of Object.entries(userData.fitness)) {
        for (const [keyYears, valueYears] of Object.entries(valueFitness)) {
            years.push(keyYears)
            for (const [key, value] of Object.entries(valueYears)) {
                switch (key) {
                    case 'cardio':
                        workoutCardio.push(value)
                        break;
                    case 'body':
                        workoutBody.push(value)
                        break;
                    case 'pushups':
                        workoutPushups.push(value)
                        break;
                    case 'situps':
                        workoutSitups.push(value)
                        break;
                    default:
                        workoutTotalScore.push(value)
                }
            } 
        }
    }
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: 'cardio',
                data: workoutCardio,
                borderColor: "blue",
                borderWidth: 1
            }
            ,{
                label: 'body',
                data: workoutBody,
                borderColor: "blue",
                borderWidth: 1
            },{
                label: 'pushups',
                data: workoutSitups,
                borderColor: "blue",
                borderWidth: 1
            },{
                label: 'situps',
                data: workoutPushups,
                borderColor: "blue",
                borderWidth: 1
            },{
                label: 'total score',
                data: workoutTotalScore,
                borderColor: "blue",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                }],
                xAxes: {
                    stacked: true
                }
            }
        }
    });









}



