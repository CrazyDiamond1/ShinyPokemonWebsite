GetPokemonJSON();

function GetPokemonJSON(){

var table = document.getElementById("list");

var caughtShinies = { "pokemon":[]};
var imgSrc = "";
var nickName = "";
var species = "";
var game = "";
var date = "";

for (var i = 1, row; row = table.rows[i]; i++) {
    // console.log(table.rows[i]);
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
        //   console.log(col.innerHTML);
        var elements;

        if(col.getElementsByTagName('img').length > 0){
            elements = col.getElementsByTagName('img');
            imgSrc = elements[0].getAttribute("src");
            // console.log("IMAGE " + imgSrc);
        }
        else if(col.getElementsByTagName('p').length > 0 && j == 1){
            elements = col.getElementsByTagName('p');
            nickName = elements[0].textContent;
            // console.log("NICKNAME " + nickName);
            
        }
        else if(col.getElementsByTagName('p').length > 0 && j == 2){
            elements = col.getElementsByTagName('p');
            species = elements[0].textContent;
            // console.log("SPECIES " + species);
            
        }
        else if(col.getElementsByTagName('p').length > 0 && j == 3){
            elements = col.getElementsByTagName('p');
            gameDate = elements[0].textContent;
            //console.log("GAME/DATE " + gameDate);
            if(gameDate.includes('/')){
                gameDateArray = gameDate.split(" ");
                game = gameDateArray[0];
                date = gameDateArray[1];
                // console.log("Game " + game);
                // console.log("Date " + date);
            }
            else{
                game = gameDate
                // console.log("Game " + game);
            }
            
        }

        if(imgSrc != "" && species != "" && game != ""){
            if(nickName == ""){
                nickName = species;
            }

        }
    }  
    caughtShinies.pokemon.push({name:nickName, speciesPokemon:species, imgPokemon:imgSrc, gameCaught:game, dateCaught:date});

    imgSrc = "";
    nickName = "";
    species = "";
    game = "";
    date = ""; 
}

var json = JSON.stringify(caughtShinies);
console.log(json);
// var fs = require('fs');
// fs.writeFile('pokemon.json', json, 'utf8', callback);
}
// function update_pokemon_json() {
//     // table.forEach(row => {
//     //     row.
//     // });
// }