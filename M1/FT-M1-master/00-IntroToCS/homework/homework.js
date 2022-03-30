'use strict'

function BinarioADecimal(num) {
  // tu codigo aca  

  //100 -> 4
  //101 -> 5
  /*
  var decimal = 0
  for(let i = 0; i < num.length; i++){
    decimal = decimal + num[i] * 2 ** (num.length - 1 - i)
  }
  return decimal
  */
return num.split("").reverse().reduce(function(acum, elem, i){
  if (elem === '1'){
    return acum + Math.pow(2, i)
  } else return acum
}, 0)
}

function DecimalABinario(num) {
  // tu codigo aca

  // 7->111
  /*
  num = 7 / 2 = 3 / 2 = 1
          1       1
  */
  var res = []
  while (num >= 1){
    res.unshift(num % 2)
    num = (num - (num % 2)) / 2 //7%2=1  7-1=6  6/2=3
  }
  return res.join('')
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}