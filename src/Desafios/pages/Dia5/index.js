import styleDia5 from "./dia5.module.css"

function Pulse(props) {

  return (
    <div className={styleDia5.div}>
      <div className={styleDia5.pulse}></div>
      <div className={styleDia5.container}>
        <h1 className={styleDia5.text}>Pulse</h1>
        <div className={styleDia5.content}></div>
      </div>
    </div>
  )

}

export default Pulse;