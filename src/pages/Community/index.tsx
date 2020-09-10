import React from 'react'

import NavHeader from '../../components/NavHeader';
import Footer from '../../components/Footer';

import "./styles.css"
import CommunityCard from '../../components/CommunityCard';


function Comunity() {


    return (
        <div >
            <NavHeader />
            <div className="community">
                <h3>Nossa <br /> Comunidade</h3>
                <h4>Criamos uma rede de pessoas dispostas a fazer a diferença no
                mundo. Nossa missão é atingir o máximo de jovens e adultos
                levando o senso do protagonismo estimulando a se conectarem com
                pessoas... </h4>
                <h3>Nosso <br /> Time</h3>
                <div className="departments">
                    <h5>Fundador</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://media-exp1.licdn.com/dms/image/C4D03AQFWSRMR9WuBEw/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=z_WdGp0kJdOTwbUF-Jp1QiQdtjFq6wovCQ2qYdxswRw"
                            name="Junior Rodrigues"
                            city="Curitiba"
                            state="Pr"
                            role="Fundador" />
                    </div>
                </div>

                <div className="departments">
                    <h5>Back Office</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIq7_V0nVm2q0K8OMu7tqcYcI8LnUPtVCKLjKvP3kEJX5hekJ0rtOCs8I0g3RdcTwguPNW772Upgc3LbgqgvddkwpghIH-_uWP-LLNpY-FWppiyCIOETPjOkdvCOyFyaKsSTQ9cqfoqgHNWefgbd5DH4MvotnbICBW5GizbqTurRo4gSLIsp5dlS8U_r-fMnlMmJ32Bt6F-6P3Tb3g71a39dm91A8O6e2h9LzP_fDev2CpMPhzh1FD_clwHATXdJMIHko28iVic_350_DAw46yKSUOKmxWLVDVEmD4jN9qv1nqUDtu4LdW0Kd-b75MI4r-doWB9MsPryYSONMl4eNHda1llhdVKgENl5ZCEg0ILc6NgVfHZ5s7MLF7ZDou2z8VDI6WWY3oVvJcP-e8wBVETmAR_gsCjWz8OKpp2yLoZl08F8ubpXgh8AtHtWSONm5qtoYZ4U6G0GC5VzuOf3mC3x6z6yiu5cPGZxGwzynm7NLBFSwHfi-sEWETEpGqwNdPjRzylACy3c19X_0MvgT9NIftaGMoQrZEXd9t8RIM5Qk2IvbGu9uRgx1MjdZC7fSKwb71Xn1XUdrFfzBFsoY64c7LdR2yjDqiGIY9vqXuFXM3OFcXPCcGPdMzZfooEIBtF1Ivn9svGBfBw3Ty9x_rRnTEx68COd_PFrWTV1D1NqfGpg0_A815BStFwLj_1DUdklDJ4DQnb4JVxWgUcV2pKcs09OzLUrkg=w200-h190-p-k-nu-ft"
                            name="Camila"
                            city="Socorro"
                            state="SP"
                            role="Head" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIo4keXSdHyraPgB7sNEMnHUtrxclfToEhek83_HYIQ8hzdD0rL3N4DtaxRZPOQDLERETlJUXzTVZ5QR1x_Z-i9tb3iRyses9uAjgeD0xKhrvZhcXrHEsX1MajkZmNHuYglKtUAeWboJJud2kZGDMtE5Hf1m9N05Ms4Tk-HhCGlGXj8ygW0goesoC5hUpYQG9tzU5M0ls13Y-2daJqKN3rHoltMFuHUPXs9YudB3xg-wKsvZghLxJ38SxlYZhG2FH2ugpevwyEpR-tMjMkq16osbzi2OB-skLaBG82M3lGmIOJjroZKgbn6ft7tvEWyHTPepldhnfHC0hn_HVErf9cjS_19_3s_b-KNhwGiUXuXlifPD9mdoUA8RaQvCHaYdC8nlC6pS1haV25yOhxc8OLU3BSVsDV5ZcE_MJmmQVpFl36mARx_7_KrqCWZ6CTt7FAPZs2Rj829howumkSCN82AqPissdKREXbY8Zywx1xsW83VPsVEKEfKVOv5n9rHwHtT-Y1PUqbUeW8M8npqyC7bh8myoYrdEk2V0Zb0ph21J53MwGLKOM4KKK5KAHTLkhLYmxXownnRz63koiXnOnBkVViLKFEW_fS_blFOs5qJhbEHnuT8VSkDY5NDRpa-aw_JXwy8OIl2DuQBvX4shbaH8WsxD_xqH5Gw9XWbRIVJJ0WuJJsEOSNvdLVmOEqSU1NJJd5o4SogOXpSQ3W9-s_33XUyIMYGfFA=w200-h190-p-k-nu-ft"
                            name="João Felipe"
                            city="Petrópolis"
                            state="RJ"
                            role="Criador de conteúdo" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqt2lNSIJQ0wKnlu3gegVmcN5x6HG7EYNb2sXevXMKXw7z8Qn6R2Hzz0ZGw2jayrcTGsM1xRIKmiCv3_3JtldioZxHx2Cuy-fWSM6oersSpC-uyyf5MsEebgbFdzS64Tl2Ry1VMJVHz4BfTPevAQkS-wyJAVQDZG6oGZCIRWT6MH2ch3aG_g19bp5rmTlb2z6i22j23SK1zue_9SRajYhVEbkLPeGK-l614GTa7HOsS1t3Tg548H7kNzM-0_3IzUjw8CATFfOXnly5UibyDeLQ0vgs7Hv94l4rkOHFQHwBIHoSNALP-H1bcQwobwf3fhUIaV-2HwAJQCGBS7QUn_T8hkA3J0RZCRJNhRtyLkQfnt-mLDBZ9k33dtn8h8NTqzDjt7ANzvADypy0Vfn0GW7i1XHC6dXEinSbOrcigQfPTTC-ouXTYZCYcrSnnszUZ2DyggEqfqA6AP0TcZQrOr0aHFzd0E1es_k95F3UgA-rUWInephFlY_uHcD1so2jcsOa6q6OiPrL9B28aZI_xB-Yz3w-CYvnjpeqnZXwSdCxrxG4UzxvmFVE9iZc38dWMrR1Wv7dArpknp9LjvxL-nPRQ-WcWyHFi-HsLPMccJYn1PSVzjpMAcA6lbvQXRJ2VtcFJDPqi4Ivup1N43OoZPrszmisLYRlH6A_Jad7fhpXvXaP_1nEqWtYcMuR4B8hbZSvnjrKdNQT5r2Qi3Vv_6orWEQmRpHkfPA=w200-h190-p-k-nu-ft"
                            name="Hully"
                            city="São Paulo"
                            state="SP"
                            role="Criadora de conteúdo" />
                            <CommunityCard
                            image="https://media-exp1.licdn.com/dms/image/C4D03AQGd8tqY3DRGsg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=8WVK5AcGzvIyHzZTFnd-WvpnPk3v6G2m0cWP7WogdWU"
                            name="Bia"
                            city="São Paulo"
                            state="SP"
                            role="Designer" />
                            <CommunityCard
                            image="https://media-exp1.licdn.com/dms/image/C4D03AQGIWWPcqBsTsg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=cBpLWkWirPQOCubmKWSenLJcbcdN7EuUDzGUU2_g7Hk"
                            name="Anderson"
                            city="Fortaleza"
                            state="CE"
                            role="Web Developer" />
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Comunity
