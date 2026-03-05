import {api} from "@/lib/api/axios";
import { Country } from "@/types/country";

export const getAllCountries = async (): Promise<Country[]> => {
    const { data } = await api.get<Country[]>("/all", {
        params: {
            fields: "name,flag"
        }
    })

    return data;
}

export const getCountryByName = async (name: string): Promise<Country> => {

    const safeName = encodeURIComponent(name) // Pongo esto por si hay letras rarillas

    const { data } = await api.get<Country[]>(`/name/${safeName}`, {
        params: {
            fields: "name,flag,capital,region,population,languages"
        }
    })

    if (!data.length) throw new Error("El pais no existe");

    return data[0]
}

