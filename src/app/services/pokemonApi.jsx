const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";
const ALL_TYPES_URL = "https://pokeapi.co/api/v2/type/?limit=999";
const TYPE_URL = "https://pokeapi.co/api/v2/type";

const pockemonApi = {
  getAll() {
    return fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        return Promise.all(data.results.map(result => this.getOne(result.url)));
      });
  },

  getOne(url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return {
          id: data.id,
          name: data.name,
          imgUrl: data.sprites.front_default,
          types: data.types.map(item => item.type.name),
          stats: data.stats.map(item => ({
            stat: item.base_stat,
            statName: item.stat.name
          })),
          weight: data.weight,
          totalMoves: data.moves.length
        };
      });
  },

  getAllTypes() {
    return fetch(ALL_TYPES_URL)
      .then(response => response.json())
      .then(data => data.results.map(result => result.name));
  },

  getPokemonsByType(type) {
    return fetch(`${TYPE_URL}/${type}?limit=25`)
      .then(response => response.json())
      .then(data => {
        return Promise.all(data.pokemon.map(result => this.getOne(result.pokemon.url)))
      })
  }
};

export default pockemonApi;
