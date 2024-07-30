// ForEach

let mantra_De_Ultimate = ['Run', 'Catch', 'Throw', 'Repeat'];

mantra_De_Ultimate.forEach(i => {
    console.log(i)
});

// ForOf
let palabra_A_Deletrear = "Amarillo"

for (const i of palabra_A_Deletrear) {
    console.log(i)
}

// ForIn

const persona_Daniel = {
    Nombre: 'Daniel',
    Edad: 19,
    Ciudad: 'Bogotá',
    Mascotas: ['Max', 'Triss']
}

for (const key in persona_Daniel) { 

    if (key == 'Mascotas')
    {
        pets_On_Array = persona_Daniel[key]
        console.log(key, pets_On_Array[0], 'y' ,pets_On_Array[1])
    }
    else
    {
        console.log(key, persona_Daniel[key])
    }
}

