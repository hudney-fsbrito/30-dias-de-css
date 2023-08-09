import styleDia17 from "./dia17.module.css";
import search from "../../assets/icon/IconesVazados/search.svg";

function Search(props) {

  return (
    <div className={styleDia17.div}>
      <label className={styleDia17.search}>
        <input type="text" id="search" placeholder="Pesquisa"></input>
        <button>
          <img src={search} alt=""></img>
        </button>
      </label>
    </div>
  )

}

export default Search;