import styleDia21 from "./dia21.module.css";

function ExpandCard(props) {
  return (
    <div className={styleDia21.div}>
      <div className={styleDia21.containerCard}>
        <img alt="" className={styleDia21.card}></img>
      </div>
      <div className={styleDia21.descripton}>
        <h1>Título Bacana</h1>
        <p>Superman hawkeye, “allan quatermain; genesis booster gold ant-man,” triton mister golog luke cageCaptain planet dreamcatcher, nova big daddy augustus “gus” beezer. Monica dawson, allan quatermain bird-brain kraven the hunter princess python karnak</p>
        {/* Superman hawkeye, “allan quatermain; genesis booster gold ant-man,” triton mister golog luke cage. Captain planet dreamcatcher, nova big daddy augustus “gus” beezer. Monica dawson, allan quatermain bird-brain kraven the hunter princess python karnak. */}
      </div>
    </div>
  )
}

export default ExpandCard;