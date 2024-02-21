import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './App.css'

function PlaintextExample() {
const [username , setUsername] = useState("")
const [password , setPassword] = useState("")




  const submit = ()=>{

if(!username || !password){
  alert("Please fill both the Field")
}
else{
    alert("You are login in this page")
    setPassword("")
    setUsername("")
}
  }

  return (


    <>
      <div className="head">
        <h3>Login Page</h3>
      </div>

      <div className="login">

        <div className="user">
          <label htmlFor="username" >Username</label><br />
          <input type="text" placeholder='Write Your Name' value={username} onChange={(e) => setUsername(e.target.value)}/><br />
        </div>

        <div className="pass">
          <label htmlFor="Password" >Password</label><br />
          <input type="password" placeholder='Write Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default PlaintextExample;
