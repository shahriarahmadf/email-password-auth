import React from 'react';

const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    console.log(email, password);
  }
  
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  }
  
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
  }

const Register = () => {
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder='Your Password' id="" />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;