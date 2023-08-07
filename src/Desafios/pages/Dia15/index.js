import styleDia15 from "./dia15.module.css";
import artonaut from "../../assets/icon/Ilustrations/Astronaut_Dark_.png"
import balloon from "../../assets/icon/Ilustrations/Balloon_Dark.png"
import dog from "../../assets/icon/Ilustrations/Dog_Dark.png"
import camera from "../../assets/icon/Ilustrations/No_Images_-_Light.png"

function Flipped(props) {

  const imagens = [artonaut, dog, balloon]

  return (
    <div className={styleDia15.div}>

      {imagens.map((img) => (

        <div className={styleDia15.card}>
          <div className={styleDia15.cardBack}>
            <img src={img} alt=""></img>
          </div>
          <div className={styleDia15.cardFront}>
            <img src={camera} alt=""></img>
          </div>
        </div>

      ))
      }
    </div>


  )
}

export default Flipped;