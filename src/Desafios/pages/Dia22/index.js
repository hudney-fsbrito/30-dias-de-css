import styleDia22 from "./dia22.module.css";
import dragao from "../../assets/icon/Ilustrations/dragoes-e-imagem-de-inteligencia-artificial-de-fantasia.jpg";
import doce from "../../assets/icon/Ilustrations/elementos-de-ouro-para-festa-de-aniversario-e-bolo.jpg";
import aurora from "../../assets/icon/Ilustrations/bela-paisagem-com-aurora-boreal.jpg";


function ExpandImage(props) {
const imagens = [dragao, doce,aurora];

  return(
    <div className={styleDia22.div}>
      <div className={styleDia22.container}>
        {imagens.map((image) => (
          <img src={image} className={styleDia22.image} alt=""></img>
        ))}
      </div>
    </div>
  )
}

export default ExpandImage;