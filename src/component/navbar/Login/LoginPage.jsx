//LoginPage.jsx
import React, {useSate} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../../../assets/fingoLogo.svg'
const LoginPage = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const loginbtn = () => {
    if (mobile === "1863199573" && password === "1234") {
    alert("Login Successful");
      navigate("/home"); 
    } else {
      alert("Invalid Password");
    }
  };
  return (
    <div>
        
      <form className="max-w-lg mx-auto mt-10 p-10 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center"><img className="w-40 h-20 mx-auto" src={logo} alt="" /></h2>
        <div className="w-15 rounded-full mx-auto mb-5">
          <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <h1 className="text-xl font-semibold text-center">Ayas</h1>
          <h1 className="text-sm font-semibold ">01863199573</h1>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Mobile</label>
          <input type="text" className="input input-bordered w-full" onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label className="block mb-2">Password</label>
          <input type="password" className="input input-bordered w-full" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" onClick={loginbtn} className="btn btn-primary w-full">Login</button>
      </form>
    </div>
    
  );
};

export default LoginPage;
