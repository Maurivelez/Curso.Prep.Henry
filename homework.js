// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    return str;
} devolverString("Mauri")
    // "Return" la string provista: str
  // Tu código:


  function suma(x, y) {
    var num1 = x;
    var nume2 = y;  
    return (x + y);
     // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
  }suma(1,3)

function resta(x, y) {
  return (y - x);
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  return x * y;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}multiplica(3,5)

function divide(x, y) {
  return x/y;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
}divide(15,5)

function sonIguales(x, y) {
  var num1 = x;
  var num2 = y;
  if (x === y) {
    return true;
  } else {return false
  }
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}sonIguales(4,4)

function tienenMismaLongitud(str1, str2) {
   // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var str1 = "nayru";
  var str2 = "agustin";
    if (str1.length === str2.length) {
      return true;
  }
    else { 
      return false;
  }
 }
 tienenMismaLongitud()

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
var num;
  if (num < 90) {
    return true;
  } else {
    return false;
  }
} menosQueNoventa (89)


  

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  if (num > 50) {
    return true;
  } else {
    return false;
  }
} mayorQueCincuenta(89)


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:  const resto = x % y;
  return resto;
}obtenerResto(21,5)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  if (num %2 == 0){
    return true;
  }
		else{
      return false;
    }
    
  }esPar(2)
  

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var num;
  if (num % 2 !== 0){
    return true;
  }
		else{
      return false;
    }
    
  }esImpar(5)



function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
   var elevar =  Math.pow( num , 2);
   return elevar;
   
}elevarAlCuadrado(4)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevar =  Math.pow( num , 3);
   return elevar;
   
}elevarAlCubo(4)


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevado =  Math.pow(num, exponent);
  return num;

}elevar(2,3)


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var red = Math.round(num);
  return (red);
}redondearNumero(3.5)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var red = Math.ceil(num);
  return (red);

}redondearHaciaArriba(2.3)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str = (str + "!")
}agregarSimboloExclamacion("Mauri")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var frase = (nombre + " " + apellido);
  return frase;
}combinarNombres("Soy", "Henry")


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return( `Hola ${nombre}`);
}obtenerSaludo("Martin")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var x = alto;
  var y = ancho;
  return (x*y);
}obtenerAreaRectangulo(2,9)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
