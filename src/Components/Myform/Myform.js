import React from 'react';
import './Myform.css';

export function Myform() {
  const [user, SetUser] = React.useState({ login: "", pass: "", email: "", tell: "" })

  const [validlog, SetStyle] = React.useState("nonvalid")
  const [validpass, SetStylepass] = React.useState("nonvalid")
  const [validemail, SetStyleemail] = React.useState("nonvalid")
  const [validtell, SetStyletell] = React.useState("nonvalid")

  function handlSubmit() {
    alert(user.login + " " + user.pass, user.email + " " + user.tell)
  }

  function onChandeLogin(event) {
    SetUser({ login: event.target.value, pass: user.pass, email: user.email, tell: user.tell })
    if (user.login.length > 3) {
      SetStyle("valid")
    }
    else {
      SetStyle("nonvalid")
    }
  }
  function onChandePassword(event) {
    SetUser({ login: user.login, email: user.email, tell: user.tell, pass: event.target.value })
    if (user.pass.length > 3) {
      SetStylepass("valid")
    }
    else {
      SetStylepass("nonvalid")
    }
  }
  function onChandeEmail(event) {
    SetUser({ login: user.login, pass: user.pass, tell: user.tell, email: event.target.value })
    if (user.email.length > 3) {
      SetStyleemail("valid")
    }
    else {
      SetStyleemail("nonvalid")
    }
  }
  function onChandeTell(event) {
    SetUser({ login: user.login, pass: user.pass, email: user.email, tell: event.target.value })
    if (user.tell.length > 3) {
      SetStyletell("valid")
    }
    else {
      SetStyletell("nonvalid")
    }
  }

  return <div className='Myform'>
    <form onSubmit={handlSubmit}>
      <div>
        <span>Login</span>
        <input type="text" className={validlog} onChange={onChandeLogin}></input>
      </div>
      <div>
        <span>Password</span>
        <input type="text" className={validpass} onChange={onChandePassword}></input>
      </div>
      <div>
        <span>Email</span>
        <input type="text" className={validemail} onChange={onChandeEmail}></input>
      </div>
      <div>
        <span>Tell</span>
        <input type="text" className={validtell} onChange={onChandeTell}></input>
      </div>
      <input type="submit" value="Ok"></input>
    </form >
  </div>

}

export default Myform;
