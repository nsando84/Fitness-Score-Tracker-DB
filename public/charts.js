

function maleUnder30(cardio, body, pushup, situp) {
    let score = []

    switch(cardio) {
        case cardio < 912:
            score.push(60)
        break;
        case cardio > 912 && cardio < 935:
            score.push(59.7)
        break;
        case cardio > 935 && cardio < 946:
            score.push(59.3)
        break;
        case cardio > 946 && cardio < 959:
            score.push(58.9)
        break;
        case cardio > 959 && cardio < 1011:
            score.push(58.5)
        break;
        case cardio > 1011 && cardio < 1024:
            score.push(57.9)
        break;
        case cardio > 1024 && cardio < 1038:
            score.push(57.3)
        break;
        case cardio > 1038 && cardio < 1051:
            score.push(56.6)
        break;
        case cardio > 1051 && cardio < 1107:
            score.push(55.7)
        break;
        case cardio > 1107 && cardio < 1123:
            score.push(54.8)
        break;
        case cardio > 1123 && cardio < 1139:
            score.push(53.7)
        break;
        case cardio > 1139 && cardio < 1157:
            score.push(52.4)
        break;
        case cardio > 1157 && cardio < 1215:
            score.push(50.9)
        break;
        case cardio > 1215 && cardio < 1234:
            score.push(49.2)
        break;      
        case cardio > 1234 && cardio < 1254:
            score.push(47.2)
        break;
        case cardio > 1254 && cardio < 1315:
            score.push(44.9)
        break;
        case cardio > 1315 && cardio < 1337:
            score.push(42.3)
        default:
            score.push(0)
    }


    switch(body) {
        case body <= 35:
            score.push(20)
        break;
        case body == 35.5:
            score.push(17.6)
        break;
        case body == 36:
            score.push(17)
        break;
        case body == 36.5:
            score.push(16.4)
        break;
        case body == 37:
            score.push(15.8)
        break;
        case body == 37.5:
            score.push(15.1)
        break;
        case body == 38:
            score.push(14.4)
        break;
        case body == 38.5:
            score.push(13.5)
        break;
        case body == 39:
            score.push(12.6)
        break;
        default:
            score.push(0)
    }



    switch(pushup) {
        case pushup > 62:
            score.push(10)
        break;
        case pushup == 62:
            score.push(9.5)
        break;
        case pushup == 61:
            score.push(9.4)
        break;
        case pushup == 60:
            score.push(9.3)
        break;
        case pushup == 59:
            score.push(9.2)
        break;
        case pushup == 58:
            score.push(9.1)
        break;
        case pushup == 57:
            score.push(9)
        break;
        case pushup == 56:
            score.push(8.9)
        break;
        case pushup == 55 || pushup == 54:
            score.push(8.8)
        break;
        case pushup == 53:
            score.push(8.7)
        break;
        case pushup == 52:
            score.push(8.6)
        break;
        case pushup == 51:
            score.push(8.5)
        break;
        case pushup == 50:
            score.push(8.4)
        break;
        case pushup == 49:
            score.push(8.3)
        break;
        case pushup == 48:
            score.push(8.1)
        break;
        case pushup == 47:
            score.push(8)
        break;
        case pushup == 46:
            score.push(7.8)
        break;
        case pushup == 45:
            score.push(7.7)
        break;
        case pushup == 44:
            score.push(7.5)
        break;
        case pushup == 43:
            score.push(7.3)
        break;
        case pushup == 42:
            score.push(7.2)
        break;
        case pushup == 41:
            score.push(7)
        break;
        case pushup == 40:
            score.push(6.8)
        break;
        case pushup == 39:
            score.push(6.5)
        break;
        case pushup == 38:
            score.push(6.3)
        break;
        case pushup == 37:
            score.push(6)
        break;
        case pushup == 36:
            score.push(5.8)
        break;
        case pushup == 35:
            score.push(5.5)
        break;
        case pushup == 34:
            score.push(5.3)
        break;
        case pushup == 33:
            score.push(5)
        break;
        default: 
            score.push(0)
    }


    switch(situp) {
        case situp > 55:
            score.push(10)
        break;
        case situp == 55:
            score.push(9.5)
        break;
        case situp == 54:
            score.push(9.4)
        break;
        case situp == 53:
            score.push(9.2)
        break;
        case situp == 52:
            score.push(9)
        break;
        case situp == 51:
            score.push(8.8)
        break;
        case situp == 50:
            score.push(8.7)
        break;
        case situp == 49:
            score.push(8.5)
        break;
        case situp == 48:
            score.push(8.3)
        break;
        case situp == 47:
            score.push(8)
        break;
        case situp == 46:
            score.push(7.5)
        break;
        case situp == 45:
            score.push(7)
        break;
        case situp == 44:
            score.push(6.5)
        break;
        case situp == 43:
            score.push(6.3)
        break;
        case situp == 42:
            score.push(6)
        break;
        default:
            score.push(0)
    }
}