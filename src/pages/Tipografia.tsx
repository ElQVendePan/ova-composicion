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
        navigate('/cuestionario');
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
                    <div className='hidden lg:inline-block text-left'><ReferenceImage src='https://gtechdesign.net/images/articu-2/jerarquia-tipo-3.webp' text='G-Tech Design (n.d.). Jerarquía tipográfica: ¿Qué es y cómo se utiliza?'></ReferenceImage></div>
                    <div>
                        <Title>4.2 | Jerarquía y Legibilidad Tipográfica</Title>
                        <p className="mt-4 opacity-70">
                            La tipografía es un componente del diseño gráfico que influye directamente en cómo los mensajes son percibidos y comprendidos, afectando la estética de un proyecto y su efectividad comunicativa.<br></br><br></br>
                            La legibilidad está asociada a la claridad del mensaje, garantizando que el contenido pueda leerse y comprenderse. Factores como el tamaño de la fuente, el espaciado entre letras (kerning), el interlineado (leading) y el espaciado entre palabras influyen significativamente en la legibilidad.<br></br><br></br>
                            El contraste entre texto y fondo también es crucial para la claridad y visibilidad del mensaje, así como la disposición del texto en la página o el área de exposición. El uso adecuado de márgenes, columnas y alineación contribuye a una presentación ordenada y fácil de seguir.
                        </p>
                    </div>
                </div>
            </ContentBlue>
            <Content>
                <div className='lg:grid lg:grid-cols-2 items-center gap-10'>
                    <div>
                        <Title>4.3 | Contraste entre Tipografías</Title>
                        <p className="mt-4 mb-8 text-gray-700">
                            Para que un diseño sea funcional, en primer lugar se debe tener claro qué es lo que se quiere comunicar, ni es viable transmitir varias ideas al mismo tiempo o pretender que todo resalte. De manera similar a cuando se está redactando un párrafo, si se desea resaltar algo se puede utilizar negritas pero sin caer en el exceso, pues el problema de pretender que todo resalte, es que nada terminará resaltando.<br></br><br></br>
                            El peso visual es la “fuerza” que un objeto ejerce ante la vista, cuando en una imagen hay dos o más objetos, o en el caso de los textos, hay más palabras, todas pueden llamar la atención por igual, no obstante aplicando cambios en la tipografía (por ejemplo Bold) se puede conseguir que una palabra resalte sobre otra.<br></br><br></br>
                            La jerarquía tipográfica es el grado de importancia o autoridad que tiene un objeto sobre otro. Como se menciona al principio, la jerarquía permitirá a la persona que vea el diseño saber qué es lo más importante. ¿Qué es lo que se desea destacar? ¿Cuál es la información más importante o la idea principal en el diseño? Estas preguntas se pueden conocer a través de la aplicación de los contrastes topográficos, a fin de crear una jerarquía en el diseño.
                        </p>
                    </div>
                    <div>
                        <ReferenceImage src='https://disseny.recursos.uoc.edu/recursos/tipo/wp-content/uploads/sites/18/2017/09/01-vESP-fuentes-similares.jpg'>Universitat Oberta de Catalunya (n.d.). Tipografia</ReferenceImage>
                    </div>
                </div>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Tipografia;