import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() {

    const location = useLocation();
    let navigate = useNavigate();
    
    let userId = "not logged in";
    if(location.state) {
        userId = location.state.id;
    }
    
    return (
        <Navbar bg="secondary" data-bs-theme="light">
      <Container>
      <Nav className="me-auto">
            <Nav.Link onClick={() =>  navigate(`/employees`, {state:{id:userId}})}>Employees</Nav.Link>
            <Nav.Link href="/predictor">Salary Predictor</Nav.Link>
            <Nav.Link href="/login">Log out</Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  onClick={() =>  navigate(`/employees/${userId}`, {state:{id:userId}})}>
            Signed in as: EmployeeId {userId}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;