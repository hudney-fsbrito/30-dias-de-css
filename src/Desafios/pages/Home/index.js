import { Link } from "react-router-dom";
import styleHome from './Home.module.css'
import imageHomeDia1 from "../../assets/Dia1.gif"
import imageHomeDia2 from "../../assets/Dia2.gif"
import imageHomeDia3 from "../../assets/Dia3.gif"
import imageHomeDia4 from "../../assets/Dia4.gif"
import imageHomeDia5 from "../../assets/Dia5.gif"
import imageHomeDia6 from "../../assets/Dia6.gif"
import imageHomeDia7 from "../../assets/Dia7.gif"


function Home() {
  const images = [imageHomeDia1, imageHomeDia2, imageHomeDia3, imageHomeDia4, imageHomeDia5, imageHomeDia6, imageHomeDia7]

  return (

    <header className="App-header">
      <h1>30 dias de CSS</h1>

      <section className={styleHome.section}>
        {images.map((image, i) => (
          <Link to={'/dia' + (i + 1)} target="_blank"><img className={styleHome.image} src={image} alt="Gif dos projetos do desafio"></img></Link>

        ))}
      </section>

      {/* <Link to='/dia1' target="_blank"><img className={styleHome.image} src={imageDia1} alt="Animação de ícone em camadas"></img><button>Dia 1</button></Link>
      <Link to='/dia2' target="_blank"><img className={styleHome.image} src={imageDia2} alt="Animação de ícone em camadas"></img><button>Dia 2</button></Link> */}
    </header >

  );

}

export default Home;