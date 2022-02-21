import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CountrieItem = ({ country }) => {
 
   
    return (
        <div className='country-item'>

            <Card style={{ width: '19rem', height: '36rem' , border: 'none'}}>
                <Card.Img variant="top" src={country.country_logo} style={{ height: '20rem' , borderRadius: '50%'}} />
                <Card.Body>
                    <Card.Title> {country.country_name} </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Link to={`/detail/${country.country_id}`} > <Button variant="primary"  > Detail </Button>  </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CountrieItem