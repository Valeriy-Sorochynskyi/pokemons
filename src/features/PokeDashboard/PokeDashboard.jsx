import React, { Component } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokeDetailes from "../PokeDetailes/PokeDetailes";
import pockemonApi from "../../app/services/pokemonApi";

class PokeDashboard extends Component {
  state = {
    pokemons: [],
    loadMoreUrl: "https://pokeapi.co/api/v2/pokemon?offset=12&limit=12",
    selectedCard: false,
    detailes: {},
    isLoadMoreActive: true
  };

  componentDidMount() {
    pockemonApi.getAll().then(pokemons => {
      this.setState({
        pokemons
      });
    });
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
          data.results.map(result => {
            return pockemonApi.getOne(result.url);
          })
        );
      })
      .then(pokemons => {
        this.setState(prevState => {
          return {
            ...prevState,
            pokemons: [...prevState.pokemons, ...pokemons],
            isLoadMoreActive: true,
          };
        });
      });
  };

  handleOpenDetailes = detailes => () => {
    this.setState({
      selectedCard: true,
      detailes: detailes
    });
  };

  render() {
    const { pokemons, selectedCard, isLoadMoreActive } = this.state;
    return (
      <>
        <div className="row justify-content-center">
          <h1>Pokedex</h1>
        </div>
        <div className="row row justify-content-center">
          <div className="col-6 col-lg-6">
            <div className="row justify-content-center">
              {pokemons.map(pokemon => {
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
                );
              })}
            </div>
            <div className="row justify-content-center">
              {isLoadMoreActive ? (
                <button
                  onClick={this.handleLoadMore}
                  type="button"
                  className="btn btn-primary col-8"
                >
                  Load More
                </button>
              ) : 'Loading...'}
            </div>
          </div>
          <div className="col-6 col-lg-4">
            {selectedCard && <PokeDetailes detailes={this.state.detailes} />}
          </div>
        </div>
      </>
    );
  }
}

export default PokeDashboard;
