import React from 'react'
import { Card } from 'react-bootstrap'


const CountrieItem = ({ country }) => {
    return (
        <div className='country-item'>

            <Card style={{ width: '19rem', height: '36rem' }}>
                <Card.Img variant="top" src={country.country_logo} style={{ height: '25rem' }} />
                <Card.Body>
                    <Card.Title> {country.country_name} </Card.Title>
                    <Card.Text>
                        {/* {country.country_name} */}
                    </Card.Text>
                </Card.Body>
            </Card>

            

        </div>
    )
}

export default CountrieItem