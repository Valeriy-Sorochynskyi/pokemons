import React, { Component } from "react";

class PokeCard extends Component {
  render() {
    const { name, imgUrl, types, openDetailes, capitalize } = this.props;
    const UpName = capitalize(name);
    return (
      <div
        onClick={openDetailes(this.props)}
        className="col-lg-4 col-md-4 col-sm-6 col-8 mb-3"
      >
        <div className="card cardwidth ">
          {imgUrl ? (
            <img src={`${imgUrl}`} className="card-img-top" alt={name} />
          ) : (
            "Loding..."
          )}
          <div className="card-body">
            <div className="row justify-content-center">
              {/* <p className="card-text mb-2">{name.toUpperCase()}</p> */}
              <h5 className="card-title">{UpName}</h5>
            </div>
            <div className="row justify-content-center">
              {types.map((type, i) => {
                return (
                  <span key={i} className="badge">
                    {type}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
