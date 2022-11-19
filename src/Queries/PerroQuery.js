import { useQuery, queryCache } from "@tanstack/react-query";
import axios from "axios";

export function useBuscarInfoQuery(auxx) {
    return useQuery(["buscarInfoQuery", auxx], buscarInfoQuery, {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true,
    });
}

export const buscarInfoQuery = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    //console.log(data.message);
    let perro = {
        foto: data.message,
        nombre: "abc",
        descripcion: "abcd"
    }
    return perro;
};
