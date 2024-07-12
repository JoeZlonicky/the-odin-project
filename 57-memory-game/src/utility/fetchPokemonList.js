async function fetchPokemonList() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const data = json.results.map((entry) => {
      const name = entry.name.split('-').join(' ');
      const urlParts = entry.url.split('/');
      const number = urlParts[urlParts.length - 2];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;

      return {
        name,
        image,
      };
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export default fetchPokemonList;
