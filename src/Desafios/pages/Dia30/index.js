import styleDia30 from "./dia30.module.css";

function Tilted(props) {
  return (
    <div className={styleDia30.div}>

      <div className={styleDia30.tilt_wrap}>
        
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>
        <span className={styleDia30.tilt}></span>

        <div className={styleDia30.tilt_box}>
          <h1 className={styleDia30.tilt_h1}>Dia 30</h1>
        </div>

      </div>
    </div>
  )
}

export default Tilted;