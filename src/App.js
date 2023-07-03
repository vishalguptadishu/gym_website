import Singin from './Component/SingIn/Singin';
// import LogIn from './Component/LogIn/LogIn';
import Slider from './Component/Sider/Slider';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
// import Cart from './Component/Cart/Cart';
import Trainer from './Component/Trainer/Trainer';
import Pricing from './Component/Pricing/Pricing';
import Footer from './Component/Footer/Footer';
import LogIn from './Component/LogIn/LogIn';
function App() {
  return (
    <div className="App">
    <Navbar />
    {/* <LogIn /> */}
    <Singin />
    <Slider/>
    <About />
    {/* <Cart /> */}
    <Trainer />
    <Pricing />
    <Footer />
    {/* <LogIn /> */}
    </div>
  );
}

export default App;
