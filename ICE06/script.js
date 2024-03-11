console.log("Script is running!");

// --------------- Asynchronous API Call using XMLHttpRequest --------------------

// document.getElementById("loadPokemon").addEventListener("click", function () {
//   // We want to create a new XMLHTTPRequest Object to grab the Pokemon API Data

//   console.log("callback function");
//   var xhr = new XMLHttpRequest();

//   // The line below will create a GET HTTP Request to the pokemon API via the URL
//   // The call below is ASYNCHRONOUS
//   xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

//   xhr.onload = function () {
//     console.log("API has responded!");
//     //   console.log(this);
//     var response = JSON.parse(this.responseText);
//     console.log(response);
//     var pokemonString = "";
//     response.results.forEach((pokemon) => {
//       pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//     });
//     document.getElementById("pokemonList").innerHTML = pokemonString;
//   };
//   xhr.send();
// });

// --------------- Asynchronous API Call using fetch --------------------

// Promises

// var userData = await postgresDatabase.GetUserData() // for example takes 5 seconds
// Using Async/Await to handle promise
// function fetchUserData(userData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ username: "user", password: 123 });
//       // reject({ status: 400, error: "could not find user" });
//     }, 5000);
//   });
// }

// async function handlePromise() {
//   console.log("Initiating call to database...");
//   let promiseResult = await fetchUserData();
//   console.log(promiseResult);
// }

// handlePromise();

// The reason we are defining a promise in the format below is to simulate an API/Database call
// const DBGetUserData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "user", password: 123 });
//     // reject({ status: 400, error: "could not find user" });
//   }, 5000);
// });

// console.log(DBGetUseData);
// Using .THEN()
// The code below will WAIT until the promise resolves (either fulfilled or rejected and THEN it will execute the callback function and pass the promise response as an argument to it)
// DBGetUserData.then((response) => {
//   console.log("Promise successfully fulfilled: ", response);
// })
//   // .then(res => { });
//   // .then(res => { });
//   // .then(res => { });
//   .catch((err) => console.log("Promise error was caught: ", err));

// console.log(" I am line 71 and I ran.");

// document.getElementById("loadPokemon").addEventListener("click", function () {
//   // Fetch the list of pokemons
//   // Using FETCH and .THEN
//   let pokemonList = fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0",
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonResult) => {
//       // The scope of the jsonResult variable is limited to only this .then callback function
//       console.log(jsonResult);
//       var pokemonString = "";
//       // Display list of pokemons in HTML
//       jsonResult.results.forEach((pokemon) => {
//         pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//       });
//       document.getElementById("pokemonList").innerHTML = pokemonString;
//       return jsonResult;
//     })
//     .catch((err) => console.log("We have encountered an error: ", err))
//     .finally(() => {
//       console.log("API Call complete.");
//     });
// });

// USING FETCH & ASYNC AWAIT
// document
//   .getElementById("loadPokemon")
//   .addEventListener("click", async function () {
//     // Fetch the list of pokemons
//     try {
//       let pokemonList = await fetch(
//         // URL: for ICE -> Store user input in variable called pokemonName
//         // `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

//         "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
//       ); // By Default, it sends a GET HTTP Request
//       var pokemonString = "";
//       // debugger;
//       var jsonResults = await pokemonList.json();
//       jsonResults.results.forEach((pokemon) => {
//         pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
//       });
//       document.getElementById("pokemonList").innerHTML = pokemonString;
//     } catch (err) {
//       console.log(err);
//     }
//   });

// ICE 6: DUE Monday @ 11:59 PM
// 1. Create a form where the user will be able to type in the name of a pokemon


// 2. After the user submits the form, send an API GET Request to the pokeapi searching for the details of the pokemon name the user submitted from the form.

document.getElementById("SearchPokemon").addEventListener("click", async () => {
    let userInput = document.getElementById('user-Input');
    console.log(userInput.value);
    let pokemonName = userInput.value;

    try {
        let pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!pokemonDetails.ok) {
            throw new Error(`Pokemon not found for name ${pokemonName}`);
        }
        let pokemon = await pokemonDetails.json();
        console.log(pokemon);
        let name = pokemon.name;
        let imageUrl = pokemon.sprites.front_default;
        let height = pokemon.height;
        let weight = pokemon.weight;
        let ability1 = pokemon.abilities[0].ability.name;
        let ability2 = pokemon.abilities[1].ability.name;
        let statName1 = pokemon.stats[0].stat.name;
        let statName2 = pokemon.stats[1].stat.name;
        let statName3 = pokemon.stats[2].stat.name;
        let statName4 = pokemon.stats[3].stat.name;
        let statName5 = pokemon.stats[4].stat.name;
        let statName6 = pokemon.stats[5].stat.name;
        let stat1 = pokemon.stats[0].base_stat;
        let stat2 = pokemon.stats[1].base_stat;
        let stat3 = pokemon.stats[2].base_stat;
        let stat4 = pokemon.stats[3].base_stat;
        let stat5 = pokemon.stats[4].base_stat;
        let stat6 = pokemon.stats[5].base_stat;
        


        let detailsHtml = `
            <h1>${name}</h1>
            <img src="${imageUrl}" alt="${name}">
            <p>Height: ${height}</p>
            <p>Weight: ${weight}</p>
            <p>abilities: ${ability1}, ${ability2}</p>
            <h2>Stats:</h2>
            <p>${statName1}: ${stat1} , ${statName2}: ${stat2}</p>
            <p>${statName3}: ${stat3} , ${statName4}: ${stat4}</p>
            <p>${statName5}: ${stat5} , ${statName6}: ${stat6}</p>
        `;

        
        document.getElementById("pokemon-details").innerHTML = detailsHtml;
    } catch (error) {
        document.getElementById("pokemon-details").innerHTML = `<p>Failed to load Pokemon details. Please type another Pokemon</p>`;
    }
});

// 3. If the api returns the pokemon details successfully, then display the details of the pokemon in the HTML (i.e. update the body of the HTML to have the pokemon)
//4 If  the api returns an error that it can't find the pokemon, display the error to the user and ask them to type a different pokemon name