// document.getElementById("SearchPokemon").addEventListener("click", async () => {
//     let userInput = document.getElementById('user-Input');
//     console.log(userInput.value);
//     let pokemonName = userInput.value;

//     try {
//         let pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         if (!pokemonDetails.ok) {
//             throw new Error(`Pokemon not found for name ${pokemonName}`);
//         }
//         let pokemon = await pokemonDetails.json();
//         console.log(pokemon);
//         let name = pokemon.name;
//         let imageUrl = pokemon.sprites.front_default;
//         let height = pokemon.height;
//         let weight = pokemon.weight;
//         let ability1 = pokemon.abilities[0].ability.name;
//         let ability2 = pokemon.abilities[1].ability.name;
//         let statName1 = pokemon.stats[0].stat.name;
//         let statName2 = pokemon.stats[1].stat.name;
//         let statName3 = pokemon.stats[2].stat.name;
//         let statName4 = pokemon.stats[3].stat.name;
//         let statName5 = pokemon.stats[4].stat.name;
//         let statName6 = pokemon.stats[5].stat.name;
//         let stat1 = pokemon.stats[0].base_stat;
//         let stat2 = pokemon.stats[1].base_stat;
//         let stat3 = pokemon.stats[2].base_stat;
//         let stat4 = pokemon.stats[3].base_stat;
//         let stat5 = pokemon.stats[4].base_stat;
//         let stat6 = pokemon.stats[5].base_stat;
        
//         let detailsHtml = `
//             <h1>${name}</h1>
//             <img src="${imageUrl}" alt="${name}">
//             <p>Height: ${height}</p>
//             <p>Weight: ${weight}</p>
//             <p>abilities: ${ability1}, ${ability2}</p>
//             <h2>Stats:</h2>
//             <p>${statName1}: ${stat1} , ${statName2}: ${stat2}</p>
//             <p>${statName3}: ${stat3} , ${statName4}: ${stat4}</p>
//             <p>${statName5}: ${stat5} , ${statName6}: ${stat6}</p>
//         `;

        
//         document.getElementById("pokemon-details").innerHTML = detailsHtml;
//     } catch (error) {
//         document.getElementById("pokemon-details").innerHTML = `<p>Failed to load Pokemon details. Please type another Pokemon</p>`;
//     }
// });
async function fetchPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
        throw new Error(`Blogs not found.`);
    }
    let posts = await response.json();

    let detailsHtml = ''; // Initialize the HTML content as an empty string

    // Iterate through each post to construct HTML content
    posts.forEach((post, index) => {
        if (index < 20) { // Limit to the first 20 posts
            let title = post.title;
            let body = post.body;

            detailsHtml += `
                <div class="card my-3" style="width: 18rem;">
                    <img src="PLACEHOLDER_IMAGE_URL" class="card-img-top" alt="Blog Post Image">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${body}</p>
                    </div>
                </div>
            `;
        }
    });

    // Update the HTML of the container with ID 'blog'
    document.getElementById("blog").innerHTML = detailsHtml;
}

// Execute the function and catch any potential errors
fetchPosts().catch(error => console.error(error)); 