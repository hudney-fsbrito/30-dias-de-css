import styleDia28 from "./dia28.module.css";

function ExplodeFogos(props) {
  return(
   <div className={styleDia28.div}>
    <div id="fogos" className={styleDia28.fogos}>
      <div className={styleDia28.explode}></div>
       <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>      
    </div>

    <div id="fogos2" className={styleDia28.fogos}>
      <div className={styleDia28.explode}></div>
       <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>      
    </div>
    
    <div id="fogos3" className={styleDia28.fogos}>
      <div className={styleDia28.explode}></div>
       <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>
      <div className={styleDia28.explode}></div>      
    </div>
   </div>
  )
}

export default ExplodeFogos;