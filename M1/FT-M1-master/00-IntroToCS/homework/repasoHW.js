function bD(numB){
    return numB.split("").reverse().reduce(function(acum, vActual, index){
        if (vActual === '1') return acum + Math.pow(2,index)
        else return acum
    }, 0)
}

function dB(numD){
    arrD=[]
    while(numD >= 1){
        arrD.unshift(numD%2)
        numD = (numD - (numD % 2))/2
    }
    return arrD.join("")
}