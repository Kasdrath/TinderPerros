import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const Poke = ({ pokemon, estilo = null, funcion = null }) => {
  /**poke recibe 3 elementos, el pokemon, el estilo y funcion, estilo y funcion pueden ser nullables, esto 
  significa que en caso de que no venga con un valor desde el componente padre, este tomará un valod por defecto el cual será
  null.
   */

  function stringGen(len = 6) {
    let alphanumeric =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = new Array();

    for(let i=0; i<len; i++){
      let index = Math.floor(Math.random() * alphanumeric.length);
      code.push(alphanumeric.charAt(index));
    }

    code = code.join("")
    return code;
  }

  return (
    <Card sx={estilo}>
      <CardContent>{pokemon.name}</CardContent>
      <Typography>${stringGen()}</Typography>
      <CardActions>
        {funcion && <Button onClick={() => funcion(pokemon)}>acción </Button>}
      </CardActions>
    </Card>
  );
};

export default Poke;
