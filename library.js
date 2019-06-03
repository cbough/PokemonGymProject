function openTrainer(event, trainerName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(trainerName).style.display = "block";
  event.currentTarget.className += " active";
}

class Elsa {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

class Cloud {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

class LoadedLux {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

class Pokemon {
    constructor(name, hp, attack, defence, abilities) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.abilities = abilities
    }
}

let Elsas = new Elsa()
let Clouds = new Cloud()
let Loaded = new LoadedLux()

axios.get("https://pokeapi.co/api/v2/pokemon/94/")
.then((response) => {

    let ul = document.querySelector("#Gengar")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let gengar = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(gengar)

    Elsas.add(gengar)

    pokeData.innerHTML = gengar.data

    name.innerHTML = "Name: " + gengar.name
    hp.innerHTML = "Hp: " + gengar.hp
    attack.innerHTML = "Attack: " + gengar.attack
    defence.innerHTML = "Defence: " + gengar.defence
    abilities.innerHTML = "Abilities: " + gengar.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/208/")
.then((response) => {

    let ul = document.querySelector("#Steelix")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let steelix = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(steelix)

    Elsas.add(steelix)

    pokeData.innerHTML = steelix.data

    name.innerHTML = "Name: " + steelix.name
    hp.innerHTML = "Hp: " + steelix.hp
    attack.innerHTML = "Attack: " + steelix.attack
    defence.innerHTML = "Defence: " + steelix.defence
    abilities.innerHTML = "Abilities: " + steelix.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/376/")
.then((response) => {

    let ul = document.querySelector("#Metagross")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let metagross = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(metagross)

    Elsas.add(metagross)

    pokeData.innerHTML = metagross.data

    name.innerHTML = "Name: " + metagross.name
    hp.innerHTML = "Hp: " + metagross.hp
    attack.innerHTML = "Attack: " + metagross.attack
    defence.innerHTML = "Defence: " + metagross.defence
    abilities.innerHTML = "Abilities: " + metagross.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/245/")
.then((response) => {

    let ul = document.querySelector("#Suicune")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let suicune = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(suicune)

    Clouds.add(suicune)

    pokeData.innerHTML = suicune.data

    name.innerHTML = "Name: " + suicune.name
    hp.innerHTML = "Hp: " + suicune.hp
    attack.innerHTML = "Attack: " + suicune.attack
    defence.innerHTML = "Defence: " + suicune.defence
    abilities.innerHTML = "Abilities: " + suicune.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/151/")
.then((response) => {

    let ul = document.querySelector("#Mew")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let mew = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(mew)

    Clouds.add(mew)

    pokeData.innerHTML = mew.data

    name.innerHTML = "Name: " + mew.name
    hp.innerHTML = "Hp: " + mew.hp
    attack.innerHTML = "Attack: " + mew.attack
    defence.innerHTML = "Defence: " + mew.defence
    abilities.innerHTML = "Abilities: " + mew.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/493/")
.then((response) => {

    let ul = document.querySelector("#Arceus")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let arceus = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(arceus)

    Clouds.add(arceus)

    pokeData.innerHTML = arceus.data

    name.innerHTML = "Name: " + arceus.name
    hp.innerHTML = "Hp: " + arceus.hp
    attack.innerHTML = "Attack: " + arceus.attack
    defence.innerHTML = "Defence: " + arceus.defence
    abilities.innerHTML = "Abilities: " + arceus.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/haxorus/")
.then((response) => {

    let ul = document.querySelector("#haxorus")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let haxorus = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(haxorus)

    Loaded.add(haxorus)

    pokeData.innerHTML = haxorus.data

    name.innerHTML = "Name: " + haxorus.name
    hp.innerHTML = "Hp: " + haxorus.hp
    attack.innerHTML = "Attack: " + haxorus.attack
    defence.innerHTML = "Defence: " + haxorus.defence
    abilities.innerHTML = "Abilities: " + haxorus.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/149/")
.then((response) => {

    let ul = document.querySelector("#dragonite")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let dragonite = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(dragonite)

    Loaded.add(dragonite)

    pokeData.innerHTML = dragonite.data

    name.innerHTML = "Name: " + dragonite.name
    hp.innerHTML = "Hp: " + dragonite.hp
    attack.innerHTML = "Attack: " + dragonite.attack
    defence.innerHTML = "Defence: " + dragonite.defence
    abilities.innerHTML = "Abilities: " + dragonite.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/635/")
.then((response) => {

    let ul = document.querySelector("#hydreigon")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let hydreigon = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(hydreigon)

    Loaded.add(hydreigon)

    pokeData.innerHTML = hydreigon.data

    name.innerHTML = "Name: " + hydreigon.name
    hp.innerHTML = "Hp: " + hydreigon.hp
    attack.innerHTML = "Attack: " + hydreigon.attack
    defence.innerHTML = "Defence: " + hydreigon.defence
    abilities.innerHTML = "Abilities: " + hydreigon.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

class Larry {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

let Larrys = new Larry

axios.get("https://pokeapi.co/api/v2/pokemon/143/")
.then((response) => {

    let ul = document.querySelector("#Snorlax")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let snorlax = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(snorlax)

    Larrys.add(snorlax)

    pokeData.innerHTML = snorlax.data

    name.innerHTML = "Name: " + snorlax.name
    hp.innerHTML = "Hp: " + snorlax.hp
    attack.innerHTML = "Attack: " + snorlax.attack
    defence.innerHTML = "Defence: " + snorlax.defence
    abilities.innerHTML = "Abilities: " + snorlax.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/131/")
.then((response) => {

    let ul = document.querySelector("#Lapras")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let lapras = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(lapras)

    Larrys.add(lapras)

    pokeData.innerHTML = lapras.data

    name.innerHTML = "Name: " + lapras.name
    hp.innerHTML = "Hp: " + lapras.hp
    attack.innerHTML = "Attack: " + lapras.attack
    defence.innerHTML = "Defence: " + lapras.defence
    abilities.innerHTML = "Abilities: " + lapras.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})

axios.get("https://pokeapi.co/api/v2/pokemon/68/")
.then((response) => {

    let ul = document.querySelector("#Machamp")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let machamp = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(machamp)

    Loaded.add(machamp)

    pokeData.innerHTML = machamp.data

    name.innerHTML = "Name: " + machamp.name
    hp.innerHTML = "Hp: " + machamp.hp
    attack.innerHTML = "Attack: " + machamp.attack
    defence.innerHTML = "Defence: " + machamp.defence
    abilities.innerHTML = "Abilities: " + machamp.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

})
