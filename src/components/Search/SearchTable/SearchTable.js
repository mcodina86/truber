import React, { useState, useEffect } from "react";

const SearchTable = props => {
  const [taxis, setTaxis] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTaxis(props.data);
    setSelected(null);
  }, [props.data]);

  const updateSelected = patente => {
    const patenteToUse = patente === selected ? null : patente;
    setSelected(patenteToUse);
  };

  return (
    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>CUIT</th>
          <th>Auto</th>
          <th>Modelo</th>
          <th>Patente</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {taxis.map(taxi => (
          <tr key={taxi.auto.patente} className={selected === taxi.auto.patente ? "is-selected" : null} onClick={() => updateSelected(taxi.auto.patente)}>
            <td>{taxi.titular.nombre}</td>
            <td>{taxi.titular.CUIT}</td>
            <td>
              {taxi.auto.marca} {taxi.auto.modelo}
            </td>
            <td>{taxi.auto.anio}</td>
            <td>{taxi.auto.patente}</td>
            <td>{taxi.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchTable;
