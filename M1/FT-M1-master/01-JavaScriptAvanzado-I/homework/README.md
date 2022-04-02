
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10; 
  console.log(x);//10
  console.log(a);//8
  var f = function(a, b, c) {
    b = a; //b = 8
    console.log(b);//8
    b = c; //b=10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1
```

```javascript
console.log(bar);//und
console.log(baz);//err
foo();//'hola'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//franco
```

```javascript
var instructor = "Tony";
console.log(instructor);//tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//franco
   }
})();
console.log(instructor);//tony
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//reverse flash
}
console.log(instructor);//The Flash
console.log(pm);//franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//NaN
7 / 0//inf
{}[0]//und
parseInt("09")//09
5 && 2//2 && Se queda con el segundo valor si los dos son verdaderos, sino se queda con 0
2 && 5//5
5 || 0//5 || Se queda con el True o si son los dos true se queda con el primero
0 || 5//5
[3]+[3]-[10]//23 A los dos primers arrglos los hace strings y concatena "33"
            //   Despues al "33" lo hace num para hacer la resta
3>2>1//False 3>2 = true; 2>1 = True; True > True = False
[] == ![]//True reeplaza tipos de datos hasta que son 00 y da true. Solo en este caso porque es '=='S
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//und
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   //aca estaria declarando var snak por hoisting; por eso es undefined
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;//und hoisting a snack ya que no se declara
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//AdeRosa

var test = obj.prop.getFullname;//a test le asigno la funcion

console.log(test());//undefined en Node, Juan Perez en la consola del navegador
                    //Juan Perez si declaro en el contexto global 'global.fullname = 'Juan Perez';' en Node
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//1
   setTimeout(function() { console.log(2); }, 1000);//4
   setTimeout(function() { console.log(3); }, 0);//3
   console.log(4);//2
}
/*
1
4
3
2
*/

printing();
```
