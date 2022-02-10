const axios = require('axios').default;

export async function getWorld(character: any): Promise<any>{
    return new Promise(resolve => {
            
        character.getHomeworld().then((resultHome:any) => {
                resolve({
                    title:resultHome?.name,
                    terrain:resultHome?.terrain,
                    population:resultHome?.population,
                });
            }).catch(()=>{
                resolve({});
            });
      });
}

async function getSpecie(specie:string ){
    return new Promise(async resolve => {
        const response = await axios.get(specie);
        resolve({
            name:response.data?.name,
            average_lifespan:response.data?.average_lifespan,
            classification:response.data?.classification,
            language:response.data?.language,
        });
    });
}

export async function getSpecies(character:any): Promise<any[]>{
    return new Promise(async resolve => {
        const speciesArray:any[]=[];
        for (const specie of character.species) {
            const spicieData = await getSpecie(specie);
            speciesArray.push(spicieData);
        }
        resolve(speciesArray);
      });
}

async function getFilm(specie:string ){
    return new Promise(async resolve => {
        const response = await axios.get(specie);
        resolve({
            title:response.data?.title,
            director:response.data?.director,
            producer:response.data?.producer,
            release_date:response.data?.release_date,
        });
    });
}

export async function getFilms(character:any): Promise<any[]>{
    return new Promise(async resolve => {
        const filmsArray:any[]=[];
        for (const film of character.films) {
            const filmData = await getFilm(film);
            filmsArray.push(filmData);
        }
        resolve(filmsArray);
      });
}

