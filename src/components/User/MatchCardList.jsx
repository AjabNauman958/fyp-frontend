import React, { useState, useEffect } from 'react';
import '../css/MatchCard.css';
import pz from '../images/pz.png';
import lq from '../images/lq.png';
import IND from '../images/india.png';
import AUS from '../images/aus.png';
import PAK from '../images/pak.png';
import ENG from '../images/eng.png';
import PropTypes from 'prop-types';


const MatchCardList = ({ league }) => {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/matches/${league}`)
      .then((response) => response.json())
      .then((data) => {
        setMatchData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMatchData([]);
      });
  }, [league]);
  
  if (!matchData[league]) {
    return <div>No matches available for the selected league.</div>;
  }

  return (
    <div className="flex mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {matchData[league].map((matchDetails, index) => (
        <div key={index} className="match-card">
          <div className="header">
            <h2>{matchDetails.matchNumber} . {matchDetails.league}, 2024</h2>
            <div className="badge">{matchDetails.format}</div>
          </div>
          <div className="teams">
            {matchDetails.teams.map((team, teamIndex) => (
              <div className="team" key={teamIndex}>
                <img src={team.logo} alt={team.name} />
                <span>{team.name}</span>
              </div>
            ))}
          </div>
          <div className="time">{matchDetails.time}</div>
          <button className="action-button">Match Center &gt;</button>
        </div>
      ))}
    </div>
  );
};

MatchCardList.propTypes = {
  league: PropTypes.oneOf(['recent', 'upcoming', 'series', 'worldcup', 'psl', 'ipl', 'bigbash']).isRequired,
};

MatchCardList.defaultProps = {
  league: 'recent',
};

export default MatchCardList;
