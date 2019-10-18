import React, { useRef, useState, useEffect } from "react";
import { Input, Control, Field, Button } from "../Form/index";
import SearchTable from "./SearchTable";
import axios from "axios";

const Search = props => {
  const txt = useRef(null);
  const [taxis, setTaxis] = useState(false);
  const [totalSearch, setTotalSearch] = useState(0);
  const [pageSize, setPageSize] = useState(50);

  useEffect(() => {
    txt.current.addEventListener("keyup", function(ev) {
      if (ev.key === "Enter") {
        doSubmit();
      }
      return;
    });
  }, []);

  const doSubmit = () => {
    const val = txt.current.value;
    let url = "//gobiernoabierto.cordoba.gob.ar/api/v2/transporte-publico/taxis/";
    if (val) url += `?q=${val}`;
    axios
      .get(url)
      .then(response => {
        const { data } = response;
        setTotalSearch(data.count);
        if (data.total > data.results.length) setPageSize(data.results.length);
        const list = data.results.map(taxi => {
          const { titular, patente, marca, modelo_vehiculo, anio_fabricacion, estado, CUIT } = taxi;

          return {
            titular: { nombre: titular, CUIT },
            auto: { marca, patente, modelo: modelo_vehiculo, anio: anio_fabricacion },
            estado
          };
        });
        setTaxis(list);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="section">
      <div className="container">
        <Field addons={true}>
          <Control expanded={true}>
            <Input size="l" ref={txt}>
              Chapa, conductor, auto...
            </Input>
          </Control>
          <Control>
            <Button size="l" color="info" action={doSubmit}>
              Buscar
            </Button>
          </Control>
        </Field>
      </div>

      <div className="container search-results">
        {taxis ? (
          <div>
            <p>{totalSearch === 0 ? "Sin resultados." : `Total: ${totalSearch}. Mostrando: ${pageSize > totalSearch ? totalSearch : pageSize}`}</p>
            {totalSearch > 0 ? <SearchTable data={taxis}></SearchTable> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
