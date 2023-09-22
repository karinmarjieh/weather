import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // for not letting the page reloaded
    console.log(email);
    console.log(pass);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input
          value={email}
          id="email"
          type="email"
          name="email"
          placeholder="karinmarjieh@example.com"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="password"> Password</label>
        <input
          value={pass}
          id="password"
          type="password"
          name="password"
          placeholder="******"
          onChange={(e)=>setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      
    </div>
  )
}
