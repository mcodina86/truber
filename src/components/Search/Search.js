import React, { useRef, useState } from "react";
import { Input, Control, Field, Button } from "../Form/index";
import axios from "axios";

const Search = props => {
  const txt = useRef(null);
  const [taxis, setTaxis] = useState([]);

  const doSubmit = () => {
    const val = txt.current.value;
    let url = "//gobiernoabierto.cordoba.gob.ar/api/v2/transporte-publico/taxis/";
    if (val) url += `?q=${val}`;
    axios
      .get(url)
      .then(response => {
        const { data } = response;
        const list = data.results.map(taxi => {
          return {
            titular: taxi.titular,
            patente: taxi.patente
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
            <Input size="l" inputType="text" ref={txt}>
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

      <div className="container">
        {taxis.length > 0 ? (
          <ul>
            {taxis.map(taxi => (
              <li key={taxi.patente}>{taxi.titular}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
