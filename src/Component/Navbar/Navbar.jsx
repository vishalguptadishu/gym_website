import LogIn from "../LogIn/LogIn"
import styles from './Navba.module.css'
const Navbar=()=>{
    return (
        <div className={styles.Navbar} >
          <div className={styles.logo}>
           <img src="https://img.freepik.com/premium-vector/fitness-center-logo_25327-170.jpg" alt="" />
          </div>
          <div className={styles.link}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Program</li>
                <li>Training</li>
                <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.login}>
                <button>Join</button>
          </div>
        </div>
    )
}
export default Navbar;