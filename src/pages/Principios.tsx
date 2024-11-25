import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Psc = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/espacios');
    };
    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'principios'} />
            <Content>
                <div className='lg:grid lg:grid-cols-1 lg:gap-x-5 items-center'>
                    <div>
                        <Title>1.1 | Balance</Title>
                        <p className="mt-4 text-gray-700">
                            El principio de Balance o Equilibrio parte del peso visual de los elementos en una composición. Hacemos uso del balance para otorgar estabilidad y estructura, crear énfasis y dinamismo.<br></br><br></br>
                            En el diseño, se intentará colocar los elementos visuales en una disposición estéticamente agradable o en una disposición particular para cumplir un propósito o apariencia particular. El balance de una composición puede ser Simétrico o Asimétrico.
                        </p>
                    </div>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 items-center mt-4'>
                        <p className="mt-4 text-gray-700">
                            <b className='text-blue-600'>Balance Simétrico:</b> se da cuando los elementos se disponen simétricamente a ambos lados de los ejes, horizontal o vertical. La simetría organiza los elementos de manera que ambos lados de la composición sean similares o idénticos, creando un sentido de estabilidad y orden.
                        </p>
                        <p className="mt-4 text-gray-700">
                            <b className='text-blue-600'>Balance Asimétrico:</b> se da cuando los elementos no mantienen simetría por forma, pero sí por peso visual. En la asimetría, los elementos se distribuyen de forma desigual, pero conservan la armonía visual. Esta técnica aporta dinamismo y puede generar interés visual sin sacrificar el equilibrio.
                        </p>
                    </div>
                    <ReferenceImage src='balance.jpg'>IBM. (n.d.). IBM logo [Logotipo]. IBM. <a href='https://www.ibm.com/' target='_blank'>https://www.ibm.com/ibm/logo</a></ReferenceImage>
                    <div>
                        <p className='mt-12 text-gray-700'>
                            <b>Un diseñador debe ser capaz de intuir cuando un diseño no tiene el equilibrio adecuado.</b>
                        </p>
                    </div>
                </div>
            </Content>
            <ContentBlue>
                <img src="pat1.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-10' alt="" />
                <div className='relative'>
                    <Title>1.2 | Proporción y Escala</Title>
                    <p className="mt-4 opacity-70 mb-6">
                        La proporción se relaciona con el tamaño relativo de los elementos entre sí, mientras que la escala ajusta el tamaño para dar mayor énfasis o resaltar importancia. Estos principios permiten al diseñador establecer jerarquías visuales, ayudando a que el espectador identifique de inmediato los elementos principales de la composición.
                    </p>
                    <ReferenceImage src='escala.jpg' text='Blattner Brunner. (n.d.). Shootz Café & Billiards [Anuncio].'></ReferenceImage>
                </div>
            </ContentBlue>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <div>
                        <Title>1.3 | Ritmo y Movimiento</Title>
                        <p className="mt-4 text-gray-700">
                            El ritmo utiliza la repetición y el patrón para guiar la mirada del espectador a través de la composición, creando una sensación de continuidad y orden. El movimiento, por su parte, hace que los elementos visuales parezcan fluir o seguir una dirección, estableciendo un camino visual que invita al espectador a explorar la totalidad de la imagen o diseño.
                        </p>
                    </div>
                    <ReferenceImage src='ritmo.jpg'>FedEx. (n.d.). FedEx logo [Logotipo]. FedEx. <a href='https://www.fedex.com/es-co/home.html' target='_blank'>https://www.fedex.com/es-co/home.html</a></ReferenceImage>
                </div>
            </Content>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <ReferenceImage src='fedex.png'>FedEx. (n.d.). FedEx logo [Logotipo]. FedEx. <a href='https://www.fedex.com/es-co/home.html' target='_blank'>https://www.fedex.com/es-co/home.html</a></ReferenceImage>
                    <div className='text-right'>
                        <Title>1.4 | Énfasis y Jerarquía Visual</Title>
                        <p className="mt-4 text-gray-700">
                            El énfasis se utiliza para destacar elementos clave, asegurando que ciertos puntos de la composición capturen la atención de inmediato. La jerarquía visual organiza estos elementos en un orden de importancia, permitiendo que el espectador perciba primero lo esencial antes de procesar el resto de la composición.
                        </p>
                    </div>
                </div>
                <Button margin='mt-16' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Psc
