import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NotFound() {
    return (
        <main className="text-center">
            <Card className="text-center container bg-dark text-white">
                <Card.Header className='display-6'>Opa! Calma aí! 😵</Card.Header>
                <Card.Body>
                    <Card.Title>Essa página não existe</Card.Title>
                    <Card.Text>
                        Confira se digitou o endereço correto da página e tente novamente
                    </Card.Text>
                    <hr />
                    <Button variant="primary" href='/'>Voltar à página inicial</Button>
                </Card.Body>
                <Card.Footer className="text-white">Pizzeria&trade;</Card.Footer>
            </Card>
        </main>
    );
};

export default NotFound;