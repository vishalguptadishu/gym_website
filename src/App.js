// import Singin from './Component/SingIn/Singin';
// import LogIn from './Component/LogIn/LogIn';
import Slider from './Component/Sider/Slider';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Cart from './Component/Cart/Cart';
import Trainer from './Component/Trainer/Trainer';
function App() {
  return (
    <div className="App">
    <Navbar />
    {/* <LogIn /> */}
    {/* <Singin /> */}
    <Slider/>
    <About />
    {/* <Cart /> */}
    <Trainer />
    </div>
  );
}

export default App;
