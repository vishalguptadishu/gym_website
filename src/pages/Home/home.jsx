import About from "../../Component/About/About"
import Footer from "../../Component/Footer/Footer"


import Navbar from "../../Component/Navbar/Navbar"
import Pricing from "../../Component/Pricing/Pricing"
import Slider from "../../Component/Sider/Slider"
import Trainer from "../../Component/Trainer/Trainer"


const Home =()=>{
    return (
        <div className="Home">
         <Navbar />
         <Slider/>
         <About />
         <Trainer />
         <Pricing />
        <Footer />
       
        </div>
    )
}
export default Home;