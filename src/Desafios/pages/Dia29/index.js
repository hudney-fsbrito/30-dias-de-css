import styleDia29 from "./dia29.module.css";
import dragao from "../../assets/icon/Ilustrations/dragoes-e-imagem-de-inteligencia-artificial-de-fantasia.jpg";
import doce from "../../assets/icon/Ilustrations/elementos-de-ouro-para-festa-de-aniversario-e-bolo.jpg";
import paisagem from "../../assets/icon/Ilustrations/bela-paisagem-com-aurora-boreal.jpg";


function Slide(props) {

  return (
    <div className={styleDia29.div}>
      <div className={styleDia29.content}>
        <div className={styleDia29.navegacao}>
          <label className={styleDia29.labelBar} for="slide1"></label>
          <label className={styleDia29.labelBar} for="slide2"></label>
          <label className={styleDia29.labelBar} for="slide3"></label>
        </div>
        <div className={styleDia29.slides}>

          <input type="radio" name="slide" id="slide1"></input>
          <input type="radio" name="slide" id="slide2"></input>
          <input type="radio" name="slide" id="slide3"></input>


          <div className={styleDia29.slide} >
            <img src={doce} alt=""></img>
          </div>
          <div className={styleDia29.slide} >
            <img src={paisagem} alt=""></img>
          </div>
          <div className={styleDia29.slide} >
            <img src={dragao} alt=""></img>
          </div>

        </div>


      </div>
    </div>
  )

}

export default Slide;