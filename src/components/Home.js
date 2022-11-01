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

const Home = () => {

  const [dog,setDog] = useState("");
  const [perroarrepentido, setPerroArrepentido] = useState("");
  const [perrorechazo, setPerroRechazo] = useState([]);
  const [perroacepto, setPerroAcepto] = useState([]);
  let estilo = { backgroundColor: "red" };

  const cargarPerro = () => {
     axios.get("https://dog.ceo/api/breeds/image/random").then(
      (response) => {
        setDog(response.data.message);
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
  setPerroRechazo(previousState => [...previousState, dog]);
  setPerroArrepentido("izquierda");
  cargarPerro();
}
const moverPerroDerecha =() => {
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
            height: 400,
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
          borderColor: "blue",
          alignItems:"center",
          justifyContent:"center"
          }}
        >
          <Grid item
          sx={{
            mt: 2,
            height: 'auto',
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
            borderColor: "blue",
            alignItems:"center",
            justifyContent:"center"
          }}>
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


          <Grid item
          sx={{
            mt: 2,
            height: '400',
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
            borderColor: "blue",
          }}>
            {
              <div>
              <img src={dog}
              width='200' 
              height='200'/>
              <button onClick={moverPerroIzquierda}>  Mover el Perro
              </button>
              <button onClick={moverPerroDerecha}>  Mover el Perro derecha
              </button>
              <button onClick={arrepentirPerro}>  Arrepentido Perro
              </button>
              </div>
              }
          </Grid>

          <Grid item
          sx={{
            mt: 2,
            height: 'auto',
            overflow: "hidden",
            overflowY: "scroll",
            border: 1,
            borderColor: "blue",
          }}>
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
    </Container>
    
  );
};
export default Home;
