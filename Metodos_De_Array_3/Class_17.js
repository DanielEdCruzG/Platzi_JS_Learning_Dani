// Concat Case 1

const morse_Code_1 = ['....', '--']
const morse_Code_2 = ['.-..','.-']

const morse_Code_Message = morse_Code_1.concat(morse_Code_2)

console.log(morse_Code_1)
console.log(morse_Code_2)
console.log(morse_Code_Message)

// Concat Case 2

const morse_Code_Message_2 = [].concat(morse_Code_1, morse_Code_2)

console.log(morse_Code_Message_2)

function Join_Morse_Code_Parts(morse_Code_1, morse_Code_2)
{
    return [...morse_Code_1, ...morse_Code_2]
}

const morse_Code_Message_3 = Join_Morse_Code_Parts(morse_Code_1, morse_Code_2)
console.log(morse_Code_Message_3)

const list_Of_Numbers = [1, 2, 3, 4, 5]
const numbers_joined = list_Of_Numbers.join('')
console.log(list_Of_Numbers)
console.log(numbers_joined)

// Every Method

const ages = [10, 11, 12, 13, 14, 15, 16, 17, 18]

const Are_All_Adults = ages.every(age => age > 18)

console.log(ages)
console.log(Are_All_Adults)

// Some Method

const families_List_Children_Or_Not = [false, false, false, false, true]

const did_Some_Of_The_Families_Have_Children = families_List_Children_Or_Not.some( family => family === true)

console.log(families_List_Children_Or_Not)
console.log(`There's some family with childen:  ${did_Some_Of_The_Families_Have_Children}`)


// Includes Methods

const numbers = [1, 2, 3, 4, 5]
const result = numbers.includes(1)

console.log(result)

// IndexOf Method

const colors = ['Blue', 'Yellow', 'Green', 'Pink', 'Blue']

const Have_Pink_By_Index = colors.indexOf('Pink')

console.log(colors)
console.log("Index Of Pink Color: ",Have_Pink_By_Index)

// Last Index Of Method

const Whats_The_Index_Of_Last_Blue = colors.lastIndexOf('Blue')

console.log("Last Index Blue: ", Whats_The_Index_Of_Last_Blue)

// Activity: Find the string

const string_List = ['Octopus', 'One', 'Red Hot Chilli Peppers', 'Blondie', 'Two', 'Spider', 'Octopus', 'One', 'Red Hot Chilli Peppers', 'Blondie', 'Two', 'Spider']

function Search_The_String(Target_String, list)
{
    const string_Properties = {
        does_The_Element_Exist: false,
        its_Firts_Index_is: -1,
        its_Last_Index_is: -1
    }

    if (list.includes(Target_String))
    {
        string_Properties.does_The_Element_Exist = true;
        string_Properties.its_Firts_Index_is = list.indexOf(Target_String)
        string_Properties.its_Last_Index_is = list.lastIndexOf(Target_String)
    }

    console.log(string_Properties)

}

Search_The_String("Spider", string_List)