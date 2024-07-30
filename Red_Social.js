/* 
Requerimientos: 

1. El usuario debe poder ingresar su usario y contraseña:
2. El sistema debe validar si el usuario y contraseña ingresado existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y el timeline.
4. Su el usuario y contraseña no son correctos, debe mostrar un mensaje de error.

*/

const users_Database = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana',
        password: '789'
    },
];

const users_Timeline = [
    {
        username: 'Estefany',
        timeline: 'Me encanta Javascript. '
    },
    {
        username: 'Oscar',
        timeline: 'Bebeloper es lo mejor. '
    },
    {
        username: 'Mariana',
        timeline: 'A mí me gusta más el café que el té. '
    },
    {
        username: 'Andres',
        timeline: 'Yo hoy no quiero trabajar. '
    }
];

user_Nickname = prompt('Ingresa aquí tu nombre de usuario: ').toLowerCase()
user_Password = prompt('Ingresa aquí tu contraseña: ')

let Is_The_Name_In_The_Database = false
let Is_The_Password_Correct = false

for (const iterator of users_Database) {

    if (iterator.username === user_Nickname)
    {
        Is_The_Name_In_The_Database = true
    }

    if (iterator.password === user_Password)
    {
        Is_The_Password_Correct = true
    }
}
    
if (Is_The_Password_Correct !== true)
{
    console.log('Error, contraseña incorrecta. ')
    document.write('Error, contraseña incorrecta. ')
}
else if (Is_The_Name_In_The_Database !== true)
{
    console.log('Usuario no encontrado en la base de datos. ')
    document.write('Usuario no encontrado en la base de datos. ')
}

if (Is_The_Name_In_The_Database && Is_The_Password_Correct)
{
    console.log("Bienvenido datos validados exitosamente. ")
    document.write("Bienvenido datos validados exitosamente. ")



}











// Ejercicio MINI

const mini_Database = [
    {
        nombre: 'dani',
        comida: 'burguer'
    },
    {
        nombre: 'patricio',
        comida: 'salpicon'
    },
    {
        nombre: 'messi',
        comida: 'mate'
    }
]

var nombresito = 'dani'
var strong_Password = 'burguer'
let Is_The_Name_In_The_Mini_Database = false
let Is_The_food_Correct = false

for (const iterator of mini_Database) {

    if (iterator.nombre === nombresito)
    {
        Is_The_Name_In_The_Database = true
    }

    if (iterator.comida === strong_Password)
    {
        Is_The_food_Correct = true
    }
}
    
if (Is_The_food_Correct !== true)
{
    console.log('Error, contraseña incorrecta. ')
}
else if (Is_The_Name_In_The_Database !== true)
{
    console.log('Usuario no encontrado en la base de datos. ')
}

console.log(":)", Is_The_Name_In_The_Database)
console.log(":)", Is_The_food_Correct)