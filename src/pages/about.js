// About:
// 	- Somos a empresa tal
// 	- Imagem
// 	- Tópicos de histórico de empresa**

import Card from 'react-bootstrap/Card';
import pizzaria from '../images/pizzaria.jpg'

function About() {
    return (
        <main>
            <custom className="custom">
                <Card className="bg-dark text-white text-center">
                    <Card.Img src={pizzaria} alt="Interior da cozinha da pizzaria" />
                    <Card.ImgOverlay>
                        <Card.Title className='display-1'>
                            <strong>
                                Pizzeria&trade;
                            </strong>
                        </Card.Title>
                        <Card.Text className='display-6'>
                            Somos a empresa tal
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </custom>
        </main>
    );
}

export default About;