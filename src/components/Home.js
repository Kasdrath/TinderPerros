import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import Poke from "./Poke";

const Home = () => {

  const [listadoOriginal, setListadoOriginal] = useState([]);//Quizas cambiarle los nombres a las listas?
  const [listadoAuxiliar, setListadoAuxiliar] = useState([]);
  const [listadoSeleccionado, setListadoSeleccionado] = useState([]);

  //const [buscador, setBuscador] = useState("");
  const [errors, setErrors] = useState(false);

  let estilo = { backgroundColor: "red" };

  const cargarPerros = () => {
    //https://dog.ceo/dog-api/
    //https://dog.ceo/api/breeds/image/random
    axios.get("Access-Control-Allow-Origin: https://dog.ceo/api/breeds/image/random").then(
      (response) => {
        setListadoOriginal(response.data.message);
      },
      (error) => {
        console.log(error);
      }
    );
  };

 /**  const handleInputChange = (event) => {
    setBuscador(event.target.value);
  }*/



  useEffect(() => {
    cargarPerros();
  }, []);

  

  return (
    <Container fixed sx={{ height: 1 }}>
      <Box
        sx={{
          border: 1,
          borderColor: "red",
          height: 500,
          overflowY: "scroll",
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            mt: 2,
            height: 300,
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
          borderColor: "red",
          }}
        >
          <Grid item md={6}
          sx={{
            mt: 2,
            height: 150,
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
          borderColor: "blue",
          }}>
            {listadoOriginal.map((element, index) => (
              <Poke pokemon={element} key={index} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
};
export default Home;
