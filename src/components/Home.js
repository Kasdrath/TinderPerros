import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
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
    axios.get("Access-Control-Allow-Origin: https://dog.ceo/dog-api/").then(
      (response) => {
        setListadoOriginal(response.data.results);
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
    /*<Container fixed sx={{ height: 1 }}>
      <Box
        sx={{
          border: 1,
          borderColor: "red",
          height: 500,
          overflowY: "scroll",
        }}
      >
        <Grid item md={6}
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
        > {stringGen()}
          <Grid item md={6}
          sx={{
            mt: 2,
            height: 150,
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
          borderColor: "blue",
          }}> {stringGen()}
            {<img src="https://dog.ceo/api/breeds/image/random"/>}
          </Grid>
        </Grid>
      </Box>
    </Container>*/
    <Grid container spacing={2}>
      <Grid item xs={4}
      sx={{
        mt: 2,
        height: 150,
        overflow: "hidden",
        overflowY: "scroll",
        border: 1,
      borderColor: "red",
      }}>
        <Container>xs=4</Container>
      </Grid>
      <Grid item xs={4}
      sx={{
        mt: 2,
        height: 150,
        overflow: "hidden",
        overflowY: "scroll",
        border: 1,
      borderColor: "blue",
      }}>
        <Container>
          <Card style={{backgroundColor: "yellow"}}>
            <CardContent>
              <Typography style={{fontSize: 14}} color="textSecondary" textAlign="center">
                {stringGen()}
              </Typography>
              {<img src="https://dog.ceo/api/breeds/image/random"/>}
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Grid item xs={4}
      sx={{
        mt: 2,
        height: 150,
        overflow: "hidden",
        overflowY: "scroll",
        border: 1,
      borderColor: "red",
      }}>
        <Container>xs=4</Container>
      </Grid>
    </Grid>
  );
};
export default Home;
