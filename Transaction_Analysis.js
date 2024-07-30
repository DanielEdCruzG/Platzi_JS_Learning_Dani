const list_Of_Transactions = [
    {id:1, description: 'Pago Salario', amount: 400},
    {id:2, description: 'Compra Portátil', amount: -200},
    {id:3, description: 'Compra Audífonos', amount: -5},
    {id:4, description: 'Pago Mesada', amount: 100},
    {id:5, description: 'Transporte Mensual', amount: -100},
    {id:6, description: 'Pago Mensualidad Creatus', amount: -75},
    {id:7, description: 'Pago Salario', amount: 400},
    {id:8, description: 'Pago Libro', amount: -125},
    {id:9, description: 'Pago Comida', amount: -90}
]

const saldo_Total = list_Of_Transactions.reduce((sum, amount) => sum + amount.amount, 0)
console.log(saldo_Total)

const mayor_Transaccion = list_Of_Transactions.reduce((transaccion_Mayor, cost) => {
    return Math.abs(transaccion_Mayor) > Math.abs(cost.amount) ? transaccion_Mayor : cost.amount
}, 0)
console.log(mayor_Transaccion)

const negatives_Amounts = list_Of_Transactions.filter(transaction => transaction.amount < 0)
console.log(negatives_Amounts) 

const transaction_By_Description = list_Of_Transactions.filter(transaction => transaction.description === "Pago Salario")
console.log(transaction_By_Description)

const transaction_By_Amount_Index = list_Of_Transactions.findIndex(transaction => transaction.amount === 400)
console.log(transaction_By_Amount_Index)

list_Of_Transactions.forEach(transaction => {
    return transaction.amount < 0 ? transaction.description = 'Expense: ' + transaction.description : transaction.description = 'Income: ' + transaction.description
})


console.log(list_Of_Transactions)
