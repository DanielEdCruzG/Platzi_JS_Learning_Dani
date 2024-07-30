// Tipos de datos primitivo = Inmutable.
let Number = 20;
console.log(Number);
Number = Number + 5;
console.log(Number);

/* Veamos un ejemplo que encontré en los comentarios
y entendamoslo. */ 

// Here we are just creating a new var.
let Number_A = 30;
console.log(Number_A);
// And here we are coping the value of the Number_A.
let Number_B = Number_A;
console.log(Number_B);
// Now we re-assing the value of Number_A.
Number_A = 15;
console.log(Number_A, Number_B);

// Tipos de datos complejos = Mutable.
let User = { Nombre: 'Daniel', Edad: 19 };
User.Edad = 20;
console.log(User);

function cambiar_Nombre(Objecto)
{
    Objecto.Nombre = 'Nicolas';
    Objecto.Edad = 22;
}

let Person_1 = { Nombre: 'Pablo', Edad: 19 }
console.log(Person_1);

cambiar_Nombre(Person_1);
console.log(Person_1);