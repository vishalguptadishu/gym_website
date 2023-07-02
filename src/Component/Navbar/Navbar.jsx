import LogIn from "../LogIn/LogIn"
import './Navbar.css'
const Navbar=()=>{
    return (
        <div className="Navbar" >
          <div className="logo">
           <img src="https://w7.pngwing.com/pngs/779/1005/png-transparent-gym-logo.png" alt="" />
          </div>
          <div className="link">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Program</li>
                <li>Training</li>
                <li>Pricing</li>
            </ul>
          </div>
          <div className="login">
                <button>Join</button>
          </div>
        </div>
    )
}
export default Navbar;