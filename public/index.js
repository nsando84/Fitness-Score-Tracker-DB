
// chart //
// const ChartsEmbedSDK = window.ChartsEmbedSDK
// const sdk = new ChartsEmbedSDK({
//     baseUrl: 'https://charts.mongodb.com/charts-project-0-obljt'

// })

// const chart = sdk.createChart({
//     chartId: '88ff5b81-92f2-471f-9fe6-4de476bac2ef',
//     width: 650,
//     height: 400,
//     theme: 'dark',
//     autoRefresh: true,
//     refreshInterval: 10
// })

// chart.render(document.getElementById('chart'))

// 

// selection exercise option //

// $('#select-exercise').change(function(event) {
//     let exerciseValue = $(this).val()
//     switch (exerciseValue) {
//         case 'cardio':
//             $('.resistance-form').hide()
//             $('.cardio-form').show()
//             break;
//         case 'resistance':
//             $('.cardio-form').hide()
//             $('.resistance-form').show()
//             break;
//         default:
//             $('.cardio-form').hide()
//             $('.resistance-form').hide()
//             break;
//     }


// });

// add workout button // 

// const time = moment().format('MMMM Do YYYY')

// $('#add-workout-button').on('click', event => {


//     let exerciseValue = $('#select-exercise').val()
//     switch (exerciseValue) {
//         case 'cardio':
//             let cardioWorkout = {
//                 Date: time,
//                 Type: 'cardio',
//                 Name: $('#cardio-name').val(),
//                 Distance: $('#distance').val(),
//                 Duration: $('#duration').val()
//             }
//             addToDb(cardioWorkout)
//             break;
//         case 'resistance':
//             let resistanceWorkout = {
//                 Date: time,
//                 Type: 'resistance',
//                 Name: $('#resistance-name').val(),
//                 Weight: $('#weight').val(),
//                 Sets: $('#sets').val(),
//                 Reps: $('#reps').val(),
//                 Duration: $('#resistance-duration').val()
//             }
//             addToDb(resistanceWorkout)
//             break;
//         default:
//             console.log('please pick exercise message')

//     }
// })

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
    
    console.log(airMan)
    

})









// function to add to db //

// function addToDb(exerciseData) {
//     $.ajax('/', {
//         method: 'POST',
//         data: exerciseData
//     })
//     .then(() => {
//         console.log('then ajax')
//         $('.cardio-form :input').val('')
//         $('.resistance-form :input').val('')
//         chart.refresh()
//         console.log(chart)
//     })
//     .catch(err => console.log(err))

// }








