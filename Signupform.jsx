import { useState } from 'react';
import './Signupform.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleerror from './Util'

const Signupform = () => {
  const [signupinfo, setsignupinfo] = useState({
    username: '',
    email: '',
    password: '',
    yourchoice:''
  });

  const changevalue = (e) => {
    const { name, value } = e.target;
    setsignupinfo({ ...signupinfo, [name]: value });
  };

  const submitted = async (e) => {
    e.preventDefault();

    const { username, email, password,yourchoice } = signupinfo;

    if (!username || !email || !password ||!yourchoice) {
      return handleerror('Please enter all required fields.');
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupinfo),
      });

      const result = await response.json();

      if (!response.ok) {
        handleerror(result.message);
      } else {
        toast.success(result.message);
        setsignupinfo({ username: '', email: '', password: '' });
      }
    } catch (error) {
      handleerror('Server error: ' + error.message);
    }
  };

  return (
    <div id="up">
      <div className="signup-container">
        <form className="signup-form" onSubmit={submitted}>
          <h2 id="online">Online Order</h2>

          <label htmlFor="username">Username:</label>
          <input type="text" name="username" placeholder="Enter your name" value={signupinfo.username} onChange={changevalue} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter your email" value={signupinfo.email} onChange={changevalue} />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder="Enter your password" value={signupinfo.password} onChange={changevalue} />
            <label  htmlFor='yourchoice'>your choice</label>
      <textarea id="message" name="yourchoice" placeholder="please enter your choice" value={signupinfo.yourchoice} onChange={changevalue}></textarea><br></br>

          <button type="submit">Sign Up</button>

          <p className="login-link">
            Already have an account? <Link to="/Signin">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Signupform;
