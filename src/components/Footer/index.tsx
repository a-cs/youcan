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
                    <div className="social-networks">
                        <img src={instagramLogo} alt="Instagram" />
                        <p>Instagram</p>
                    </div>
                    <div className="social-networks">
                        <img src={linkedinLogo} alt="Linkedin" />
                        <p>Linkedin</p>
                    </div>
                </div>
            </div>
            <div>
            <h4>Contato</h4>
            <p>exemplo@aaaa.com</p>
            </div>

        </footer>
    )

}

export default MYFooter
