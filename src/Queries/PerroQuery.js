import { useQuery, queryCache } from "@tanstack/react-query";
import axios from "axios";
import { loremIpsum } from "lorem-ipsum";



export function useBuscarInfoQuery(auxx) {
    return useQuery(["buscarInfoQuery", auxx], buscarInfoQuery, {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
    });
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

export const buscarInfoQuery = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    let perro = {
        foto: data.message,
        nombre: stringGen(),
        descripcion: loremIpsum(),
        expandex: false
        ////////////////////////
    }
    return perro;
};
