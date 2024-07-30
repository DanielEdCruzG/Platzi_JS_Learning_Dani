// const Poema = 'Las rosas son rojas \n' +
//              'Las violetas son azules \n' +
//              'El mundo es tan confuso \n' +
//              'Espero perdure.';
 
// console.log(Poema);

// const Poema2 = 'Las rosas son rojas \n\
// Las violetas son azules \n\
// El mundo es tan confuso \n\
// Espero perdure.';
 
// console.log(Poema2);

// const Poema3 = `Las rosas son rojas 
//                 Las violetas son azules 
//                 El mundo es tan confuso 
//                 Espero perdure.`;
// console.log(Poema3);

const Saludo = "Hola. ¿Cómo estás?. ";

// console.log(Saludo[2]);              //De estas 2 formas puedo obtener el
// console.log(Saludo.charAt(2));       //carácter de un array por índice.

console.log(Saludo.indexOf('a'));       //Con el método indexOf puedo buscar
console.log(Saludo.indexOf('estás'));   //el índice de la letra o palabra.
console.log(Saludo.indexOf('estas'));   //Arroja -1 cuando el valor no aparece.
console.log(Saludo.lastIndexOf('o'));   //Muestra elñ index del último valor ==.
console.log(Saludo.slice(6, 11));       //Aquí seleccionamos el "Recorte".

console.log(Saludo.length);             //Conteo de todos los indeces.
console.log(Saludo.toLocaleLowerCase());   //Convirtiendo el string en minusculas.
console.log(Saludo.toLocaleUpperCase());   //Convirtiendo el string en mayúsculas.

const Saludo_Con_Espacios = " Holi. Tengo Espacios. ";
const Saludo_Sin_Espacios = Saludo_Con_Espacios.trim() + " Bueno, ya no. ";
console.log(Saludo_Con_Espacios);
console.log(Saludo_Sin_Espacios.trim());

const Saludo_Dividido = Saludo.split(' ');
console.log(Saludo_Dividido);

const Saludo_Original = "Hola. :)";
console.log(Saludo_Original);
const Saludo_Cambiado = Saludo_Original.replace(':)', '😉');
console.log(Saludo_Cambiado);

