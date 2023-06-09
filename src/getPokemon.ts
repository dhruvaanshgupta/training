import fetch from "node-fetch";

export interface PokemonList{
    count : number;
    next : string;
    previous?: any;
    results : {
        name : string;
        url : string;
    }[];
}

export interface Pokemon{
    id: number;
    name : string;
    stats : {
        base_stat : number;
        effort : number;
        stat:{
            name: string;
            url : string;
        };
    }[];
}


export const getPokemonList =async () : Promise<PokemonList> => {
    const listRes = await fetch("https://pokeapi.co/api/v2/pokemon/");
    return await listRes.json();
}


export const getPokemon =async (url:string) : Promise<Pokemon> => {
    const dataRes = await fetch(url);
    return await dataRes.json();
}

export const getFirstPokemon =async () : Promise<Pokemon> => 
    new Promise(async (resolve, reject)=>{
        try {
            
            const list = await getPokemonList();
            console.log("getting the list.");
            resolve(await getPokemon(list.results[0].url));
        } catch (error) {
            reject(error);
        }
        
    });
