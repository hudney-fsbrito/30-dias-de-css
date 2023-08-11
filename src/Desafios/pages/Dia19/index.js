import styleDia19 from "./dia19.module.css";

function Typewriter(props) {

  const typing = "typing-animation"

  return (
    <div className={styleDia19.div}>
      <p className={`${styleDia19.line} ${typing}`}>#30 Dias de css | Dia 19</p>
    </div>
  )

}

export default Typewriter;