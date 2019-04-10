// home page, with 2 large images, 3 thumbnails and description of website
import React from 'react';
const Home = (props) => {
    return (
        <div className="main-content">
            <div className="container">
                <h2>{props.title}</h2>
                <div className="home-image"></div>
                <div className="thumbnail-container">
                    <div className="home-thumbnail-1"></div>
                    <div className="home-thumbnail-2"></div>
                    <div className="home-thumbnail-3"></div>
                </div>
            </div>
            <p>Let's React and have a Brexit Premier League football game. 
                Squad of UK vs EU+ players from the PL 2019. 
                Plus possible hosting venues for the game.
                Request your local MP to take it to Parliament and 
                make this game a reality. We need a football Brexit game.
                Players chosen based on the highest current points 
                in https://fantasy.premierleague.com/
            </p></div> 
    );}
export default Home;