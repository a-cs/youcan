import React from 'react'
import { Link } from 'react-router-dom';

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
                    <EventCard
                    title="O poder das vozes negras"
                    description="Um tema relevânte e atual sobre a luta diária
                    das pessoas negras no Brasil, vamos criar uma rede de
                    reflexão sobre o tema."
                    date="14/09" />
                    <EventCard
                    title="Diversidade"
                    description="Um bate papo acolhedor e potente sobre como a
                    sociedade e o mercado precisam se transformar para
                    acompanhar o impacto de TODES."
                    date="15/09" />
                    <EventCard
                    title="Educação"
                    description="Descubra como aprender através da curiosidade
                    pode ser fascinante, além de auxiliar na superação dos
                    desafios"
                    date="16/09" />
                    <EventCard
                    title="Tecnologia"
                    description="De onde vem a inovação? Você verá que muitas
                    tecnologias tem surgido e elas podem ser feitas por você."
                    date="17/09" />
                    <EventCard
                    title="Empreendedorismo"
                    description="Palavra da moda ou segredo do sucesso? Vamos
                    mostrar o que é empreendedorismo raiz e te ajudar a
                    entender se faz sentido pra você."
                    date="18/09" />

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
                    <Link to="/community">
                    <button>Saiba mais</button>
                    </Link>
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
                </div>

            </div>



            <Footer />

        </div>
    )
}

export default Landing
