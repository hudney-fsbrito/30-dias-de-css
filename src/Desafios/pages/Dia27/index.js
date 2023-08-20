import styleDia27 from "./dia27.module.css";

function MenuExpand(props) {
  return (
    <div className={styleDia27.div}>
      <header className={styleDia27.topo}>
        <div className={styleDia27.logo}>Dia 27</div>

        <div id="click" className={styleDia27.hamburguer_Menu}>

          <label className={styleDia27.label}>
            <input className={styleDia27.input} type="checkbox"></input>
            <div className={styleDia27.hamburguer_Icon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>



          <div className={styleDia27.navBar}>
            <ul>
              <li>About</li>
              <li>Product</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

      </header>
    </div>
  )
}

export default MenuExpand;