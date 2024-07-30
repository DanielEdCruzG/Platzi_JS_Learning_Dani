let playlist = ['Around the world', 'Diabluras', 'As it was', 'Asereje', 'Wakawaka']
let answer_User = parseInt(prompt(`Presiona 1 para agregar una canción a la lista de reproducción. \nPresiona 2 para eliminar una canción a la lista de reproducción. \nPresiona 3 para ver la lista de reproducción: `))

function append_Song_To_Playlist(playlist, song)
{
    playlist.unshift(song)
} 
function remove_Song_From_The_Playlist(playlist)
{
    playlist.shift()    
} 
function show_Songs_In_The_playlist(playlist)
{
    console.log(playlist)
}

while (answer_User != 4)
{

    switch (answer_User) {
        case 1:
            
            user_Song = prompt('Ingresa el nombre del libro que quieres agregar: ')
            append_Song_To_Playlist(playlist, user_Song)
            break;

        case 2:

            if (playlist.length === 0)
            {
                console.log('Ya no hay más elementos para eliminar del stack. ')
            }
            else
            {
                remove_Song_From_The_Playlist(playlist)
            }
            break;

        case 3: 

            console.log(playlist)
            break;
    
        default:
            console.log('El valor ingresado no es válido. ')
            break;
    }


    answer_User = parseInt(prompt("Presiona 1 para agregar una canción a la lista de reproducción. \nPresiona 2 para eliminar una canción a la lista de reproducción. \nPresiona 3 para ver la lista de reproducción. \nPresiona 4 para finalizar. "))
}
