import pizza1 from '../images/pizza1.jpg'
import pizza2 from '../images/pizza2.jpg'
import pizza3 from '../images/pizza3.jpg'

import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
    return (
        <Carousel className='container'>
            <Carousel.Item interval={7000}>
                <img src={pizza1} className='d-block w-100' alt='Imagem de uma pizza de abacaxi' />
                <Carousel.Caption>
                    <h3 className='h1'>Pizza de abacaxi</h3>
                    <p>Uma pizza muito boa.<br/>R$21,90</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img src={pizza2} className='d-block w-100' alt='Imagem de uma pizza de calabresa' />
                <Carousel.Caption>
                    <h3 className='h1'>Pizza de calabresa</h3>
                    <p>Uma pizza muito boa.<br/>R$29,90</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img src={pizza3} className='d-block w-100' alt='Imagem de uma pizza de portuguesa' />
                <Carousel.Caption>
                    <h3 className='h1'>Pizza de portuguesa</h3>
                    <p>Uma pizza muito boa.<br/>R$29,90</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Carrossel;