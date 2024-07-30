const videogames = ['Undertale', 'Minecraft', 'Battlefield', 'Portal', 'Terraria']
const change_List_Videogames = videogames.splice(2, 2, 'Factorio')

console.log(videogames)
console.log(change_List_Videogames)

const colors = ['Blue', 'Yellow', 'Green', 'Purple', 'Brown', 'Black']
const inverted_Colors = colors.reverse()

console.log(colors)
console.log(inverted_Colors)

const names = ['Daniel', 'Jenny', 'Yudy', 'Wander', 'Sofocles']
const names_Sort = names.sort()

console.log(names)
console.log(names_Sort)

const numbers = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
const numbers_With_Sort = numbers.sort((a, b) => a - b )

const numbers_2 = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]
const numbers_With_Sort_Unicode = numbers_2.sort()

console.log(numbers)
console.log(numbers_2)
console.log(numbers_With_Sort_Unicode)
console.log(numbers_With_Sort)

const animes = ['Demon Slayer', 'Boku no Hero', 'Kuzu no Honkai', 'Irodoku', 'Inusyasha']
const array_Fill_With_Emojis = animes.fill('👿', 2, 3) 

console.log(animes)
console.log(array_Fill_With_Emojis)