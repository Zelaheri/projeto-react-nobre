import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigationbar() {
    return (
        <Navbar
            expand={false}
            fixed='top'
            bg='dark'
            data-bs-theme="dark"
        >
            <Container fluid>
                <Navbar.Brand href="/">Pizzeria</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="top"
                >
                    <Offcanvas.Body>
                        <Nav>
                            <Nav.Link href="/">Início</Nav.Link>
                            <Nav.Link href="/about">Sobre</Nav.Link>
                            <Nav.Link href="/contact">Contato</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;