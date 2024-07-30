function Edificio (build_Name, build_Slogan) {
    this.name = build_Name,
    this.message = build_Slogan
}

const colpatria_Build = new Edificio('Colpatria', "Cumplimos con nuetro trabajo de oficina. ")
console.log(colpatria_Build.name)
console.log(colpatria_Build)

const Edificios = name => ({ 
    name: name 
})

const empire_State_Build = Edificios('Empire State')
console.log(empire_State_Build.name)