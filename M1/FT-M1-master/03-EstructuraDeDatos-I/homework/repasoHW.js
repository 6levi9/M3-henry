function facto(n){
    if(n < 0) return console.error("No existe factorial de -n");
    if(n === 0 || n === 1) return 1
    else return n * facto(n-1)
}


function fibo(n){
    if(n === 0) return 0
    if(n === 1) return 1
    if(n > 1) return fibo(n-1) + fibo(n-2)
}


function Cola(){
    this.contCola = []
}

Cola.prototype.agregar = function(dato){
    this.contCola.push(dato)
}

Cola.prototype.retirar = function(){
    if(this.contCola.length === 0) return undefined
    else return this.contCola.shift()
}

Cola.prototype.tamaño = function(){
    return this.contCola.length
}

var cola = new Cola
cola.agregar(5)
console.log(this.contCola)