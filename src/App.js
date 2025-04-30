import React, { useEffect } from "react";
import CardJoui from "../src/components/cardJoui/CardJoui.js";
import CardArthur from "./components/cardArthur/CardArthur.js";
import CardKaiser from "./components/cardKaiser/CardKaiser.js";
import './index.css';
import wallpaper1 from './img/wallpaper1.jpg';
import wallpaper2 from './img/wallpaper2.jpg';
import wallpaper3 from './img/wallpaper3.jpg';
import wallpaper4 from './img/wallpaper4.jpg';

function App() {
  useEffect(() => {
    const backgrounds = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];

    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    console.log("Imagem de fundo escolhida:", randomBackground);

    document.body.style.backgroundImage = `url(${randomBackground})`;
  }, []);
  return (
    <div className="App">
      <div className="card-grid">
        <CardArthur />
        <CardJoui />
        <CardKaiser />
      </div>
    </div>
  );
}

export default App;
