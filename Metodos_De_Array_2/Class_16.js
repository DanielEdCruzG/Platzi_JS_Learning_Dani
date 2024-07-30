// Map Method:

const numbers = [1,2,3,4,5]
const square_Numbers = numbers.map(num => num * num)

console.log(numbers)
console.log(square_Numbers)

// Foreach:

const colors = ['Blue', 'Yellow', 'Green']
const iterated_Color = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iterated_Color) 

// Activity: Fahrenheit to Celsius

//Formula: C = 5/9 * (F - 32)

let Fahrenheit = [59, 70, 90, 15]

const temperature_To_Celsius = Fahrenheit.map(temp => (temp - 32) * (5/9))

Fahrenheit.forEach(temp => console.log((temp - 32) * (5/9)))

console.log(temperature_To_Celsius)

// Activity: Sum of the elements of an array

let numbers_Array = [2, 4, 6, 8]
sum = 0

numbers_Array.forEach(num => sum = sum + num)
console.log(sum)

const sum_Of_Numbers = numbers_Array.map(num => sum = sum + num)
console.log(sum_Of_Numbers)

// Filter Method

const numbers_Until_Ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even_Numbers = numbers_Until_Ten.filter(number => number % 2 === 0)

console.log(even_Numbers)

// Reduce Method Case 1

const numbers_Reduce = [1, 2, 3, 4, 5]
const sum_With_Reduce = numbers_Reduce.reduce((accumulator, current_Value) => accumulator + current_Value, 0)

console.log(sum_With_Reduce)

// Reduce Method Case 2

const words = ['Apple', 'Banana', 'Hello', 'Goodbye', 'Banana', 'Goodbye']

const words_Frecuenfy = words.reduce((accumulator, current_Value) => {

    if (accumulator[current_Value])
    {
        accumulator[current_Value] = accumulator[current_Value] + 1
    }
    else
    {
        accumulator[current_Value] = 1
    }

    return accumulator
}, {})

console.log(words_Frecuenfy)

// Activity: Calculate the average of an array of grades only with the passing grades

const grades = [50, 35, 60, 75, 70, 90, 100, 59, 10, 100, 80, 77]

// Mi Solución:

// let average = 0
// let amount_Passing_Grades = 0

// const grades_Average = grades.filter(grade => {

//     if (grade >= 70)
//     {
//         average = average + grade
//         amount_Passing_Grades = amount_Passing_Grades + 1
//     }

// })

// console.log(average/amount_Passing_Grades)

const passing_Grades = grades.filter(grade => grade >= 70)
const average_Passing_Grades = passing_Grades.reduce((sum, grade) => sum + grade, 0) / passing_Grades.length

console.log(average_Passing_Grades)

// Find Method

const multiple_Of_Five = [5, 10, 15, 20]
const firts_Number_Greater_Than_Ten = multiple_Of_Five.find(number => number > 10)

console.log(multiple_Of_Five)
console.log(firts_Number_Greater_Than_Ten)

// FindIndex Method

const random_Numbers = [15, 25, 12, 21, 52, 51]
const index_Number = random_Numbers.findIndex(number => number > 50)

console.log(random_Numbers)
console.log(index_Number)

// Activity: Search the person who win the ticket

const winning_Participans = [
    {id: 1, name: "Daniel", ticket: 10},
    {id: 2, name: "Daniela", ticket: 29},
    {id: 3, name: "Danilo", ticket: 54},
    {id: 4, name: "Nicol", ticket: 23}
]

function Find_Winner_By_Name(name)
{
    const winner = winning_Participans.find(person => person.name === name)
    return winner || 'No es el ganador.  :('
}

function Find_Index_Winner_By_Ticket(ticket_Number)
{
    const index = winning_Participans.findIndex(participant => participant.ticket === ticket_Number)
    return index !== -1 ? winning_Participans[index] :  'No es el ganador.  :('
}

function Display_Winner_Info(winner)
{
    if (winner !== undefined && winner != null && winner !== 'Ese nombre no fue el ganador.  :(')
    {
        console.log("The winner is: ", winner)
    }
    else
    {
        console.log("No winner found. ")
    }
}

const winner_By_Name = Find_Winner_By_Name("Danilo")
const winner_By_Ticket = Find_Index_Winner_By_Ticket(10)

console.log(winner_By_Name)
console.log(winner_By_Ticket)