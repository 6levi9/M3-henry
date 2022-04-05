'use strict'

const { prototype } = require("@11ty/eleventy");

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function(dato){
  if(dato > this.value){
    if(this.right) this.right.insert(dato)
    else this.right = new BinarySearchTree(dato)
  } else {
    if(this.left) this.left.insert(dato)
    else this.left = new BinarySearchTree(dato)    
  }
}

BinarySearchTree.prototype.contains = function(dato){
  if(this.value === dato) return true

  if(dato > this.value){
    return !!this.right && this.right.contains(dato)//
  }
  return !!this.left && this.left.contains(dato)
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //Pre-order --> root - izquierda - derecha
  if(order === 'pre-order'){
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
  }

  //In-order --> izquierda - root - derecha
  if(order === 'in-order' || !order){
    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order)
  }

  //Post-order --> izquierda - derecha - root
  if(order === 'post-order'){
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  //preguntar si tengo algo en el array
  if(!arr){
    var arr = []
  }

  if(this.left) arr.push(this.left)
  if(this.right) arr.push(this.right)

  cb(this.value)

  arr.length && arr.shift().breadthFirstForEach(cb, arr)
//-------------  
//    ||
//if(arr.length)  si no tiene nada, corta la ejecucion. 0 es falso y corta la de arriba
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right) return 1  //caso de corte
  if(!this.right) return 1 + this.left.size() //no tiene derecha
  if(!this.left) return 1 + this.right.size() //no tiene izquierda

  return 1 + this.left.size() + this.right.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
