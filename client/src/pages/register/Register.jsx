import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const isSellerParam = params.get('isSeller');
    setUser((prevUser) => ({
      ...prevUser,
      isSeller: isSellerParam === 'true',
    }));
  }, [location.search]);

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="India"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>Become a Freelancer</h1>
          <div className="toggle">
            <label htmlFor="">Activate freelancer account</label>
            <label className="switch">
              <input type="checkbox" checked={user.isSeller} onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
