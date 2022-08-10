import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";


const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData , setUserData] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
    });

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
          ...userData,
          [e.target.name]: value
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(userData)
        dispatch(signup(userData))
        navigate('/login')
    }

    return(
<div className="container">
        <form onSubmit={handleSubmit} style={{width:"50%"}} className="m-5">
        <h3 >Sign Up</h3>
        <div className="row mb-4">


            <div className="col">
            <div className="form-outline">
                <label className="form-label" htmlFor="form3Example1">First name</label>
                <input 
                type="text" 
                id="form3Example1" 
                className="form-control" 
                value={userData.fname}
                name="fname"
                onChange={handleChange}
                required
                />
            </div>
            </div>

            <div className="col">
            <div className="form-outline">
                <label className="form-label" htmlFor="form3Example2">Last name</label>
                <input 
                type="text" 
                id="form3Example2" 
                className="form-control" 
                value={userData.lname}
                name="lname"
                onChange={handleChange}
                required
                />
            </div>
            </div>
        </div>


        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">Email address</label>
            <input
            type="email" 
            id="form3Example3" 
            className="form-control" 
            value={userData.email}
            name="email"
            onChange={handleChange}
            required
            />
        </div>


        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example4">Password</label>
            <input 
            type="password" 
            id="form3Example4" 
            className="form-control" 
            value={userData.password}
            name="password"
            onChange={handleChange}
            required
            />
        </div>



        <button type="submit" className="btn  btn-dark btn-block mb-4">Sign up</button>

        </form>
</div>
    )
}

export default Signup;