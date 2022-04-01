'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null
}


function Node(value){
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(info){
  var node = new Node(info)
   if(this.head === null){
    this.head = node
  } else {
    var current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = node;
  }

}

LinkedList.prototype.remove = function(){
  if (this.head === null) return null
  if (this.head.next === null){
    var current = this.head
    this.head = null
    return current.value
  } else {
    var current = this.head
    while(current.next.next != null){
      current = current.next
    }
    var data = current.next.value
    current.next = null
    return data
  }
}

LinkedList.prototype.search = function(arg){
  if(!this.head) return null;

  var busqueda;
  if(typeof arg != 'function'){
    busqueda = function(data){
      return data === arg;
    }
  } else {
    busqueda = arg;
  }

  var current = this.head
  while(current){
    if(busqueda(current.value)){
      return current.value
    } else {
      current = current.next
    }
  }
  return null
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35
  this.contenedores = []
}

HashTable.prototype.hash = function(key){
  var sumaTotal = 0;
  for (let i = 0; i < key.length; i++){
    sumaTotal = sumaTotal + key.charCodeAt(i)
  }
  return sumaTotal % this.numBuckets
}

HashTable.prototype.set = function(key, value){
  if(typeof key != 'string'){
    throw new TypeError('Keep must be strings')
  }
  var posicion = this.hash(key)
 //if (!this.contenedores[posicion]){
 // this.contenedores[posicion] = [] es lo mismo que la linea siguiente
 // }
  this.contenedores[posicion] = this.contenedores[posicion] || []
  this.contenedores[posicion].unshift({key: key, value: value})
}

HashTable.prototype.get = function(key){
  var posicion = this.hash(key)
  var subArray = this.contenedores[posicion]
  for (let i = 0; i < subArray.length; i++){
    if (subArray[i].key === key){
      return subArray[i].value
    }
  }
}

HashTable.prototype.hasKey = function(key){
  if(this.get(key)) return true
  else return false
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
