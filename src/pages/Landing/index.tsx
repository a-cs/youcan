import React from 'react'

import NavHeader from '../../components/NavHeader';
import Footer from '../../components/Footer';

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
                <div className="numbers">
                    <h3>2</h3>
                    <h4>Comunidade engajada para montar network e discutir pautas </h4>
                </div>
                <div className="numbers">
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
