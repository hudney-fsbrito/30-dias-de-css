import styleDia9 from "./dia9.module.css"

function Pendulo(props) {
  
  return(
    <div className={styleDia9.div}>
      <div className={styleDia9.container}>
        <div className={styleDia9.content}><span className={styleDia9.pendulo}></span></div>
        <div className={styleDia9.content}><span className={styleDia9.pendulo}></span></div>
        <div className={styleDia9.content}><span className={styleDia9.pendulo}></span></div>
        <div className={styleDia9.content}><span className={styleDia9.pendulo}></span></div>
        <div className={styleDia9.content}><span className={styleDia9.pendulo}></span></div>
        
      </div>
    </div>
  )
}

export default Pendulo;