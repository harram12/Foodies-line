
import { useState } from 'react';
import './Signinform.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleerror from './Util';

const Signinform = () => {
  const [signininfo, setsignininfo] = useState({
    email: '',
    password: '',
    yourchoice: '',
  });
 const changevalue = (e) => {
    const { name, value } = e.target;
    setsignininfo({ ...signininfo, [name]: value });
  };
  const submitted = async (e) => {
  e.preventDefault();

  const { email, password, yourchoice } = signininfo;

  console.log('Submitting form with data:', signininfo);

  // Simple client-side validation
  if (!email) {
    console.error('Email is missing!');
    return handleerror('Please enter your email.');
  }
  if (!password) {
    console.error('Password is missing!');
    return handleerror('Please enter your password.');
  }
  if (!yourchoice) {
    console.error('Yourchoice is missing!');
    return handleerror('Please enter your choice.');
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signininfo),
    });

    const result = await response.json();

    console.log('Response status:', response.status);
    console.log('Response data:', result);

    if (!response.ok) {
      console.error('Server returned error:', result.message);
      handleerror(result.message || 'Unknown server error');
    } else {
      toast.success(result.message);
      setsignininfo({ email: '', password: '', yourchoice: '' });
    }
  } catch (error) {
    console.error('Fetch error:', error);
    handleerror('Server error: ' + error.message);
  }
};

  return (
    <div id="in">
      <div className="signin-container">
        <form className="signin-form" onSubmit={submitted}>
          <h2 id="online">Welcome Back</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={signininfo.email}
            onChange={changevalue}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={signininfo.password}
            onChange={changevalue}
            autoComplete="current-password"
            required
          />

          <label htmlFor="yourchoice">Your Choice:</label>
          <textarea
            id="yourchoice"
            name="yourchoice"
            placeholder="Please enter your choice"
            value={signininfo.yourchoice}
            onChange={changevalue}
            required
          ></textarea>

          <br />

          <button type="submit">Sign In</button>

          <p className="signup-link">
            Don't have an account? <Link to="/Signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Signinform;

  