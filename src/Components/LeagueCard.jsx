import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LeagueCard = ({ league }) => {
    return (
        <div className='league-item'>

            <Card style={{ width: '19rem', height: '36rem' }}>
                <Card.Img variant="top" src={league.league_logo} style={{ height: '20rem' }} />
                <Card.Body>
                    <Card.Title> {league.league_name} </Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Link to="/" > <Button variant="primary"  > Back </Button>  </Link>
                    <Link to={`/standings/${league.country_id}/${league.league_id}`} > <Button variant="primary"  > Standings </Button>  </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default LeagueCard