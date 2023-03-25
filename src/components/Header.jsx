import nbaLogo from "../assets/nba-logo.png";
import Container from 'react-bootstrap/Container';

const Header = () => {
    return(
        <Container>
            <image src={nbaLogo}></image>
            <h1>NBA Legends</h1>
        </Container>
    )
}

export default Header