import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import LeagueCard from './LeagueCard';

const DetailCountry = () => {

  const [country, setCountry] = useState(null);
  // console.log(country)

  const [liga, setLiga] = useState(null);
  // console.log(liga)
  
  const { country_id } = useParams();
  // console.log(country_id)

  useEffect(() => {
    
    try {
      const getOneCountry = async () => {
        const res = await axios.get(
          "https://apiv3.apifootball.com/?action=get_countries&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b"
        );

        setCountry(res.data.find(el => el.country_id == country_id));

        const res1 = await axios.get(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b`) ;
        return setLiga(res1.data);
      };
      getOneCountry();

    } catch (error) {
      console.log(error);
    }


  }, [country_id]);


  return (
    <div className="leagues-list">
      {liga &&
          React.Children.toArray(  liga.map( el => <LeagueCard league={el} />) )
        }
    </div>
  )
}

export default DetailCountry