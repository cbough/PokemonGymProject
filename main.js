// trainer objects
// My Pokemon mew, arceus, suicune

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

class billy {
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

class cloud {
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
