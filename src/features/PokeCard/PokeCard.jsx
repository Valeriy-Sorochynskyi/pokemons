import React, { Component } from "react";
import capitalize from '../../app/services/capitalize';

class PokeCard extends Component {
  render() {
    const { openDetailes, pokemon } = this.props;
    const name = capitalize(pokemon.name);
    return (
      <div
        onClick={openDetailes(pokemon)}
        className="col-lg-4 col-md-4 col-sm-6 col-8 mb-3"
      >
        <div className="card card-color">
          {pokemon.imgUrl ? (
            <img
              src={pokemon.imgUrl}
              className="card-img-top"
              alt={pokemon.name}
            />
          ) : (
            "Loding..."
          )}
          <div className="card-body">
            <div className="row justify-content-center">
              <h5 className="card-title">{name}</h5>
            </div>
            <div className="row justify-content-center">
              {pokemon.types.map(type => (
                <span key={type} className="badge">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
