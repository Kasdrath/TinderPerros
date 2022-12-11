import React from "react";
import { styled } from '@mui/material/styles';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography,
    CardMedia,
    Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

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

export default function ReviewCard(nombreP, descP, fotoP, style = null, funct = null) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const PerroCandidato = ({ nombre = nombreP, descripcion = descP, foto = fotoP, estilo = style, funcion = funct }) => {
        return (
            <Card sx={estilo}>
                <CardContent>
                    <CardHeader title={nombre} />
                    <CardMedia
                        component="img"
                        height="200"
                        image={foto} />
                </CardContent>
                <CardActions>
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
                        <Typography paragraph>{descripcion}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}
