function pokeinfo(name) {
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
    }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${name.toLowerCase()}.json`, true);
  xhttp.send();
}

cloud = new cloud
elsa = new Elsa
chris = new chris
