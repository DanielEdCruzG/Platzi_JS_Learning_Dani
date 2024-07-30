let NewStack = ['El cuarto mono', 'La quinta trampa', 'La sexta víctima', 'El poder del ahora', 'Riesgo positivo']
let answer_User = parseInt(prompt(`Presiona 1 para agregar un libro en la parte de arriba del estante. \nPresiona 2 para eliminar un libro que se encuentre en la parte de arriba del estante. \nPresiona 3 para ver todos lo libros del estante: `))

function append_Book_To_The_Top(stack, book)
{
    stack.push(book)
} 
function delete_Book_Of_The_Top(stack)
{
    stack.pop()    
} 
function show_Books_In_The_Stack(stack)
{
    console.log(stack)
}

while (answer_User != 4)
{

    switch (answer_User) {
        case 1:
            
            user_Book = prompt('Ingresa el nombre del libro que quieres agregar: ')
            append_Book_To_The_Top(NewStack, user_Book)
            break;

        case 2:

            if (NewStack.length === 0)
            {
                console.log('Ya no hay más elementos para eliminar del stack. ')
            }
            else
            {
                delete_Book_Of_The_Top(NewStack)
            }
            break;

        case 3: 

            console.log(NewStack)
            break;
    
        default:
            console.log('El valor ingresado no es válido. ')
            break;
    }


    answer_User = parseInt(prompt("Presiona 1 para agregar un libro en la parte de arriba del estante. \nPresiona 2 para eliminar un libro que se encuentre en la parte de arriba del estante. \nPresiona 3 para ver todos lo libros del estante \nPresiona 4 para finalizar. "))
}
