import { Link } from "react-router-dom";
import styleHome from './Home.module.css'
import imageHomeDia1 from "../../assets/Dia1.gif"
import imageHomeDia2 from "../../assets/Dia2.gif"
import imageHomeDia3 from "../../assets/Dia3.gif"
import imageHomeDia4 from "../../assets/Dia4.gif"
import imageHomeDia5 from "../../assets/Dia5.gif"
import imageHomeDia6 from "../../assets/Dia6.gif"
import imageHomeDia7 from "../../assets/Dia7.gif"
import imageHomeDia8 from "../../assets/Dia8.gif"
import imageHomeDia9 from "../../assets/Dia9.gif"
import imageHomeDia10 from "../../assets/Dia10.gif"
import imageHomeDia11 from "../../assets/Dia11.gif"
import imageHomeDia12 from "../../assets/Dia12.gif"
import imageHomeDia13 from "../../assets/Dia13.gif"
import imageHomeDia14 from "../../assets/Dia14.gif"
import imageHomeDia15 from "../../assets/Dia15.gif"

function Home() {
  const images = [imageHomeDia1, imageHomeDia2, imageHomeDia3, imageHomeDia4, imageHomeDia5, imageHomeDia6, imageHomeDia7, imageHomeDia8, imageHomeDia9, imageHomeDia10, imageHomeDia11, imageHomeDia12, imageHomeDia13, imageHomeDia14, imageHomeDia15]

  return (

    <header className="App-header">
      <h1>30 dias de CSS</h1>

      <section className={styleHome.section}>
        <div className={styleHome.carousel}>
          <button className={styleHome.btnL}>L</button>
          <button className={styleHome.btnR}>R</button>
          <div className={styleHome.inner}>

            {images.map((image, i) => (
              <Link to={'/dia' + (i + 1)} target="_blank"><img className={styleHome.image} src={image} alt="Gif dos projetos do desafio"></img></Link>

            ))}
          </div>
        </div>
      </section>

      {/* <Link to='/dia1' target="_blank"><img className={styleHome.image} src={imageDia1} alt="Animação de ícone em camadas"></img><button>Dia 1</button></Link>
      <Link to='/dia2' target="_blank"><img className={styleHome.image} src={imageDia2} alt="Animação de ícone em camadas"></img><button>Dia 2</button></Link> */}
    </header >

  );

}

export default Home;