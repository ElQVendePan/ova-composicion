import React from 'react';
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Composicion = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/cuestionario');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'composicion'} />
            <Content>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 items-center">
                    <div>
                        <Title>3.1 | Estructuras de Composición</Title>
                        <p className="mt-4 text-gray-700">
                            La composición visual organiza los elementos en una imagen para transmitir mensajes claros. Existen estrategias esenciales:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>
                                <strong>Reglas de los Tercios y Espiral Áurea:</strong> Ayudan a posicionar elementos clave de forma armoniosa y equilibrada.
                            </li>
                            <li>
                                <strong>Composición en Capas y Profundidad:</strong> Crea tridimensionalidad mediante el uso de planos (primer plano, medio y fondo).
                            </li>
                            <li>
                                <strong>Uso de la Línea y Dirección Visual:</strong> Las líneas guían la atención del espectador hacia elementos importantes.
                            </li>
                        </ul>
                    </div>
                    <ReferenceImage src="overview.jpg">
                        Introducción a la composición visual
                    </ReferenceImage>
                </div>
            </Content>
            <ContentBlue>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 items-center">
                    <div>
                        <Title>3.2 | Reglas de los Tercios y Espiral Áurea</Title>
                        <p className="mt-4 text-white">
                            Ambas técnicas son pilares en la composición visual:
                        </p>
                        <ul className="list-disc ml-6 mt-4 text-white">
                            <li>
                                <strong>Regla de los Tercios:</strong> Divide la imagen en una cuadrícula 3x3, colocando elementos importantes en las intersecciones.
                            </li>
                            <li>
                                <strong>Espiral Áurea:</strong> Usa proporciones basadas en el número áureo para lograr una distribución natural y estética.
                            </li>
                        </ul>
                    </div>
                    <img
                        src="golden-ratio-example.jpg"
                        alt="Ejemplo de espiral áurea"
                        className="rounded-xl"
                    />
                </div>
            </ContentBlue>
            <Content>
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 items-center">
                    <div>
                        <Title>3.3 | Uso de la Línea y Dirección Visual</Title>
                        <p className="mt-4 text-gray-700">
                            Las líneas, explícitas o implícitas, son esenciales para guiar al espectador. Ayudan a enfocar la atención hacia un punto clave o a dirigir la mirada a lo largo de la composición. 
                        </p>
                        <p className="mt-4 text-gray-700">
                            Ejemplo: Una línea curva lleva al sujeto principal, mientras que líneas diagonales pueden generar dinamismo y movimiento.
                        </p>
                    </div>
                    <img
                        src="line-direction-example.jpg"
                        alt="Ejemplo de dirección visual"
                        className="rounded-xl"
                    />
                </div>
                <Button margin="mt-12" onClick={handleStartCourse}>
                    Siguiente
                </Button>
            </Content>
        </div>
    );
};

export default Composicion;