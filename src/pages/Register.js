import React, { useState } from "react";

function Register() {
  const [value, setValue] = useState({
     firstName : "",
     lastName : "",
     email: "",
     password: "",
     confirmPassword : "",

  });
  const handleOnchange = (e)=>{
       
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" Reg Data", value);
      if(!value.email.includes('@')){
         alert("Email is invalid")
      }
      if(value.password.length<=3 ){
     alert("password lenght must be greater than 3 chars ")
      }
      if(value.password !== value.confirmPassword){
        alert(" confirm password doenst match with the password")
      }
  };
  return (
    <div className="regPage">
      <div className="regFormDiv">
        <form className="form"  onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={value.firstName}
            onChange={handleOnchange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={value.lastName}
            onChange={handleOnchange}
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            required
            value={value.email}
            onChange={handleOnchange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={value.password}
            onChange={handleOnchange}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={value.confirmPassword}
            onChange={handleOnchange}
          />
        <button > Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
