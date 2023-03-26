import { useState } from 'react';
import Card from 'react-bootstrap/Card';



const PlayerCard = (player) => {

    const [showImage, setShowImage] = useState(true)

    const {name, img, statistics} = player

    const handleClick = () => setShowImage(!showImage)

    return(
        <Card onClick={handleClick} className='rounded-2 m-auto player-card'role="button">

            {showImage ?
                (<Card.Img className='player-logo' variant="top" src={img} />) :
                (<ul className='m-auto'>
                {statistics.map((item,i) => {
                    return(
                        <li key={i} className="h5 text-start list-unstyled">🏀{item}</li>
                    )
                })}
                </ul>)
            }
            
            <Card.Footer>
                <Card.Title>{name}</Card.Title>
            </Card.Footer>
        </Card>
    );
}

export default PlayerCard