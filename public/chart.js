

// chart making function //

function makeChart(userData) {

    const NameCap = userData.name.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
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
    
    $("#myChart").remove()
    $("#chart").append(`<canvas id="myChart" height="350" width="350"></canvas`)
 
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: 'cardio',
                data: workoutCardio,
                backgroundColor: '#004080',
                borderWidth: 1
            },{
                label: 'body',
                data: workoutBody,
                backgroundColor: '#0080ff',
                borderWidth: 1
            },{
                label: 'pushups',
                data: workoutSitups,
                backgroundColor: '#66b3ff',
                borderWidth: 1
            },{
                label: 'situps',
                data: workoutPushups,
                backgroundColor: '#b3daff',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: true
                }],
                xAxes: [{
                    stacked: true
                }],
            },
            annotation: {
                drawTime: "afterDatasetsDraw",
                annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: '75',
                    borderColor: 'red',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        content: 'Requied',
                        position: 'right',
                        backgroundColor: 'transparent',
                        fontColor: 'red',
                        yAdjust: -10
                    }
                }],     
            },
            title: {
                display: true,
                text: NameCap,
                fontSize: 18,
                lineHeight: 1.5
            }
        }
    });


}


