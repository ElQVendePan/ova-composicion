import React from 'react'
import Title from '../components/Title';
import Banner from '../components/Banner';
import ReferenceImage from '../components/ReferenceImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';
import ContentBlue from '../components/ContentBlue';

const Espacio = () => {
    const navigate = useNavigate();

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/composicion');
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Banner page={'espacio'} />
            <Content>
                <Title>2.1 | Espacio Positivo y Negativo</Title>
                <p className="mt-4 text-gray-700">
                    El <b className='text-blue-600'>espacio positivo</b> se refiere al sujeto principal o elementos centrales de una composición visual, mientras que el <b className='text-blue-600'>espacio negativo</b> es el área que los rodea. Ambos trabajan en conjunto para crear balance, contraste y significado. El espacio negativo no es simplemente un fondo vacío; su diseño intencional guía la percepción y enfatiza el foco principal.<br /><br />
                    Por ejemplo, en logotipos o ilustraciones minimalistas, el espacio negativo puede formar imágenes ocultas que agregan profundidad y creatividad a la obra. En las ilusiones ópticas, el espacio positivo y negativo se manipulan para alterar la percepción del observador, creando formas ambiguas o dobles significados visuales.
                </p>
                <ReferenceImage src='https://i.pinimg.com/550x/d9/76/9a/d9769ab1aa4a8114eef6c68fcf8fbdc6.jpg' text='Smith, A. (2021). Positive and Negative Space in Art.' />
                <p className="mt-4 text-gray-700">
                    Ejercitar un uso efectivo del espacio positivo y negativo puede generar composiciones visuales que sean tanto funcionales como estéticamente atractivas, mejorando la comunicación del mensaje y la experiencia del espectador.
                </p>
                <div className="mt-4"></div>
            </Content>

            <ContentBlue>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/375/040/small_2x/modern-white-background-free-vector.jpg" className='absolute invert w-full h-full object-cover left-0 top-0 opacity-25' alt="" />
                <div className='relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8'>
                    <div className='text-left'>
                        <ReferenceImage noMargin src='perspectiva-profundidad.jpg'></ReferenceImage>
                    </div>
                    <div className='mt-10'>
                        <Title>2.2 | Creación de Profundidad y Perspectiva</Title>
                        <p className='mt-4 opacity-70'>
                            La <b>profundidad</b> y la <b>perspectiva</b> son elementos clave en la composición visual que ayudan a representar dimensiones tridimensionales en superficies bidimensionales. Los tipos principales son:<br /><br />
                            <b>1. Perspectiva Lineal:</b> Utiliza líneas convergentes hacia un punto de fuga para crear la ilusión de distancia. Es esencial en paisajes y escenas arquitectónicas, permitiendo al espectador percibir jerarquía y escala entre los objetos.<br /><br />
                            <b>2. Perspectiva Atmosférica:</b> Representa profundidad al modificar el color, brillo y detalle de los objetos distantes. Este efecto simula cómo la atmósfera afecta la visibilidad, con colores menos saturados y bordes más suaves para elementos lejanos.<br /><br />
                            Estas técnicas no solo añaden realismo, sino que también contribuyen a la narrativa visual al guiar la atención del espectador y proporcionar contexto espacial.
                        </p>
                    </div>
                </div>
            </ContentBlue>

            <Content>
                <Title>2.3 | Uso del Espacio para Crear Enfoque o Jerarquía</Title>
                <p className="mt-4 opacity-70 mb-9">
                    El espacio en una composición visual también se utiliza estratégicamente para establecer jerarquías y dirigir la atención del espectador. Esto se logra al:<br /><br />
                    - Crear <b className='text-blue-600'>contraste</b> entre el espacio positivo y negativo, destacando elementos clave.<br />
                    - Usar el espacio para separar información, lo que mejora la legibilidad y organiza el contenido visual.<br />
                    - Aplicar proporciones y tamaños relativos para indicar importancia; los elementos más grandes o rodeados de mayor espacio negativo suelen percibirse como más importantes.<br /><br />
                    Por ejemplo, en diseño gráfico, un encabezado prominente rodeado de espacio negativo se percibe inmediatamente como el elemento principal. En fotografía, el uso intencional del espacio puede evocar emociones o guiar la narrativa de la imagen.
                </p>
                <iframe className='w-full h-64 lg:h-[30rem] rounded-xl mt-8' src="https://www.youtube.com/embed/_F4MTXXydWA?si=L6YnJNldjcp2yFpE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <p className='text-xs mt-3 opacity-70'>Hey Jaime. (2023). Jerarquía visual 👁 Qué es y cómo aplicarla en diseño gráfico + Ejemplos.</p>
                <Button margin='mt-8' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Espacio;