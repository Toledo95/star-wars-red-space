import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Yoda from './Yoda';
import DarthVader from './DarthVader';
import Luke from './Luke';
import Leia from './Leia';
import HanSolo from './HanSolo';
import Boba from './Boba';


const cards = [
  { id : 20 , element : <Yoda/> },
  { id : 4 , element : <DarthVader/> },
  { id : 1 , element : <Luke/> },
  { id : 5 , element : <Leia/> },
  { id : 14 , element : <HanSolo/> },
  { id : 22 , element : <Boba/> },
];

function Characters() {
  
  return (
        <div className="character-container">
            {cards.map((current)=>{
              return (
                <div className="card" key={current.id}>
                  <Link to={ `/character/${current.id}` }>{current.element}</Link>
                </div>
              );
            })}
        </div>
    );
}

export default Characters;
