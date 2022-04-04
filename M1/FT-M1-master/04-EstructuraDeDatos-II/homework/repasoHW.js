function Lista(){
    this.head = null
}

function Nodo(dato){
    this.dato = dato
    this.next = null
}

Lista.prototype.agregar = function(info){
   var node = new Nodo(info) 
    if(this.head === null){
        this.head = node
    } else{
        var current = this.head
        if(!current){
        current = current.next
    } else {
        current = node
    }
}
//Si el if no tiene iteracion como un for/while hago lo siguiente
/*
var current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = node;    
*/    
}

Lista.prototype.retirar = function(){
    if(this.head === null) return 0
    if(this.head.next){
        var current = this.head
        this.head = null
        return current
    } else {
        var current = this.head
            while(!current.next.next){
                current = current.next
            }
            var aux = current.next
            current.next = null 
            return aux
        }
    }

Lista.prototype.buscar = function(arg){
    let current = this.head
    while(current){
        if(current.dato === arg) return arg
     else if(typeof arg === 'function') {
        if(arg(current.dato)){
            return current.dato
        }
    }
    current = current.next
 }
 return null
}

//--------------------------------------------------------------------
function HashT(){
    this.numBuckets = 35
    this.buckets = []
}

HashT.prototype.hash = function(key){
    let suma = 0

    for(i = 0; i < key.length; i++){
        suma = suma + key.charCodeAt(i)
    }
    return suma % this.numBuckets
}

HashT.prototype.set = function(key, value){
    if(typeof key != 'string') throw new TypeError ('Keys must be strings')

   let pos = this.hash(key)

    if(!this.buckets[pos]){
        this.buckets[pos] = {}
    }
    this.buckets[pos][key] = value
}

HashT.prototype.get = function(){
    let pos = this.hash(key)
    //En el return pregunto si existe buckets en la posicion pos, y si existe devuelvo lo que esta en
    //la posicion [pos] y en la llave [key], sino devuelco undefined
    return this.buckets[pos] ? this.buckets[pos][key] : undefined
}

HashT.prototype.hasKey = function(key){
    let pos = this.hash(key)
    return this.buckets[pos].hasOwnProperty(key)//True si existe la key
}