const house = {
    dog_Name: "Fido",
    dog_Greetting: function() {
        console.log(`Hi my name is ${this.dog_Name}`)
    }
  }

house.dog_Greetting()

function dog_Greetting (){
    console.log(`Hi my name is ${this.dog_Name}`)
}

const house_1 = {
    dog_Name: "Patroklo",
    dog_Age: 8
}

dog_Greetting.call(house_1)

const owner = "Gabi";
const city = "Bogotá D.C ";

function new_Dog_Greetting (owner, city){
    console.log(`Hi, my name is ${this.dog_Name}, i live with ${owner}, i love to much my owner because i like the food that she gave me. We live in ${city}.`);
}

//Call:
new_Dog_Greetting.call(house_1, owner, city)

//Apply:
const parameters_Needed = [owner, city]
new_Dog_Greetting.apply(house_1, parameters_Needed)

//Blind:
const new_Funtion_Blinded = new_Dog_Greetting.bind(house_1, owner, city)
new_Funtion_Blinded()