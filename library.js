var xhttp = new XMLHttpRequest();

function pokeinfoBilly(name) {
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      let ditto = [];
      for (let i = 0; i < data['abilities'].length; i++) {
        ditto.push(data['abilities'][i]['ability']['name']);
      }
      ditto = ditto.toString().replace(/,/g , ', ');
      p = new Pokemon (
        data['name'], // name
        data['stats'][5]['base_stat'], // hp
        data['stats'][4]['base_stat'], // attack
        data['stats'][3]['base_stat'], // defense
        data['stats'][0]['base_stat'], // speed
        data['stats'][2]['base_stat'], // spattack
        data['stats'][1]['base_stat'], // spdefense
        ditto // lines  5-9 to reference all abilities in api
      )
      }
      elsa.party.push(p)
    }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${name.toLowerCase()}.json`, true);
  xhttp.send();
}

function pokeinfoJorge(name) {
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      let ditto = [];
      for (let i = 0; i < data['abilities'].length; i++) {
        ditto.push(data['abilities'][i]['ability']['name']);
      }
      ditto = ditto.toString().replace(/,/g , ', ');
      p = new Pokemon (
        data['name'], // name
        data['stats'][5]['base_stat'], // hp
        data['stats'][4]['base_stat'], // attack
        data['stats'][3]['base_stat'], // defense
        data['stats'][0]['base_stat'], // speed
        data['stats'][2]['base_stat'], // spattack
        data['stats'][1]['base_stat'], // spdefense
        ditto // lines  5-9 to reference all abilities in api
      )
      }
      cloud.party.push(p)
    }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${name.toLowerCase()}.json`, true);
  xhttp.send();
}

function pokeinfoChris(name) {
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      let ditto = [];
      for (let i = 0; i < data['abilities'].length; i++) {
        ditto.push(data['abilities'][i]['ability']['name']);
      }
      ditto = ditto.toString().replace(/,/g , ', ');
      p = new Pokemon (
        data['name'], // name
        data['stats'][5]['base_stat'], // hp
        data['stats'][4]['base_stat'], // attack
        data['stats'][3]['base_stat'], // defense
        data['stats'][0]['base_stat'], // speed
        data['stats'][2]['base_stat'], // spattack
        data['stats'][1]['base_stat'], // spdefense
        ditto // lines  5-9 to reference all abilities in api
      )
      }
      loadedLux.party.push(p)
    }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${name.toLowerCase()}.json`, true);
  xhttp.send();
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
    constructor(name, hp, attack, defence, speed, spattack, spdefense, abilities) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.speed = speed
        this.spattack = spattack
        this.spdefense = spdefense
        this.abilities = abilities
    }
}

cloud = new cloud
elsa = new Elsa
loadedLux = new LoadedLux

// mew suicune arceus
// haxorus dragonite hydreigon
// gengar steelix metagross
