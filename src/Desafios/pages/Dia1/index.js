import styleDia1 from "./dia1.module.css"

function IconeSocial(props) {
  return (
    <div className={styleDia1}>
      <ul>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/github.png" alt="github" />
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/facebook-circled--v1.png" alt="facebook-circled--v1" />
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/twitter-circled--v1.png" alt="twitter-circled--v1" />
          </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/228BE6/linkedin-circled--v1.png" alt="linkedin-circled--v1" />
          </li>
      </ul>
    </div>
  )
}

export default IconeSocial;