import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Bienvenida from './views/Bienvenida/Bienvenida';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';


function App() {
  const location= useLocation();
  return (
    <div className="App">
      {/* <div id="borde" ></div> */}
      {/* {location!=="/"&&<NavBar></NavBar>} */}
      <Route exact path="/" render={()=><Bienvenida/>}/>
      <Route exact path="/home" render={()=><Home/>}/>
      <Route exact path="/detail/:id" render={()=><Detail/>}/>
      <Route exact path="/create" render={()=><Form/>}/>
    </div>
  );
}

export default App;
