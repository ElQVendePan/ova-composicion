import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const ComposicionVisual = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        navigate('/principios');
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen">
            <Banner page={'composicion-visual'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-10 items-center'>
                    <div className='mb-8'>
                        <Title>Introducción a la Composición Visual</Title>
                        <p className="mt-4 text-gray-700">
                        La composición visual es el arte de organizar los elementos en un espacio para crear un impacto visual y transmitir un mensaje claro. Es fundamental en todas las áreas donde se trabaja con imágenes, ya que influye directamente en cómo percibimos y comprendemos lo que vemos.<br></br><br></br>
                        Este concepto abarca desde cómo ubicamos los objetos principales hasta cómo utilizamos el espacio negativo, el color y las líneas para guiar la mirada del espectador. Una composición bien lograda no solo es atractiva, sino que también comunica de manera efectiva, haciendo que el mensaje visual sea memorable y significativo.
                        </p>
                    </div>
                    <div>
                        <iframe className='w-full h-64 lg:h-64 rounded-xl mt-8 lg:mt-0' src="https://www.youtube.com/embed/AKik3iW3GDY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <p className='text-xs mt-3 opacity-70'>López, J. (2023, 10 de marzo). Principios básicos de composición visual.</p>
                    </div>
                </div>
            </Content>
            <ContentBlue>
                <img src="page.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-15 brightness-50' alt="" />
                <div className='relative'>
                    <Title>Contexto y Relevancia</Title>
                    <p className="mt-4 opacity-80">
                        A lo largo de la historia, la composición visual ha sido una herramienta esencial para comunicar ideas de manera efectiva, desde las pinturas clásicas hasta los medios digitales actuales. Dominar este aspecto es crucial para crear imágenes que sean tanto funcionales como estéticamente agradables.<br></br><br></br>
                        La composición no se trata solo de estética; es un medio para organizar visualmente la información, enfatizar elementos clave y evocar emociones en el espectador. Comprender sus fundamentos nos permite abordar cualquier proyecto visual con confianza y creatividad.
                    </p>
                </div>
            </ContentBlue>
            <Content>
                <Title>Preparando el Terreno</Title>
                <p className="mt-4 text-gray-700">
                Antes de adentrarnos en los principios y técnicas de composición visual, es importante entender su papel como base para cualquier diseño o creación visual. La forma en que organizamos los elementos en una imagen determina no solo su apariencia, sino también su impacto y claridad. Una buena composición nos ayuda a captar la atención, dirigir la mirada y reforzar el mensaje.
                </p>
                <ReferenceImage src='composicion-visual.jpg'></ReferenceImage>
                <Button margin='mt-8 block' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default ComposicionVisual