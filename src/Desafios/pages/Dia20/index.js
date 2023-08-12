import styleDia20 from "./dia20.module.css";

function Sticky(props) {
  return (
    <div className={styleDia20.div}>
      <div className={styleDia20.adesivo}>

        <div className={styleDia20.content}>
          <div className={styleDia20.circulo}>Dia 20</div>
        </div>

        <div className={styleDia20.plasticoFrente}>
          <div className={styleDia20.circulo}></div>
        </div>

        <div className={styleDia20.plasticoTraz}>
          <div className={styleDia20.circulo}></div>
        </div>

      </div>
    </div>
  )
}

export default Sticky;