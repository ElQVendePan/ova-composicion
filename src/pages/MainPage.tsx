// src/pages/MainPage.tsx
import React from 'react';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Content from '../components/Content';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate('/contextualizacion');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner />
      <Content>
        <Title>Introducción</Title>
        <p className="mt-4 text-gray-700">
          La composición visual es un elemento esencial en el diseño gráfico, ya que permite comunicar ideas y emociones de manera efectiva mediante el uso estructurado de formas, espacios y elementos visuales. Este Objeto Virtual de Aprendizaje nos guiará a través de los conceptos clave de la composición, ayudándonos a entender cómo organizar y balancear los distintos componentes visuales para lograr diseños atractivos y funcionales.<br></br><br></br>
          Al explorar este Objeto Virtual de Aprendizaje, descubriremos cómo cada decisión en la composición afecta la percepción y el impacto de un diseño, aplicando principios que optimizan la claridad, el dinamismo y la cohesión visual.
        </p>

        {/* Sección de Temas y Subtemas */}
        <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-700 mb-4">Temas y Subtemas</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-3">
              <strong>Contextualización</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>¿Qué es Composición Visual?</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>1. Principios Básicos de Composición Visual</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>1.1 | Balance</li>
                <li>1.2 | Proporción y Escala</li>
                <li>1.3 | Ritmo y Movimiento</li>
                <li>1.4 | Énfasis y Jerarquía Visual</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>2. Uso del Espacio en la Composición Visual</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>2.1 | Espacio Positivo y Negativo</li>
                <li>2.2 | Creación de Profundidad y Perspectiva</li>
                <li>2.3 | Uso del Espacio para Crear Enfoque o Jerarquía</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>3. Estructuras de Composición</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>3.1 | Reglas de los Tercios y la Espiral Áurea</li>
                <li>3.2 | Composición en Capas y Profundidad</li>
                <li>3.3 | El uso de la Línea y Dirección Visual</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>4. Tipografía en la Composición</strong>
              <ul className="list-circle ml-6 mt-2">
                <li>4.1 | Tipografía como Elemento Visual</li>
                <li>4.2 | Jerarquía y Legibilidad Tipográfica</li>
                <li>4.3 | Contraste entre Tipografías</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>5. Ejercicios Prácticos y Casos de Estudio</strong>
            </li>
          </ul>
        </div>

        {/* Sección de Referencias Expandible */}
        <details className="mt-8 bg-gray-100 border border-gray-300 rounded-lg p-4">
          <summary className="cursor-pointer text-lg font-semibold text-blue-700 hover:text-blue-500 duration-200">
            Referencias
          </summary>
          <div className="mt-4 pl-6 text-gray-700">
            <p className="mb-6">
              Llasera, J. P. (2024, November 9). Los 6 principios del diseño gráfico que debes conocer. Hey Jaime.<br />
              <a href="https://heyjaime.com/blog/principios-diseno-grafico/" className='text-blue-600' target='_blank'>https://heyjaime.com/blog/principios-diseno-grafico/</a>
            </p>
            <p className="mb-6">
              Neumeyer, H. (2022, September 28). La proporción áurea. MYPOSTER Blog.<br />
              <a href="https://www.myposter.es/magazin/proporcion-aurea-regla-tercios/" className='text-blue-600' target='_blank'>https://www.myposter.es/magazin/proporcion-aurea-regla-tercios/</a>
            </p>
            <p className="mb-6">
              Admin. (2020, November 25). La línea - artesvisuales. artesvisuales.<br />
              <a href="https://artesvisuales.com/blog/la-linea/" className='text-blue-600' target='_blank'>https://artesvisuales.com/blog/la-linea/</a>
            </p>
            <p className="mb-6">
              La importancia de la tipografía en el diseño y la comunicación visual - Universidad ORT Uruguay. (n.d.).<br />
              <a href="https://fd.ort.edu.uy/blog/la-importancia-de-la-tipografia-en-el-diseno-y-la-comunicacion-visual#:~:text=La%20tipograf%C3%ADa%3A%20un%20elemento%20clave,con%20claridad%20y%20atractivo%20visual" className='text-blue-600' target='_blank'>https://fd.ort.edu.uy/blog/la-importancia-de-la-tipografia-en-el-diseno-y-la-comunicacion-visual</a>
            </p>
            <p className="mb-6">
              Cómo elegir un estilo de tipografía adecuado en contrastes y jerarquía | Videolab | Tecnológico de Monterrey. (n.d.).<br />
              <a href="https://videolab.tec.mx/es/como-elegir-un-estilo-de-tipografia-adecuado-en-contrastes-y-jerarquia" className='text-blue-600' target='_blank'>https://videolab.tec.mx/es/como-elegir-un-estilo-de-tipografia-adecuado-en-contrastes-y-jerarquia</a>
            </p>
          </div>
        </details>

        {/* Sección de Autoría Expandible */}
        <details className="mt-8 bg-gray-100 border border-gray-300 rounded-lg p-4">
          <summary className="cursor-pointer text-lg font-semibold text-blue-700 hover:text-blue-500 duration-200">
            Autoría
          </summary>
          <div className="mt-4 pl-6 text-gray-700">
            <ul className="list-disc ml-6">
              <li className="mb-1">Daniel Alejandro Meneses Rincon</li>
              <li className="mb-1">Daniel Martin Martinez Caceres</li>
              <li>Julio Sanabria Contreras</li>
            </ul>
          </div>
        </details>

        <Button margin="mt-8" onClick={handleStartCourse}>Comenzar</Button>
      </Content>
    </div>
  );
};

export default MainPage;