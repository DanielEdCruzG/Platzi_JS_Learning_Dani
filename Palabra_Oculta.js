const palabra_Oculta = 'Fresa';
const pista = 'Es una fruta de color rojo';
let number_Of_Tries = 3;
let word_User = '';

do {
    console.log(`Tienes 3 intentos para adivinar y la pista es la siguiente:
${pista}`)
alert(`Tienes ${number_Of_Tries} intentos para adivinar y la pista es la siguiente:
${pista}`)
    word_User = prompt('Escribe la palabra a adivinar: ')
    number_Of_Tries = number_Of_Tries - 1

} while ( (number_Of_Tries > 0 ) && (word_User != palabra_Oculta) );

if (word_User === palabra_Oculta)
{
    console.log('Felicidades has adivinado la palabra oculta. ')
    alert('Felicidades has adivinado la palabra oculta. ')
    document.write('WOW, eres muy bueno adivinando. ')
}
else
{
    console.log('Se te acabaron los intentos, será la proxima.')
    alert('Se te acabaron los intentos, será la proxima.')
}
