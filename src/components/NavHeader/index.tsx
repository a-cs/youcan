import React from "react";
import { Link } from 'react-router-dom'

import "./styles.css"


function NavHeader() {
    return (
        <header className="nav-header">
            <nav className="navbar">

                <div id="logo">
                    <Link to="/">

                        <h1>YOU CAN</h1>
                        <h2>MOVEMENT</h2>
                    </Link>
                </div>

                <div className="space"></div>

                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/comunity">Comunidade</Link></li>
                    </ul>
                </div>


            </nav>





        </header>
    )
}

export default NavHeader
