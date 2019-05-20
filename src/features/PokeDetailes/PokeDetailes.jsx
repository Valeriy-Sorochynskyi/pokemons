import React from "react";
import capitalize from '../../app/services/capitalize';

const PokeDetailes = props => {
  const { details } = props;
  const name = capitalize(details.name);
  return (
    <div className="row justify-content-center sticky-top">
      <div className="col-10">
        <div className="card card-color">
          <img
            src={details.imgUrl}
            className="card-img-top"
            alt={details.name}
          />
          <div className="row justify-content-center">
            <h5 className="card-title">{name}</h5>
          </div>
          <div>
            <table className="table table-sm">
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{details.types.join(" ")}</td>
                </tr>
                {details.stats.map(item => {
                  return (
                    <tr key={item.statName}>
                      <td>{capitalize(item.statName)}</td>
                      <td>{item.stat}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>Weight</td>
                  <td>{details.weight}</td>
                </tr>
                <tr>
                  <td>Total moves</td>
                  <td>{details.totalMoves}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetailes;
