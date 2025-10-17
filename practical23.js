import React, { useState } from 'react';

function Login() {
  const [user,setUser] = useState(''); 
  const [pass,setPass] = useState(''); 
  const [msg,setMsg] = useState('');
  
  const handleLogin = () => setMsg(`Logged in as ${user}`);
  
  return (
    <div>
      <input placeholder="Username" value={user} onChange={e=>setUser(e.target.value)} />
      <input placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
