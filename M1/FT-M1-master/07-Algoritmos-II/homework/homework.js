'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var flag = true
  while(flag){
    var flag = false
    for(let i = 0; i < array.length-1; i++){
      let j = i+1
      if(array[j] < array[i]){
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
        var flag = true
      }
    }
  }   
  return array
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    if(array.length === 1) return array
    var half = Math.floor(array.length/2)
    var left = array.slice(0, half)
    var right = array.slice(half)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var izq = 0
  var der = 0
  var mergeArray = []

  while(izq < left.length && der < right.length){
    if(left[izq] < right[der]){
      mergeArray.push(left[izq])
    izq++
    } else {
      mergeArray.push(right[der])
      der++
    }   
  }
  return mergeArray.concat(left.slice(izq)).concat(right.slice(der))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
