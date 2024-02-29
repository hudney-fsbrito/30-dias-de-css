// import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes';

import { register} from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

register();


// import IconeSocial from './Desafios/Dia1';

function App() {
  return (
    <div className="App">
     <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
