import Cart from "../Cart/Cart"
import "./Trainer.css"
const Trainer=()=>{
    return (
        <div className="Trainer">
            <div className="hader">
             <h3>Meet Our Team</h3>
             <h3>-</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint hic quo qui debitis ut nihil quaerat maiores ipsam itaque rerum, officia architecto, sapiente voluptatem.</p>
            </div>
            <div className="cart">
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />

            </div>
        </div>
    )
}
export default Trainer