import React, { Component } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokeDetailes from "../PokeDetailes/PokeDetailes";
import TypeSelection from "../TypeSelection/TypeSelection";
import pockemonApi from "../../app/services/pokemonApi";

class PokeDashboard extends Component {
  state = {
    allTypes: [],
    pokemons: [],
    loadMoreUrl: "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12",
    selectedCard: false,
    details: {},
    isLoadMoreActive: true,
    selectedType: null
  };

  componentDidMount() {
    Promise.all([
      pockemonApi
        .getAllTypes()
        .then(types => this.setState({ allTypes: types })),
      pockemonApi.getAll().then(pokemons => {
        this.setState({
          pokemons
        });
      })
    ]);
  }

  handleLoadMore = () => {
    this.setState({ isLoadMoreActive: false });
    fetch(this.state.loadMoreUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          selectedCard: false,
          loadMoreUrl: data.next
        });
        return Promise.all(
          data.results.map(result => pockemonApi.getOne(result.url))
        );
      })
      .then(pokemons => {
        this.setState(prevState => {
          return {
            pokemons: [...prevState.pokemons, ...pokemons],
            isLoadMoreActive: true
          };
        });
      });
  };

  handleOpenDetailes = pokemon => () => {
    this.setState({
      selectedCard: true,
      details: {
        imgUrl: pokemon.imgUrl,
        name: pokemon.name,
        stats: pokemon.stats,
        weight: pokemon.weight,
        types: pokemon.types,
        totalMoves: pokemon.totalMoves
      }
    });
  };

  handleChange = () => event => {
    const type = event.target.value;
    if (type === "All") {
      pockemonApi.getAll().then(pokemons => {
        this.setState({
          pokemons,
          selectedType: type,
          isLoadMoreActive: true,
          selectedCard: false,
          loadMoreUrl: "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12"
        });
      });
    } else {
      pockemonApi.getPokemonsByType(type).then(pokemons => {
        console.log(pokemons.length);
        this.setState({
          pokemons,
          isLoadMoreActive: false,
          selectedCard: false,
          loadMoreUrl: "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12"
        });
      });
    }
  };

  render() {
    const { selectedType,pokemons, selectedCard, isLoadMoreActive, allTypes } = this.state;
    return (
      <>
        <h1 className="mt-4 mb-4 text-center">Pokedex</h1>
        <div className="row ">
          <TypeSelection types={allTypes} changeType={this.handleChange} />
        </div>
        <div className="row ">
          <div className="col-8 col-lg-8">
            <div className="row">
              {pokemons.map((pokemon, i) => {
                return (
                  <PokeCard
                    key={i}
                    pokemon={pokemon}
                    openDetailes={this.handleOpenDetailes}
                  />
                );
              })}
            </div>
            {selectedType === null || selectedType === "All" ? (
              <div className="row justify-content-center">
                {isLoadMoreActive ? (
                  <button
                    onClick={this.handleLoadMore}
                    type="button"
                    className="btn btn-primary pl-5 pr-5"
                  >
                    Load More
                  </button>
                ) : (
                  "Loading..."
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-4 col-lg-4">
            {selectedCard && <PokeDetailes details={this.state.details} />}
          </div>
        </div>
      </>
    );
  }
}

export default PokeDashboard;
