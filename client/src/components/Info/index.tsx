import React from 'react';
import './styles.css';

function Info() {
  return (
    <div className="main-info">
        <div className="fade"></div>

        <section className="star-wars">
        <div className="crawl">
            <div className="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
            </div>
            
            <p>It is a period of civil war. Rebel spaceships are awaiting in base to strike because they don't know where to. But the commanders from RED space have been found the right guy to bring information for the rebels.</p>
            
            <p>During the previous battle, Rebel spies managed to steal information from the Empire, Carlos Toledo is on his way to make a web page to release this information for the rebels.</p>

            <p>Pursued by the Empire’s sinister agents, Carlos Toledo manages to deploy this page in order to demonstrate his skills as a FullStack developer and gain the opportunity to save the galaxy...</p>
        </div>
        </section>
    </div>
  );
}

export default Info;
