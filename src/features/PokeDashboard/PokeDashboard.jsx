import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import PokeDetailes from "../PokeDetailes/PokeDetailes";
import pockemonApi from "../../app/services/pokemonApi";

class PokeDashboard extends Component {
  state = {
    pokemons: [],
    loadMoreUrl: 'https://pokeapi.co/api/v2/pokemon?offset=12&limit=12',
    selectedCard: false,
    detailes: {
      types: [],
      stats: []
    },
  }

  componentDidMount() {
    pockemonApi.getAll().then(pokemons => {
      this.setState({
        pokemons,
      })
    });
  }

  handleLoadMore = () => {
    fetch(this.state.loadMoreUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          selectedCard: false,
          loadMoreUrl: data.next,
        })
        return Promise.all(
          data.results.map(result => {
            return pockemonApi.getOne(result.url);
          })
        )

      }).then(pokemons => {
        this.setState((prevState) => {
          return {
            ...prevState,
            pokemons: [...prevState.pokemons, ...pokemons]
          }
        })
      })
  }

  handleOpenDetailes = (detailes) => () => {
    this.setState({
      selectedCard: true,
      detailes: detailes,
    })

  }

  render() {
    const { pokemons, selectedCard } = this.state;
    return (
      <>
        <div className="row justify-content-center">
          <h1>Pokedex</h1>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              {pokemons.map((pokemon) => {
                return (
                  <PokeCard
                    key={pokemon.name}
                    name={pokemon.name}
                    types={pokemon.types}
                    imgUrl={pokemon.imgUrl}
                    weight={pokemon.weight}
                    totalMoves={pokemon.totalMoves}
                    stats={pokemon.stats}
                    openDetailes={this.handleOpenDetailes}
                  />
                )
              })}
            </div>
            <div className="row justify-content-center">
              <button onClick={this.handleLoadMore} type="button" className="btn btn-primary col-8">Load More</button>
            </div>
          </div>
          <div className="col-4">
            {selectedCard && <PokeDetailes detailes={this.state.detailes} />}
          </div>
        </div>
      </>
    )
  }
}

export default PokeDashboard;