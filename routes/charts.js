const e = require("express")


function maleUnder30(cardioS, bodyS, pushupS, situpS) {
    let score = []
    let cardio = Number(cardioS)
    let body = Number(bodyS)
    let pushup = Number(pushupS)
    let situp = Number(situpS)
    
        if (cardio < 912) {
            score.push(60)
        } else if (cardio > 912 && cardio < 935) {
            score.push(59.7)
        } else if (cardio > 935 && cardio < 946) {
            score.push(59.3)
        } else if (cardio > 946 && cardio < 959) {
            score.push(58.9)
        } else if (cardio > 959 && cardio < 1011) {
            score.push(58.5)
        } else if (cardio > 1011 && cardio < 1024) {
            score.push(57.9)
        } else if (cardio > 1024 && cardio < 1038) {
            score.push(57.3)
        } else if (cardio > 1038 && cardio < 1051) {
            score.push(56.6)
        } else if (cardio > 1051 && cardio < 1107) {
            score.push(55.7)
        } else if (cardio > 1107 && cardio < 1123) {
            score.push(54.8)
        } else if (cardio > 1123 && cardio < 1139) {
            score.push(53.7)
        } else if (cardio > 1139 && cardio < 1157) {
            score.push(52.4)
        } else if (cardio > 1157 && cardio < 1215) {
            score.push(50.9)
        } else if (cardio > 1215 && cardio < 1234) {
            score.push(49.2)
        } else if (cardio > 1234 && cardio < 1254) {
            score.push(47.2)
        } else if (cardio > 1254 && cardio < 1315) {
            score.push(44.9)
        } else if (cardio > 1315 && cardio < 1337) {
            score.push(42.3)
        } else {
            score.push(0)
        }
    

    switch(body) {
        case 35:
            score.push(20)
        break;
        case 35.5:
            score.push(17.6)
        break;
        case 36:
            score.push(17)
        break;
        case 36.5:
            score.push(16.4)
        break;
        case 37:
            score.push(15.8)
        break;
        case 37.5:
            score.push(15.1)
        break;
        case 38:
            score.push(14.4)
        break;
        case 38.5:
            score.push(13.5)
        break;
        case 39:
            score.push(12.6)
        break;
        default:
            score.push(0)
    }

    if (pushup > 62) {
        score.push(10)
    } else {
        switch(pushup) {
            case 62:
                score.push(9.5)
            break;
            case 61:
                score.push(9.4)
            break;
            case 60:
                score.push(9.3)
            break;
            case 59:
                score.push(9.2)
            break;
            case 58:
                score.push(9.1)
            break;
            case 57:
                score.push(9)
            break;
            case 56:
                score.push(8.9)
            break;
            case 55:
                score.push(8.8)
            break;
            case 54:
                score.push(8.8)
            break;
            case 53:
                score.push(8.7)
            break;
            case 52:
                score.push(8.6)
            break;
            case 51:
                score.push(8.5)
            break;
            case 50:
                score.push(8.4)
            break;
            case 49:
                score.push(8.3)
            break;
            case 48:
                score.push(8.1)
            break;
            case 47:
                score.push(8)
            break;
            case 46:
                score.push(7.8)
            break;
            case 45:
                score.push(7.7)
            break;
            case 44:
                score.push(7.5)
            break;
            case 43:
                score.push(7.3)
            break;
            case 42:
                score.push(7.2)
            break;
            case 41:
                score.push(7)
            break;
            case 40:
                score.push(6.8)
            break;
            case 39:
                score.push(6.5)
            break;
            case 38:
                score.push(6.3)
            break;
            case 37:
                score.push(6)
            break;
            case 36:
                score.push(5.8)
            break;
            case 35:
                score.push(5.5)
            break;
            case 34:
                score.push(5.3)
            break;
            case 33:
                score.push(5)
            break;
            default: 
                score.push(0)
        } 
    } 

    if (situp > 55) {
        score.push(10)
    } else {
        switch(situp) {
            case 55:
                score.push(9.5)
            break;
            case 54:
                score.push(9.4)
            break;
            case 53:
                score.push(9.2)
            break;
            case 52:
                score.push(9)
            break;
            case 51:
                score.push(8.8)
            break;
            case 50:
                score.push(8.7)
            break;
            case 49:
                score.push(8.5)
            break;
            case 48:
                score.push(8.3)
            break;
            case 47:
                score.push(8)
            break;
            case 46:
                score.push(7.5)
            break;
            case 45:
                score.push(7)
            break;
            case 44:
                score.push(6.5)
            break;
            case 43:
                score.push(6.3)
            break;
            case 42:
                score.push(6)
            break;
            default:
                score.push(0)
        }
    }
    return score
}

module.exports = maleUnder30