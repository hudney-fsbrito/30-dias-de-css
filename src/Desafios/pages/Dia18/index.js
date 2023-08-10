import styleDia18 from "./dia18.module.css";

function LightDark(props) {

  return(
  
  <div className={styleDia18.div}>
    <label className={styleDia18.label} >
      <input className={styleDia18.input} id="darkMode" type="checkbox"></input>
      <span></span>
      
    </label>
  </div>
    
  )
  
}

export default LightDark;

