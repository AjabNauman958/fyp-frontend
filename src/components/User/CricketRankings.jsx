import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankingCard from './RankingCard';
import PAK from '../images/pak.png';
import AUS from '../images/aus.png';
import IND from '../images/india.png';
import SA from '../images/SA.png';
import NZ from '../images/newzealand.png';
import ENG from '../images/eng.png';


// // Mens team ranking 
// const menstestTeams = [
//   { rank: 1, player : "Australia", points: 117, flag: AUS },
//   { rank: 2, player : "India", points: 117, flag: IND },
//   { rank: 3, player : "Pakistan", points: 117, flag: PAK},
//   { rank: 4, player : "South Africa", points: 117, flag: SA },
//   { rank: 5, player : "New Zealand", points: 117, flag: NZ },
// ];

// const mensodiTeams = [
//   { rank: 1, player : "England", points: 125, flag: ENG },
//   { rank: 2, player : "India", points: 124, flag: IND },
//   { rank: 3, player : "New Zealand", points: 112, flag: NZ },
//   { rank: 4, player : "Australia", points: 111, flag: AUS },
//   { rank: 5, player : "Pakistan", points: 106, flag: PAK },
// ];

// const menst20Teams = [
//   { rank: 1, player : "India", points: 270, flag: IND },
//   { rank: 2, player : "England", points: 265, flag: ENG },
//   { rank: 3, player : "Pakistan", points: 261, flag:PAK },
//   { rank: 4, player : "South Africa", points: 253, flag: SA },
//   { rank: 5, player : "Australia", points: 249, flag:AUS },
// ];


// // womens team ranking 
// const womensodiTeams = [
//   { rank: 1, player : "England", points: 125, flag: ENG },
//   { rank: 2, player : "India", points: 124, flag: IND },
//   { rank: 3, player : "New Zealand", points: 112, flag: NZ },
//   { rank: 4, player : "Australia", points: 111, flag: AUS },
//   { rank: 5, player : "Pakistan", points: 106, flag: PAK },
// ];

// const womenst20Teams = [
//   { rank: 1, player : "India", points: 270, flag: IND },
//   { rank: 2, player : "England", points: 265, flag: ENG },
//   { rank: 3, player : "Pakistan", points: 261, flag:PAK },
//   { rank: 4, player : "South Africa", points: 253, flag: SA },
//   { rank: 5, player : "Australia", points: 249, flag:AUS },
// ];

const CricketRankings = () => {

  const [menstestTeams, setMenTestTeams] = useState([]);
  const [mensodiTeams, setMenOdiTeams] = useState([]);
  const [menst20Teams, setMenT20Teams] = useState([]);
  const [womensodiTeams, setWomenOdiTeams] = useState([]);
  const [womenst20Teams, setWomenT20Teams] = useState([]);

  useEffect(() => {
    fetch('https://smart-cricket-dqfbhtegeuhse0ct.eastasia-01.azurewebsites.net/teams/ranking/top/5')
      .then((response) => response.json())
      .then((data) => {
        // Assuming the response contains rankings in this format
        setMenTestTeams(data.men_test_ranking);
        setMenOdiTeams(data.men_odi_ranking);
        setMenT20Teams(data.men_t20_ranking);
        setWomenOdiTeams(data.women_odi_ranking);
        setWomenT20Teams(data.women_t20_ranking);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMenTestTeams([]);
        setMenOdiTeams([]);
        setMenT20Teams([]);
        setWomenOdiTeams([]);
        setWomenT20Teams([]);
      });
  }, []);

  return (
    <>
    <div className="flex space-x-4 justify-center mb-10" style={{flexWrap:'wrap'}}>
      
      <RankingCard title="Test - Team Ranking" teams={menstestTeams} />
      <RankingCard title="ODI - Team Ranking" teams={mensodiTeams} />
      <RankingCard title="T20 - Team Ranking" teams={menst20Teams} />
    </div>
    <h1 className='text-4xl	font-semibold	text-center	mt-10  '><span className='text-green-500'>Women's</span> Team Ranking </h1>

    <div className="flex space-x-4 justify-center mt-10" style={{flexWrap:'wrap'}}>
      <RankingCard title="ODI - Team Ranking" teams={womensodiTeams} />
      <RankingCard title="T20 - Team Ranking" teams={womenst20Teams} />
    </div>
    </>
  );
};

export default CricketRankings;
