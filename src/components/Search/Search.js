import React from "react";
import { Input, Control, Field, Button } from "../Form/index";

const Search = () => {
  const doSubmit = () => {
    alert("Se ha apretado!");
  };

  return (
    <div className="section">
      <div className="container">
        <Field addons={true}>
          <Control expanded={true}>
            <Input size="l" inputType="text">
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
    </div>
  );
};

export default Search;
