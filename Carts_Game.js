const mazo = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10']

// Mi solución:

// function Sort_Carts(mazo)
// {
//     mazo_Barajado = new Array(10)

//     for (let index = 0; index < mazo.length; index++) {
        
//         const cart_Value = mazo[index];
//         let random_Cart_Index = Math.floor(Math.random() * 10)

//         while ((mazo_Barajado[random_Cart_Index] != null) && (mazo_Barajado[random_Cart_Index] != undefined)) 
//         {
//             random_Cart_Index = Math.floor(Math.random() * 10)
//         }
        
//         mazo_Barajado[random_Cart_Index] = cart_Value

//     }

// }

// function Deal_Carts_To_Players(mazo_Barajado, amount_Carts_To_Deal)
// {

//     const cantidad_Jugadores = mazo_Barajado.length/amount_Carts_To_Deal
//     const All_Players_Carts = []

//     for (let index = 1; index < cantidad_Jugadores; index++) 
//     {
//         carts_Of_Each_Player = []

//         for (let index = 0; index < amount_Carts_To_Deal; index++) 
//         {

//             let cart_For_The_Player = mazo_Barajado.shift()
//             carts_Of_Each_Player.push(cart_For_The_Player) 

//         }

//         All_Players_Carts.push(carts_Of_Each_Player)
//     }

//     console.log (All_Players_Carts)

// }

// Sort_Carts(mazo)
// console.log(mazo_Barajado)

// Deal_Carts_To_Players(mazo_Barajado, 3)

// Solucón Teff:
// const mazo = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10']

function Shuffle_Deck()
{
    // Algoritmo de Fisher-Yates
    for (let i = mazo.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]]
        console.log("J: " + j)
        console.log("I: " + i)
    }
}

function Deal_Carts(Num_Carts)
{
    const deal_Carts = mazo.splice(0, Num_Carts)
    return deal_Carts
}

console.log(mazo)
Shuffle_Deck()
console.log(mazo)
let carts_Dani = Deal_Carts(3)
let carts_Yudy = Deal_Carts(3)

console.log(mazo)
console.log(carts_Dani)
console.log(carts_Yudy)