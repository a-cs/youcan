import React from "react";

import instagramLogo from "../../assets/images/icons/instagram.svg";
import linkedinLogo from "../../assets/images/icons/linkedin.svg";

import "./styles.css"


function MYFooter() {
    return (
        <footer className="page-footer">
            <div>
                <h4>Nos siga nas redes sociais</h4>
                <div className="social">
                    <a href="https://www.instagram.com/you.canmovement/" target="blank" className="social-networks">
                        <img src={instagramLogo} alt="Instagram" />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.linkedin.com/company/ycmovement" target="blank" className="social-networks">
                        <img src={linkedinLogo} alt="Linkedin" />
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>
            <div>
                <h4>Contato</h4>
                <a href="mailto:movementyoucan@gmail.com"><p>movementyoucan@gmail.com</p></a>
            </div>

        </footer>
    )

}

export default MYFooter
