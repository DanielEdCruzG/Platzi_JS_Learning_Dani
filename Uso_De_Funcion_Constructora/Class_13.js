function Powerpuff_Girl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.is_Leader = false

    this.description = function (){
        console.log(`Powerpuff Girl info: 
        Name: ${this.name}.
        Color: ${this.color}.
        Superpower: ${this.superpower}.
        ${this.is_Leader ? 'Leader: Yes' : 'Leader: No'}.`)
    }

    this.become_Leader = function () {
        this.is_Leader = true
        console.log(`${this.name} has become the leader of the powerpuff girls. `)
    }
} 

const blossom = new Powerpuff_Girl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new Powerpuff_Girl('Buttercup', 'Green', 'Super Strengt')
const bubble = new Powerpuff_Girl('Bubble', 'Blue', 'Flight')

blossom.become_Leader()
blossom.description()
bubble.description()
buttercup.description()

