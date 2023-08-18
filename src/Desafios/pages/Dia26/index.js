import styleDia26 from "./dia26.module.css";

function MenuBurg(props) {

  return (
    <div className={styleDia26.div}>
      <div id="click" className={styleDia26.hamburguer_Menu}>

        <label className={styleDia26.label}>
          <input className={styleDia26.input} type="checkbox"></input>
          <div className={styleDia26.hamburguer_Icon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>

        <div className={styleDia26.navBar}>
          <ul>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
    </div>
  )

}

export default MenuBurg;