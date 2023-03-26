import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import {data} from "../helpers/data"
import PlayerCard from "./PlayerCard"
import { useState } from "react"


const CardContainer = () => {

    const [search, setSearch] = useState("")

    return(
        <>
        <Form.Control
        type="search"
        placeholder="Search a player here"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
        />

        <Container className="card-container rounded-4 my-4 p-4">
            <Row className="g-3 justify-content-center">
                {data.filter((player) => 
                    player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, i) =>
                    (<Col xl={3} lg={4} md={6} key={i}>
                        <PlayerCard {...player}/>
                    </Col>
                ))}
            </Row>
            
        </Container>
        </>

    )
}

export default CardContainer