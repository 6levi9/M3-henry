function counter(){
    var valor = 0
    return function(){
        return ++valor
    }    
}

var newCounter = counter()
var newCounter2 = counter()



function cacheF(cb){
    var cache = {}
    return function(arg){
        if (cache.hasOwnProperty(arg)){
            return cache[arg]
        } else {
            cache[arg] = cb(arg)
            return cache[arg]
        }
    }    
}