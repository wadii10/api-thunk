import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Standings = () => {

    const { country_id } = useParams();
    console.log(country_id);

    const { league_id } = useParams();
    console.log(league_id);

    const [league, setLeague] = useState(null);
    console.log(league)


    const [country, setCountry] = useState(null);


    const [standings, setStandings] = useState(null);
    console.log(standings);

    useEffect(() => {

        try {
            const getStandings = async () => {
                const res = await axios.get(
                    "https://apiv3.apifootball.com/?action=get_countries&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b");
                setCountry(res.data.find(el => el.country_id == country_id));

                const res1 = await axios.get(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${country_id}&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b`);
                setLeague(res1.data.find(el => el.league_id == league_id));

                const res2 = await axios.get(`https://apiv3.apifootball.com/?action=get_standings&league_id=${league_id}&APIkey=045c25e252e1ae59d2a519448a03a70ee65de02e19406bbfcf473d1a0939fd0b`);
                return setStandings(res2.data.filter(el => el.league_id == league_id));
            };
            getStandings();

        } catch (error) {
            console.log(error);
        }


    }, [league_id]);

    return (
        <div>
            <table>
                <tbody>

                {
                    standings &&  React.Children.toArray(standings.map((el, i) => (<tr>
                        <td>{i + 1}</td>
                        <td>{el.team_name}</td>
                        <td> {el.overall_league_PTS} </td>
                    </tr>)
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}

export default Standings