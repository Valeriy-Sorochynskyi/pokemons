const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=12';

const pockemonApi = {
    getAll() {
      return fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
          return Promise.all(
            data.results.map(result => {
              return this.getOne(result.url);
            })
          );
        })
  
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
            stats: data.stats.map(item => ({ stat: item.base_stat, statName: item.stat.name })),
            weight: data.weight,
            totalMoves: data.moves.length,
          }
        })
    }
  }

  export default pockemonApi;