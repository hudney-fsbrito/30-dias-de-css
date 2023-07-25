import { Link } from "react-router-dom";
// import IconeSocial from "../Dia1";
// import IconeSocial from "../Dia1";

function Home() {

  return (

    <header className="App-header">
      <h1>30 dias de CSS</h1>
      <Link to='/dia1'><button>Dia 1</button></Link>
      <Link to='/dia2'><button>Dia 2</button></Link>
    </header >

  );

}

export default Home;