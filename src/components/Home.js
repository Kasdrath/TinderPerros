import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios";

const Home = () => {

  const [dog, setDog] = useState("");
  const [nombrePerro, setNombre] = useState("");
  const [perroarrepentido, setPerroArrepentido] = useState("");
  const [perrorechazo, setPerroRechazo] = useState([]);
  const [perroacepto, setPerroAcepto] = useState([]);
  const [disable, setDisable] = useState("");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const moverPerroIzquierda = () => {
    setDisable(true);
    setPerroRechazo(previousState => [...previousState, dog]);
    setPerroArrepentido("izquierda");
    cargarPerro();
  }
  const moverPerroDerecha = () => {
    setDisable(true);
    setPerroAcepto(previousState => [...previousState, dog]);
    setPerroArrepentido("derecha");
    cargarPerro();
  }
  const arrepentirPerro = () => {
    setDisable(true);
    if (perroarrepentido === "izquierda") {
      setPerroAcepto(previousState => [...previousState, perrorechazo[perrorechazo.length - 1]]);
      setPerroRechazo(perrorechazo.slice(0, -1));
      setPerroArrepentido("derecha");
      setDisable(false);
    }
    else if (perroarrepentido === "derecha") {
      setPerroRechazo(previousState => [...previousState, perroacepto[perroacepto.length - 1]]);
      setPerroAcepto(perroacepto.slice(0, -1));
      setPerroArrepentido("izquierda");
      setDisable(false);
    }
  }

  function stringGen(len = 6) {
    let alphanumeric =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = new Array();

    for (let i = 0; i < len; i++) {
      let index = Math.floor(Math.random() * alphanumeric.length);
      code.push(alphanumeric.charAt(index));
    }

    code = code.join("")
    return code;
  }

  return (
    <Container fixed sx={{ height: 1 }}>
      <Box
        sx={{
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
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Grid item xs={4}
            sx={{
              mt: 2,
              height: 'auto',
              overflow: "hidden",
              overflowY: "scroll",
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Typography style={{ fontSize: 14 }} backgroundColor="white" borderColor="grey" border={2} color="black" textAlign="center">Perros Rechazados</Typography>
            {perrorechazo.map(function (perro, index) {
              return [
                <img src={perro}
                  width='100'
                  height='100'
                  alt="perros rechazados" />,
                <br />
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
              {disable && "Cargando"}
              <CardContent>
                <Typography style={{ fontSize: 14 }} color="black" textAlign="center">
                  {nombrePerro}
                </Typography>
                {<img src={dog} width='200' height='200' alt="perros postulantes" />}

              </CardContent>
            </Card>
            <IconButton
              onClick={moverPerroIzquierda}
              disabled={disable}
            >
              <ThumbDownIcon />
            </IconButton>
            <IconButton
              onClick={moverPerroDerecha}
              disabled={disable}
            >
              <ThumbUpIcon />
            </IconButton>
            {<button onClick={moverPerroIzquierda} disabled={disable}>  Rechazar Perro </button>}
            {<button onClick={moverPerroDerecha} disabled={disable}>  Aceptar Perro </button>}
            {<button onClick={arrepentirPerro} disabled={disable}>  !Me arrepentí de mi última elección! </button>}
          </Grid>

          <Grid item xs={4}
            sx={{
              mt: 2,
              height: 'auto',
              overflow: "hidden",
              overflowY: "scroll"
            }}>
            <Typography style={{ fontSize: 14 }} backgroundColor="white" borderColor="grey" border={2} color="black" textAlign="center">Perros Aceptados</Typography>
            {perroacepto.map(function (perro, index) {
              return [
                <img src={perro}
                  width='100'
                  height='100'
                  alt="perros aceptados" />,
                <br />
              ];
            })
            }
          </Grid>


        </Grid>
      </Box>
    </Container >

  );
};
export default Home;
