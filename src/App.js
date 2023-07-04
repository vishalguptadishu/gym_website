import LogIn from "./Component/LogIn/LogIn";
import Singin from "./Component/SingIn/Singin";
import Home from "./pages/Home/home";
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/Singin" element={<Singin />} />    
      </Routes>
    
    
    </div>
  );
}

export default App;
