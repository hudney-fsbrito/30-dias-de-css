import styleDia1 from "./dia1.module.css"

function IconeSocial(props) {
  return (
    <div className={styleDia1.div}>
      <ul className={styleDia1.ul}>
        <li className={styleDia1.li}>
          <span className={styleDia1.span}></span>
          <span className={styleDia1.span}></span>
          <span className={styleDia1.span}></span>
          <span className={styleDia1.span}></span>          
          <img className={styleDia1.image} width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/github.png" alt="github" />
        </li>
        
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className={styleDia1.image} width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/facebook-circled--v1.png" alt="facebook-circled--v1" />
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className={styleDia1.image} width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/twitter-circled--v1.png" alt="twitter-circled--v1" />
          </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className={styleDia1.image} width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/linkedin-circled--v1.png" alt="linkedin-circled--v1" />
          </li>
      </ul>
    </div>
  )
}

export default IconeSocial;