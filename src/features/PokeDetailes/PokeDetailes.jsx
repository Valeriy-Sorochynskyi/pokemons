import React, { Component } from "react";

class PokeDetailes extends Component {
  render() {
    const { detailes, capitalize } = this.props;
    const name = capitalize(detailes.name);
    return (
      <div className="row justify-content-center sticky-top">
        <div className="col-10">
          <div className="card card-with-detailes">
            <img
              src={detailes.imgUrl}
              className="card-img-top"
              alt={detailes.name}
            />
            <div className="row justify-content-center">
              <h5 className="card-title">{name}</h5>
            </div>
            <div>
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>{detailes.types.join(" ")}</td>
                  </tr>
                  {detailes.stats.map(item => {
                    return (
                      <tr key={item.statName}>
                        <td>{capitalize(item.statName)}</td>
                        <td>{item.stat}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Weight</td>
                    <td>{detailes.weight}</td>
                  </tr>
                  <tr>
                    <td>Total moves</td>
                    <td>{detailes.totalMoves}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokeDetailes;
