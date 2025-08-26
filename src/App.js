import React, { useEffect } from "react";
import CardJoui from "../src/components/cardJoui/CardJoui.js";
import CardArthur from "./components/cardArthur/CardArthur.js";
import CardKaiser from "./components/cardKaiser/CardKaiser.js";
import CardDante from "./components/cardDante/CardDante.js";
import CardAnfitriao from "./components/cardAnfitriao/CardAnfitriao.js";
import CardKian from "./components/cardKian/CardKian.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import './index.css';
import wallpaper1 from './img/wallpaper1.jpg';
import wallpaper2 from './img/wallpaper2.jpg';
import wallpaper3 from './img/wallpaper3.jpg';
import wallpaper4 from './img/wallpaper4.jpg';

function App() {
  useEffect(() => {
    const backgrounds = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url(${randomBackground})`;
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="card-grid" id="cartas">
        <CardArthur />
        <CardJoui />
        <CardKaiser />
        <CardDante />
        <CardAnfitriao />
        <CardKian />
      </div>
      <section id="sobre" className="sobre-bloco">
        <h2>Sobre o Projeto</h2>
        <p>
          Este site foi criado por <strong>Jvjfe</strong> como forma de treinar e
          aprimorar minhas habilidades em <strong>React</strong>, <strong>CSS</strong>,
          <strong> JavaScript</strong> e outras tecnologias modernas de desenvolvimento web.
        </p>
        <p>
          O projeto é inspirado em <strong>Ordem Paranormal</strong>, uma obra criada
          por <strong>Rafael Lange (Cellbit)</strong>, que mistura elementos de
          investigação, mistério e horror em um universo colaborativo e imersivo.
        </p>
        <p>
          Todo o código deste site está disponível de forma aberta no meu GitHub:{" "}
          <a
            href="https://github.com/jvjfe/OrdoCards"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jvjfe/OrdoCards
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
