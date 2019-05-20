import React from "react";

const TypeSelection = props => {
  const { types, changeType } = props;
  return (
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Types of pokemons</label>
      <select onChange={changeType()} id="inputState" className="form-control">
        <option defaultValue>All</option>
        {types.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelection;
