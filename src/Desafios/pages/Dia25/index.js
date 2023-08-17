import styleDia25 from "./dia25.module.css";

function TelaLogin(props) {

  return (
    <div className={styleDia25.div}>
      <form id="login" className={styleDia25.formulario}>

        <div className={styleDia25.container_Ipt}>
          <label>E-mail</label>
          <input type="email" className={styleDia25.email}></input>
          <label>Senha</label>
          <input type="password" className={styleDia25.pass}></input>
        </div>
        <div className={styleDia25.verificacao}>
          <label>
            <input type="checkbox" className={styleDia25.check}></input>Manter conctado
            <span></span>
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>

        <div className={styleDia25.container_Btn}>
          <button name="btn_Entrar" className={styleDia25.btn_Login}>Entrar</button>
          <button name="btn_Cadastrar" className={styleDia25.btn_Cadastro}>Fazer cadastro</button>
        </div>

      </form>
      <div className={styleDia25.container_descricao}>
        <h1 className={styleDia25.titulo}>Dia 25</h1>
        <p className={styleDia25.descricao}>Superman hawkeye, “allan quatermain; genesis booster gold ant-man,” triton mister golog luke cageCaptain planet dreamcatcher, nova big daddy augustus “gus” beezer.</p>
      </div>
    </div>
  )

}

export default TelaLogin;