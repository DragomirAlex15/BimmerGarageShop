import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        alert("User creat!");
        window.location.href = "/login";
      });
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
