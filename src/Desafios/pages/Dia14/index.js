import styleDia14 from "./dia14.module.css";

function CheckHeart(props) {
  
  return(
    <div className={styleDia14.div}>
      <div className={styleDia14.container}>
        
        <label className={styleDia14.content}>
          <input type="checkbox"></input>
          <samp className={styleDia14.chk}></samp>
        </label>
      </div>
    </div>
  )

}

export default CheckHeart;