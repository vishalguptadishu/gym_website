import { useState } from "react";
import "./Singin.css"
const Singin =()=>{

    let [email, setemail]=useState("")
    let [Password, setPassword]=useState("")
   

    function SinginFun(){
       let user_obj={
        email,
        Password
       }
       localStorage.setItem("user", JSON.stringify(user_obj))
    }
    return (
        <div className="Singin">
          <h1>plse log in</h1>
          <div className="inp">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="Email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
            <br />
            <label htmlFor="">Mob-No.</label>
            <br />
            <input type="number" placeholder="EmMob-No.ail" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="Password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
            <label htmlFor="">Age</label>
            <br />
            <input type="number" placeholder="number" />
            <br />
            <button onClick={SinginFun} >sing In</button>
          </div>
          <div className="newUsers" >
             <p>Allready have acount </p>
          </div>
        </div>
    )
}
export default Singin;