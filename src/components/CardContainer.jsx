import Container from "react-bootstrap/esm/Container"
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"


const CardContainer = () => {
    return(
        <Container className="card-container rounded-4 my-4 p-4">
            {data.map((player) => (
                <PlayerCard {...player}/>
            ) )}
        </Container>
    )
}

export default CardContainer