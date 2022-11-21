import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Collapse,
  CircularProgress,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PerroQuery, { buscarInfoQuery, useBuscarInfoQuery } from "../Queries/PerroQuery";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Home = () => {
  const [auxx, setAuxx] = useState("");
  const [perrorechazo, setPerroRechazo] = useState([]);
  const [perroacepto, setPerroAcepto] = useState([]);
  const [disablex, setDisable] = useState("");
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    data: dog,
    isLoading: cargando,
    refetch: cargarPerro,
    isError: errors,
    isRefetching: disable,
  } = useBuscarInfoQuery(auxx);


  const moverPerroIzquierda = () => {
    setDisable(true);
    setPerroRechazo(previousState => [dog, ...previousState]);
    cargarPerro();
    console.log("valr", dog.expandex);

  }
  const moverPerroDerecha = () => {
    setDisable(true);
    setPerroAcepto(previousState => [dog, ...previousState]);
    cargarPerro();
  }
  const arrepentirPerroAcepto = (index) => {
    setDisable(true);
    //setPerroRechazo(previousState => [...previousState, perroacepto[index]]);
    setPerroRechazo(previousState => [perroacepto[index], ...previousState]);
    let tmpAcepto = [...perroacepto];
    tmpAcepto.splice(index, 1);
    setPerroAcepto(tmpAcepto);
    setDisable(false);
  }
  const arrepentirPerroRechazo = (index) => {
    setDisable(true);
    //setPerroAcepto(previousState => [...previousState, perrorechazo[index]]);
    setPerroAcepto(previousState => [perrorechazo[index], ...previousState]);
    let tmpRechazo = [...perrorechazo];
    tmpRechazo.splice(index, 1);
    setPerroRechazo(tmpRechazo);
    setDisable(false);
  }

  const expandedRechazo = (index) => {
    /*console.log("valror despues ", dog.expandex);
    console.log(index);
    console.log("entrada  ", perrorechazo[index].expandex);
    perrorechazo[index].expandex = !perrorechazo[index].expandex;
    console.log("salida  ", perrorechazo[index].expandex);
    console.log("valror despuesxxx ", dog.expandex);*/
  }
  const expandedAcepto = (valorexpanded) => {
    dog.expandex = !valorexpanded;
    return dog.expandex;
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
            height: 500,
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
            <Card>
              {disable && <CircularProgress />}

              <CardContent>
                <CardHeader title={dog && dog.nombre} />
                <CardMedia
                  component="img"
                  height="250"
                  image={dog && dog.foto} />
              </CardContent>
              <CardActions>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Mostrar más"
                >

                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{dog && dog.descripcion}</Typography>
                </CardContent>
              </Collapse>
            </Card>
            <Box textAlign='center'>
              <IconButton
                onClick={moverPerroIzquierda}
                disabled={disable}
              >
                <ThumbDownIcon sx={{
                  color: "red",
                }} />
              </IconButton>
              <IconButton
                onClick={moverPerroDerecha}
                disabled={disable}
              >
                <ThumbUpIcon sx={{
                  color: "green",
                }} />
              </IconButton>
            </Box>

          </Grid>


          <Grid item xs={4}
            sx={{
              mt: 2,
              height: '400',
              overflow: "hidden",
              overflowY: "scroll"
            }}>
            <Typography style={{ fontSize: 14 }} backgroundColor="white" borderColor="grey" border={2} color="black" textAlign="center">Perros Aceptados</Typography>
            {perroacepto.map(function (dog, index) {
              return [
                <Card>
                  <CardContent>
                    <CardHeader title={dog.nombre} />
                    <CardMedia
                      component="img"
                      height="200"
                      image={dog.foto} />
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="¡Me arrepentí!" key={dog} onClick={() => arrepentirPerroAcepto(index)}>
                      <ThumbDownIcon sx={{
                        color: "red",
                      }} />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="Mostrar más">
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{dog.descripcion}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              ];
            })
            }

            {/*<button onClick={moverPerroIzquierda} disabled={disable}>  Rechazar Perro </button>*/}
            {/*<button onClick={moverPerroDerecha} disabled={disable}>  Aceptar Perro </button>*/}

          </Grid>

          <Grid item xs={4}
            sx={{
              mt: 2,
              height: 'auto',
              overflow: "hidden",
              overflowY: "scroll"
            }}>
            <Typography style={{ fontSize: 14 }} backgroundColor="white" borderColor="grey" border={2} color="black" textAlign="center">Perros Rechazados</Typography>
            {perrorechazo.map(function (dog, index) {
              return [

                <Card>
                  <CardContent>
                    <CardHeader title={dog.nombre} />
                    <CardMedia
                      component="img"
                      height="200"
                      image={dog.foto} />
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="¡Me arrepentí!" key={dog} onClick={() => arrepentirPerroRechazo(index)}>
                      <ThumbUpIcon sx={{
                        color: "green",
                      }} />
                    </IconButton>
                    <ExpandMore
                      //key={index}
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="Mostrar más"
                    >

                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{dog.descripcion}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
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
