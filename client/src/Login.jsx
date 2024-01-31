import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result =>{
      console.log(result)
      if(result.data === "success"){
        navigate('/dashboard')

      }

    
    })
    .catch(err=> console.log(err))
   };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
             
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
               
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <Link to='/register' className="btn btn-primary mt-2">register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
