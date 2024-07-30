const matrix = [
    ['C#', 'JS'],
    ['C#', 'PY'],
    ['JS', 'PY']
]

const rts = [0, 0, 1]

function winner_Tournament(battle, results)
{
    let winner = ''
    const puntaje = {}

    for(let i = 0; i < battle.length; i++)
    {
        const [local, visitante] = battle[i]
        const winning_Team = results[i] === 0 ? visitante : local

        puntaje[winning_Team] = (puntaje[winning_Team] || 0) + 3

        if (!winner  || puntaje[winning_Team] > puntaje[winner])
        {
            winner = winning_Team
        }
    }

    return winner
}

console.log(winner_Tournament(matrix, rts))

// Mi solución:

/*
const javascript = {Nombre: 'JS', Partidas_Ganadas: 0}
const c_Shard = {Nombre: 'C#', Partidas_Ganadas: 0}
const python = {Nombre: 'PY', Partidas_Ganadas: 0}



for (let i = 0; i < matrix.length; i++)
{
    if (!Boolean(rts[i]))
    {
        if (javascript.Nombre === matrix[i][1])
        {
            javascript.Partidas_Ganadas = javascript.Partidas_Ganadas + 3
        }
        else if(c_Shard.Nombre === matrix[i][1])
        {
            c_Shard.Partidas_Ganadas = c_Shard.Partidas_Ganadas + 3
        }
        else 
        {
            python.Partidas_Ganadas = python.Partidas_Ganadas + 3
        }
    }
    else
    {
        if (javascript.Nombre === matrix[i][0])
        {
            javascript.Partidas_Ganadas = javascript.Partidas_Ganadas + 3
        }
        else if(c_Shard.Nombre === matrix[i][0])
        {
            c_Shard.Partidas_Ganadas = c_Shard.Partidas_Ganadas + 3
        }
        else 
        {
            python.Partidas_Ganadas = python.Partidas_Ganadas + 3
        }
    }
}

console.log(matrix)

const winner = 0

if (javascript.Partidas_Ganadas > c_Shard.Partidas_Ganadas)
{
    if (javascript.Partidas_Ganadas > python.Partidas_Ganadas)
    {
        console.log("El lenguaje ganador es: ", javascript.Nombre)
    }
    else
    {
        console.log("El lenguaje ganador es: ", python.Nombre)
    }
}
else if (c_Shard.Partidas_Ganadas > python.Partidas_Ganadas)
{
    console.log("El número ganador es: ", c_Shard.Nombre)
}
else
{
    console.log("El número ganador es: ", python.Nombre)
}

console.log(javascript)
console.log(c_Shard)
console.log(python)
*/