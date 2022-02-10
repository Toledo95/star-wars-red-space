import { Request, Response } from "express";
import { getWorld, getSpecies, getFilms } from "../utils/functions";
const swapi = require('swapi-node');

export const index = async (_: Request, res: Response): Promise<void> => {
    res.send({
        "test": "It works!",
    });
};


export const getCharacter = async (_: Request, res: Response): Promise<void> => {
    try{
        swapi.people({ id: _.params.id }).then(async (result:any) => {
            const planet= await getWorld(result);
            const species= await getSpecies(result);
            const films= await getFilms(result);
            const character = {
                name: result?.name,
                height: result?.height,
                mass: result?.mass,
                hair_color: result?.hair_color,
                skin_color: result?.skin_color,
                eye_color: result?.eye_color,
                birth_year: result?.birth_year,
                gender: result?.gender,
                planet: planet,
                species: species,
                films: films,
            };

            res.send(character);
        }).catch((error:any)=>{
            res.status(404).send('error');
        });
    }catch(error){
        res.status(500).send('error');
    }
    
};

