import { useState } from "react";
const LogIn =()=>{
  let [email, setemail]=useState("")
  let [Password, setPassword]=useState("")
  console.log(email)

  function handalLogIn(){
    let user_obj = JSON.parse(localStorage.getItem("user"));
    if ((user_obj.email == email) & (user_obj.Password === Password)) {
      alert("You are Log in successfully");
      // localStorage.setItem("auth", true);

      // Navigate("/");
    } else {
      alert(" thes is wrong");
    }
  }

    return (
        <div className="Login">
          <h1>plse log in</h1>
          <div className="inp">
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="text" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
            <button onClick={handalLogIn} >Log In</button>
          </div>
          <div className="newUsers" >
             <p>If You are new </p>
          </div>
        </div>
    )
}
export default LogIn;