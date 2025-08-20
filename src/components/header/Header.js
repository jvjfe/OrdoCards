import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><a href="#cartas">Cartas</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
