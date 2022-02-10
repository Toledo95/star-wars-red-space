import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Loader from '../Loader';
import NotFound from '../NotFound';
import Footer from '../Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';
const BASE_URL = process.env.REACT_APP_BASE_URL || '';

function Character() {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        setError(false);
        setLoading(true);
        axios.get(`${BASE_URL}/api/star-wars/${id}`)
        .then(function (response) {
            setData(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setError(true);
            setLoading(false);
        })
    }, [id]);
    if(loading){
        return  (
            <>
                <Header/>
                <Loader/>
                <Footer/>
            </>
        );
    }
    if(error){
        return  (
            <>
                <NotFound/>
            </>
        );
    }
    return (
      <div className={ Number(id)===4 ? 'darth-header': '' } >
        <Header/>
        <div className="container-character">
            { data.name && <section><strong>Name</strong> { data.name }</section> }
            { data.height && <section><strong>Heigth</strong> { data.height }</section> }
            { data.mass && <section><strong>Mass</strong> { data.mass }</section> }
            { data.hair_color && <section><strong>Hair Color</strong> { data.hair_color }</section> }
            { data.skin_color && <section><strong>Skin Color</strong> { data.skin_color }</section> }
            { data.eye_color && <section><strong>Eye Color</strong> { data.eye_color }</section> }
            { data.birth_year && <section><strong>Birth Year</strong> { data.birth_year }</section> }
            { data.male && <section><strong>Gender</strong> { data.male }</section> }
            { data.planet !=={} && 
                (
                    <section><strong>Planet</strong>
                        <ul>
                            { data.planet?.title && <li><strong>Title </strong> { data.planet?.title} </li> }
                            { data.planet?.terrain && <li><strong>Terrain: </strong> { data.planet?.terrain } </li> }
                            { data.planet?.population && <li><strong>Population: </strong> { data.planet?.population } </li> }
                        </ul>

                    </section>
                )
            }
            { data.especies?.length > 0 &&
            (
                <section><strong>Species</strong>
                    <ul>
                        {data.especies.map(( specie : any, index: any) => {
                            return (
                                <li  key={ index } >
                                    { specie.name && <strong>Name: </strong> } {specie?.name}
                                        <ul>
                                            { specie.average_lifespan && <li><strong> Average Life Span: </strong> {specie.average_lifespan} </li>}  
                                            { specie.classification && <li><strong> Classification: </strong> {specie.classification} </li>}
                                            { specie.language && <li><strong> Language: </strong> {specie.language} </li>}
                                        </ul>
                                        <br/>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}

            { data.films?.length > 0 &&
            (
                <section><strong>Films</strong>
                    <ul>
                        {data.films.map(( film : any, index: any) => {
                            return (
                                <li key={ index } >
                                    { film.title && <strong>Title: </strong> } { film?.title }
                                    <ul>
                                        { film.director && <li><strong> Director: </strong> { film.director } </li> }  
                                        { film.producer && <li><strong> Producer: </strong> { film.producer } </li> }
                                        { film.release_date && <li><strong> Release Date: </strong> { film.release_date } </li> }
                                    </ul>
                                    <br/>
                                </li>
                                
                            );
                        })}
                    </ul>
                </section>
            )}
        </div>
        <Footer/>
      </div>
    );
}

export default Character;
