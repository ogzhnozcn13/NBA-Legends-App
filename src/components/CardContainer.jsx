import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"


const CardContainer = () => {
    return(
        <Container className="card-container rounded-4 my-4 p-4">
            <Row className="g-3 justify-content-center">
                {data.map((player, i) => (
                    <Col xl={3} lg={4} md={6} key={i}>
                        <PlayerCard {...player}/>
                    </Col>
            ) )}
            </Row>
            
        </Container>
    )
}

export default CardContainer