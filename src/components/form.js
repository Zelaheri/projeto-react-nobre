import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function FormContact() {
    return (
        <Card className="text-center text-white container" bg='dark' border='danger'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Formulário de contato</Card.Title>
                <Form>
                    <hr />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Nome" className='bg-dark text-white' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" className='bg-dark text-white' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="tel" placeholder="Telefone" className='bg-dark text-white' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Endereço" className='bg-dark text-white' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Select aria-label="Default select example">
                            <option selected hidden>Produto desejado</option>
                            <option value="1">Pizza de abacaxi</option>
                            <option value="2">Pizza de calabresa</option>
                            <option value="3">Pizza de portuguesa</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={2} placeholder="Observações" />
                    </Form.Group>
                    <hr />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Card.Body>
            <Card.Footer>Pizzeria&trade;</Card.Footer>
        </Card>
    );
}

export default FormContact;