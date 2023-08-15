import styleDia23 from "./dia23.module.css";
import gitHub from "../../assets/icon/IcoesRedes/github.svg"
import linkedIn from "../../assets/icon/IcoesRedes/linkedin (1).svg"
import instagran from "../../assets/icon/IcoesRedes/instagram.svg"

function CardHover(props) {
  return (
    <div className={styleDia23.div}>
      <div className={styleDia23.card}>
        <img alt="" className={styleDia23.foto}></img>
        <h1 className={styleDia23.nome}>Hudney Brito</h1>
          <p className={styleDia23.cargo}>Desenvolvedor de softwre</p>
          <ul>
            <li><img src={gitHub} alt=""></img></li>
            <li><img src={linkedIn} alt=""></img></li>
            <li><img src={instagran} alt=""></img></li>            
          </ul>
      </div>
    </div>
  )
}

export default CardHover;