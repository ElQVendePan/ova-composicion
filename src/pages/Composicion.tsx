import React from 'react'
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
        navigate('/principios');
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen">
            <Banner page={'estructuras'} />
            <Content>
                <div className='lg:grid lg:grid-cols-2 lg:gap-x-10 items-center'>
                    <div className='mb-8'>
                        <Title>3.1 | Reglas de los Tercios y la Espiral Áurea</Title>
                        <p className="mt-4 text-gray-700">
                            La regla de los tercios es especialmente fácil de explicar: dibuja dos líneas horizontales y dos líneas verticales a través de la imagen a intervalos iguales, de modo que se formen nueve segmentos de imagen. El tema principal debe situarse en la intersección de dos líneas o discurrir a lo largo de una de ellas.<br></br><br></br>
                            Para la proporción áurea, primero necesitas una línea vertical. Esta divide la foto en dos secciones de tamaño desigual, que ocupan aproximadamente el 61,8% y el 38,2% de la longitud de la imagen. A continuación, crea una línea horizontal que divida la imagen verticalmente, también en la proporción 61,8% a 38,2%.
                        </p>
                    </div>
                    <div>
                        <ReferenceImage src='https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/db428c56-86ba-4367-ae45-bb9463a964c5/proporcion-aurea-ejemplo.jpg'></ReferenceImage>
                    </div>
                </div>
            </Content>
            <ContentBlue>
                <img src="banner.jpg" className='absolute w-full h-full object-cover left-0 top-0 opacity-15 brightness-50' alt="" />
                <div className='relative'>
                    <Title>3.2 | Composición en Capas y Profundidad</Title>
                    <p className="mt-4 opacity-80">
                        La composición en capas y profundidad es una técnica fotográfica que busca crear una sensación de tridimensionalidad e inmersión en la escena. Para lograrlo, se utilizan elementos en primer plano, medio y fondo, y se crea una perspectiva que haga que los objetos más cercanos parezcan más grandes.
                    </p>
                    <ReferenceImage src='https://www.silocreativo.com/wp-content/uploads/2022/03/gabriella-clare-marino-vaticano-perspectiva-unsplash.jpg'></ReferenceImage>
                </div>
            </ContentBlue>
            <Content>
                <Title>3.3 | El uso de la Línea y Dirección Visual</Title>
                <p className="mt-4 text-gray-700">
                    Si reducimos a la mínima expresión el diseño, posiblemente la línea sea el elemento más básico con el que podemos empezar a trabajar, y que nuestro trabajo tenga cierto significado. Una línea no es más que la unión que hacemos entre dos puntos, pero tiene muchas variaciones: su dirección, inclinación, grosor, si es recta o esta curvada, si es regular o irregular, etc. Porque una línea no es simplemente un trazo. Puede marcar por completo el significado de un diseño mucho más complejo y con más elementos.Cuando hablamos de línea no debemos quedarnos solo con la imagen un trazo dibujado. Por ejemplo, con una línea podemos marcar cierta dirección, o hacia cierto punto donde queremos que focalice el espectador. por ejemplo, si estamos haciendo el diseño web de una tienda online y queremos que el visitante preste atención a la imagen del producto. Podemos ser más explícitos y dotar de mucho peso a esa imagen, dando menos importancia al resto de la página. O podemos hacer, mediante nuestro diseño, guiar los ojos del visitante para que llegue de forma natural (y sin que él mismo lo perciba) a la imagen. Es decir, mediante la propia composición estamos creando una dirección de visualización para que sea seguida y que los ojos sigan esa línea como nosotros queremos.
                </p>
                <ReferenceImage src='https://www.jpereira.net/wp-content/uploads/2024/08/phi_grid_san_francisco_web.jpg'></ReferenceImage>
                <Button margin='mt-8 block' onClick={handleStartCourse}>Siguiente</Button>
            </Content>
        </div>
    )
}

export default Composicion