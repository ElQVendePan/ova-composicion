import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import Content from '../components/Content';

const CuestionarioComposicionVisual: React.FC = () => {
    const navigate = useNavigate();

    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);
    const [showError, setShowError] = useState(false);
    const [score, setScore] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        });
        if (showError) {
            setShowError(false); // Ocultar el error si el usuario empieza a responder
        }
    };

    const handleSubmit = () => {
        if (Object.keys(answers).length !== questions.length) {
            setShowError(true);
            return;
        }

        let correct = 0;
        questions.forEach((q, index) => {
            if (answers[`question-${index}`] === q.answer) {
                correct += 1;
            }
        });
        setScore(correct);
        setSubmitted(true);
    };

    const questions = [
        {
            question: '¿Qué principio de composición visual describe mejor esta imagen?',
            image: '/balance.jpg', // Imagen que ilustra el principio de balance
            options: [
                { text: 'Balance' },
                { text: 'Ritmo' },
                { text: 'Proporción' },
                { text: 'Espacio Negativo' },
            ],
            answer: 'Balance',
        },
        {
            question: 'Selecciona la estructura de composición que se representa en esta imagen.',
            image: 'https://hectorruizgolobart.com/imagenes/ejemplo-3-regla-de-los-tercios.jpg', // Imagen que muestra la regla de los tercios
            options: [
                { text: 'Reglas de los Tercios' },
                { text: 'Espiral Áurea' },
                { text: 'Proporción' },
                { text: 'Ritmo y Movimiento' },
            ],
            answer: 'Reglas de los Tercios',
        },
        {
            question: '¿Qué técnica de jerarquía visual se utiliza en este diseño?',
            image: '/jerarquia.jpg', // Imagen que muestra un diseño con jerarquía visual
            options: [
                { text: 'Énfasis' },
                { text: 'Composición en Capas' },
                { text: 'Espacio Positivo' },
                { text: 'Balance Asimétrico' },
            ],
            answer: 'Énfasis',
        },
        {
            question: '¿Qué principio de composición crea contraste visual entre elementos de texto?',
            image: 'https://ideasconcafe.com/wp-content/uploads/2018/10/06-1.png', // Imagen que muestra contraste tipográfico
            options: [
                { text: 'Contraste Tipográfico' },
                { text: 'Espacio Negativo' },
                { text: 'Proporción y Escala' },
                { text: 'Reglas de los Tercios' },
            ],
            answer: 'Contraste Tipográfico',
        },
        {
            question: '¿Qué estructura de composición ayuda a guiar la mirada del espectador en esta imagen?',
            image: 'https://www.format.com/wp-content/uploads/pexels-photo-326957.jpg', // Imagen que usa líneas para guiar la atención
            options: [
                { text: 'Línea y Dirección Visual' },
                { text: 'Balance Simétrico' },
                { text: 'Ritmo y Movimiento' },
                { text: 'Composición en Capas' },
            ],
            answer: 'Línea y Dirección Visual',
        },
    ];

    const handleStartCourse = () => {
        window.scrollTo(0, 0);
        navigate('/ejercicios-practicos');
    };

    return (
        <div className='min-h-screen'>
            <Banner />
            <Content>
                <Title>Cuestionario | Composición Visual</Title>
                <p className="mt-4 mb-12 text-gray-700">Responde las siguientes preguntas seleccionando la opción correcta:</p>

                {questions.map((q, index) => (
                    <div key={index} className="my-14">
                        <h2 className="text-lg font-bold">{q.question}</h2>
                        {q.image && (
                            <img src={q.image} alt={`Pregunta ${index}`} className="my-4 rounded-lg max-w-full lg:max-w-[38rem]" />
                        )}
                        <div className="mt-6">
                            {q.options.map((option, idx) => (
                                <label key={idx} className={`block p-2 my-1 rounded-lg cursor-pointer ${answers[`question-${index}`] === option.text ? 'bg-blue-600 text-white' : 'bg-slate-100 text-black'}`}>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option.text}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {option.text}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {!submitted && <Button onClick={handleSubmit}>Enviar</Button>}

                {showError && <p className="mt-4 text-red-500">Por favor, responde todas las preguntas.</p>}

                {submitted && (
                    <div className="mt-4">
                        <p className="font-bold bg-blue-600 text-white inline-block p-4 rounded-lg">Tu puntaje: {score} de {questions.length}</p>
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Respuestas incorrectas:</h3>
                            <div className='list-disc list-inside mt-4 text-gray-700 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                {questions.map((q, index) => {
                                    if (answers[`question-${index}`] !== q.answer) {
                                        return (
                                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                                <p className="font-medium">{q.question}</p>
                                                <p className="text-red-600 mt-2">Tu respuesta: {answers[`question-${index}`] || 'No respondida'}</p>
                                                <p className="text-green-600">Respuesta correcta: {q.answer}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </Content>
        </div>
    );
};

export default CuestionarioComposicionVisual;