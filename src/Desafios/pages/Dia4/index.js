import styleDia4 from "./dia4.module.css"

function BtnEfeito(props) {
  return(
    <div className={styleDia4.div}>
      <button className={styleDia4.btn}><span className={styleDia4.spanColor}></span>30 dias de css</button>
    </div>
  )
}

export default BtnEfeito;