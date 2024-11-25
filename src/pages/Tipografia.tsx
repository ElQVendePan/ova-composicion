import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Tipografia = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/direccion');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'tipografia'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-5 items-center'>
                    <div>
                        <Title>4.1 | Tipografía como Elemento Visual</Title>
                        <p className="mt-4 text-gray-700">
                            La tipografía es un elemento crucial en el diseño y la comunicación visual, cuya selección y uso adecuados pueden hacer que un mensaje sea notoriamente más claro, atractivo y efectivo.<br></br><br></br>
                            La tipografía es esencial en el diseño gráfico y la comunicación visual para la transmisión de mensajes, facilitando la lectura y comprensión de textos para que comuniquen con claridad y atractivo visual.
                        </p>
                    </div>
                    <ReferenceImage src='https://i.pinimg.com/originals/9d/3b/cb/9d3bcbdb6809629d44d786ebb9635ced.jpg'>Mariana Pallares (n.d.). Ejemplo de tipografía como elemento visual</ReferenceImage>
                </div>
            </Content>
            <ContentBlue>
                <img src="pat1.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-10' alt="" />
                <div className='relative grid lg:grid-cols-2 gap-x-8 items-center'>
                    <div className='hidden lg:inline-block text-left'><ReferenceImage src='jerarquia.jpg' text='Ejemplo de jerarquía tipográfica'></ReferenceImage></div>
                    <div>
                        <Title>4.2 | Jerarquía y Legibilidad Tipográfica</Title>
                        <p className="mt-4 opacity-70">
                            La jerarquía tipográfica organiza la información para guiar la atención del lector, estableciendo un orden visual claro. Elementos como el tamaño, el peso y el espaciado tipográfico juegan un papel clave en esta jerarquía, ayudando a priorizar el contenido más relevante. La legibilidad asegura que el texto sea fácil de leer, manteniendo un equilibrio entre diseño y funcionalidad.
                        </p>
                    </div>
                    <div className='lg:hidden'><ReferenceImage src='jerarquia.jpg' text='Ejemplo de jerarquía tipográfica'></ReferenceImage></div>
                </div>
            </ContentBlue>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <div>
                        <Title>4.3 | Contraste entre Tipografías</Title>
                        <p className="mt-4 mb-8 text-gray-700">
                            El contraste entre tipografías es una técnica clave para enriquecer la estética y funcionalidad de un diseño. Combinaciones efectivas de tipografías con diferentes estilos, tamaños o pesos pueden crear un interés visual, destacar información importante y mejorar la comprensión del contenido. Sin embargo, es fundamental equilibrar el contraste para evitar una apariencia desordenada o confusa.
                        </p>
                    </div>
                    <div>
                        <iframe className='w-full h-64 lg:h-64 rounded-xl mt-8 lg:mt-0' src="https://www.youtube.com/embed/-_O3sAVODpI?si=M_NFJbZlTtoy3miH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <p className='text-xs mt-3 opacity-70'>Diseño Gráfico. (2022, 12 de Mayo). Cómo combinar tipografías correctamente.</p>
                    </div>
                </div>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Tipografia;