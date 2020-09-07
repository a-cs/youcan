import React from 'react'

import NavHeader from '../../components/NavHeader';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';

import radiofobia from "../../assets/images/icons/radiofobia.svg"
import fundacaoEstudar from "../../assets/images/icons/fundacao-estudar.svg"


import "./styles.css"


function Landing() {


    return (
        <div >
            <NavHeader />

            <div className="top">
                <h3>
                    REDE DE PESSOAS <br /> QUE FAZEM A <br /> DIFERENÇA
                </h3>
                <h4>
                    Venha ser protagonista
                </h4>

            </div>

            <div className="next-events">
                <h3>Próximos eventos</h3>
                <div className="events">
                    <EventCard title="O Poder das Vozes Negras" date="14/09" />
                    <EventCard title="Da voz da aceitação para voz da transformação" date="15/09" />
                    <EventCard title="Aprendizagem auto dirigida , transforme seu percurso" date="16/09" />
                    <EventCard title="Tecnologia, se você gosta, você tem lugar" date="17/09" />
                    <EventCard title="Brasileiros: Aqui é empreendedorismo raiz" date="18/09" />

                    <div className="cta">
                        <h4>Não fique de fora dessa</h4>
                        <a href="https://www.sympla.com.br/semana---you-can-movement__947805" target="blank">
                        <button>Inscreva-se</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="about-title">
                    <h3>Sobre a YOU CAN</h3>
                    <h4>Juntando pessoas de todas as partes do Brasil. Com foco em
                    <b> capacitar e informar </b>e <b>criar uma rede</b> de gente boa.</h4>

                    <button>Saiba mais</button>
                </div>
                <div className="spacer"></div>

                <div className="about-numbers">
                    <div className="numbers">
                        <h3>1</h3>
                        <h4>Palestras com diversos assuntos </h4>
                    </div>
                    <div className="numbers" id="number2">
                        <h3>2</h3>
                        <h4>Comunidade engajada para montar network e discutir pautas </h4>
                    </div>
                    <div className="numbers" id="number3">
                        <h3>3</h3>
                        <h4>Mentorias para direcionamento de carreira</h4>
                    </div>
                </div>

            </div>

            <div className="supporters">
                <h3>Quem acredita nesse movimento</h3>
                <div className="supporter-logos">
                    <img src={fundacaoEstudar} alt="Fundação Estudar" />
                    <img src={radiofobia} alt="RádioFobia" />
                    <img src={fundacaoEstudar} alt="Fundação Estudar" />
                    <img src={radiofobia} alt="RádioFobia" />
                    <img src={fundacaoEstudar} alt="Fundação Estudar" />
                    <img src={radiofobia} alt="RádioFobia" />
                    <img src={fundacaoEstudar} alt="Fundação Estudar" />
                    <img src={radiofobia} alt="RádioFobia" />
                    <img src={fundacaoEstudar} alt="Fundação Estudar" />
                    <img src={radiofobia} alt="RádioFobia" />
                </div>

            </div>



            <Footer />

        </div>
    )
}

export default Landing
