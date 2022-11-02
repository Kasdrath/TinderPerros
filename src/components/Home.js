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

const Home = () => {

  const [dog,setDog] = useState("");
  const [nombrePerro, setNombre] = useState("");
  const [perroarrepentido, setPerroArrepentido] = useState("");
  const [perrorechazo, setPerroRechazo] = useState([]);
  const [perroacepto, setPerroAcepto] = useState([]);
  const [disable, setDisable] = useState("");
  let estilo = { backgroundColor: "red" };

  const cargarPerro = () => {
    console.log(dog);
     axios.get("https://dog.ceo/api/breeds/image/random").then(
      (response) => {
        setDog(response.data.message);
        setNombre(stringGen());
        setDisable(false);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    cargarPerro();
}, []);

const moverPerroIzquierda =() => {
  setDisable(true);
  setPerroRechazo(previousState => [...previousState, dog]);
  setPerroArrepentido("izquierda");
  cargarPerro();
}
const moverPerroDerecha =() => {
  setDisable(true);
  setPerroAcepto(previousState => [...previousState, dog]);
  setPerroArrepentido("derecha");
  cargarPerro();
}
const arrepentirPerro =() => {
  if (perroarrepentido === "izquierda")
  {
    setPerroAcepto(previousState => [...previousState, perrorechazo[perrorechazo.length-1]]);
    setPerroRechazo(perrorechazo.slice(0, -1));
    setPerroArrepentido("derecha");
  }
  else if(perroarrepentido === "derecha")
  {
    setPerroRechazo(previousState => [...previousState, perroacepto[perroacepto.length-1]]);
    setPerroAcepto(perroacepto.slice(0, -1));
    setPerroArrepentido("izquierda");
  }
}

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
          height: 500,
          overflowY: "scroll",
        }}
      >
        <Grid item md={6}
          container
          spacing={1}
          sx={{
            mt: 2,
            height: 400,
            overflow: "hidden",
            overflowY: "scroll",
          alignItems:"center",
          justifyContent:"center"
          }}>
          <Grid item xs={4}

          sx={{
            mt: 2,
            height: 'auto',
            overflow: "hidden",
            overflowY: "scroll",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <Typography style={{fontSize: 14}} backgroundColor="white" borderColor="grey" border={1} color="black" textAlign="center">Perros Rechazados</Typography>
            {perrorechazo.map(function (perro, index)
            {
              return[
                <img src={perro}
                width='100' 
                height='100'/>,
                <br/>
              ];
            })
            }
          </Grid>


          <Grid item xs={4}
          sx={{
            mt: 2,
            height: '400',
            overflow: "hidden",
            overflowY: "scroll"
          }}>
            <Card>
              <CardContent>
                <Typography style={{fontSize: 14}} color="black" textAlign="center">
                  {nombrePerro}
                </Typography>
                {<img src={dog} width='200' height='200'/>}
                
              </CardContent>
            </Card>
              {<button onClick={moverPerroIzquierda} disabled={disable}>  Rechazar Perro </button>}
              {<button onClick={moverPerroDerecha} disabled={disable}>  Aceptar Perro </button>}
              {<button onClick={arrepentirPerro} disabled={disable}>  ¡Me arrepentí de mi última elección! </button>}
          </Grid>

          <Grid item xs={4}
          sx={{
            mt: 2,
            height: 'auto',
            overflow: "hidden",
            overflowY: "scroll"
          }}>
            <Typography style={{fontSize: 14}} backgroundColor="white" borderColor="grey" border={1} color="black" textAlign="center">Perros Aceptados</Typography>
            {perroacepto.map(function (perro, index)
            {
              return[
                <img src={perro}
                width='100' 
                height='100'/>,
                <br/>
              ];
            })
            }
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
