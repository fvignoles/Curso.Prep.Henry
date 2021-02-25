// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz = [];
  for (var propiedad in objeto) {
      matriz.push([propiedad,objeto[propiedad]]);
  }  
  return(matriz);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objeto = {};
  
  for (i=0; i < string.length; i++) {
    cantVeces = 0
    for (a=0; a < string.length + 1; a++) {
      if(string[a] === string[i]) {
        cantVeces = cantVeces + 1;
      }
    }
    objeto[string[i]] = cantVeces;
  }
return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevotexto=''
  //Recorro el string original y solo agrego las mayúsculas a un nuevo string
  for (i=0; i < s.length; i++) {
    if(s[i]===s[i].toUpperCase()) {
      nuevotexto=nuevotexto + s[i];
    }
  }
  //Recorro el string original y solo agrego las minúsculas a continuación de las mayúsculas
  for (i=0; i < s.length; i++) {
    if(s[i]===s[i].toLowerCase()) {
      nuevotexto=nuevotexto + s[i];
    }
  }    
  return nuevotexto;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra='';
  var fraseEspejo='';
  for (i=0; i<=str.length; i++) { //recorro la frase caracter por caracter
      if(str[i] ===' ' || i===str.length) { //verifico final de palabra o de frase 
        palabraEspejo = ''
        for(a=palabra.length-1; a>=0; a--) { //recorro la palabra y guardo en espejo
          palabraEspejo = palabraEspejo + palabra[a];
        }
        palabra=''
        if(i === str.length) { //incorporo la palabra espejada a la nueva frase (sin o con espacio s/corresp)
          fraseEspejo = fraseEspejo + palabraEspejo;
        } else {
          fraseEspejo = fraseEspejo + palabraEspejo + ' ';
        }          
      } else {
        palabra = palabra + str[i]; //guardo la última palabra caracter por caracter
    }
  } 
  return fraseEspejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString();
  var numeroControl = '';
  for(i=numeroString.length-1; i>=0; i--) {
      numeroControl = numeroControl + numeroString[i];
  }
  if(numeroString === numeroControl) {
      return 'Es capicua';
  } else {
      return 'No es capicua';
  }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevaCadena =''
  for(i=0; i < cadena.length; i++){
    if(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c') {
        continue;
    }else{
        nuevaCadena=nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for(a=0; a<= arr.length;a++) { //repito el análisis tantas veces como elementos hay en el array
      for (i=0; i < arr.length-1; i++) {
          if(arr[i].length > arr[i+1].length) {
              var menor = arr[i+1]; // de existir guardo el mas corto de los dos elementos
              arr[i+1] = arr[i]; //desplazo a la derecha el mas largo
              arr[i] = menor; //guardo en la posición analizada el mas corto
              menor = 0
          }   
      }
  }
return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArreglo=[]
  for(a1=0; a1<arreglo1.length; a1++) {
      for(a2=0; a2<arreglo2.length; a2++) { 
          if(arreglo1[a1]===arreglo2[a2]) {
              nuevoArreglo.push(arreglo1[a1]);
          }
      }
  }
return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
