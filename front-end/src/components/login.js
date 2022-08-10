import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";


const Login = ()=>{
    const userLoginData = useSelector(state=>state.user)
    // console.log(userLoginData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginData , setLoginData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setLoginData({
          ...loginData,
          [e.target.name]: value
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(loginData)
        dispatch(login(loginData))
        navigate('/')
    }
    return(
        <div className="container" >
            <form onSubmit={handleSubmit} className="m-5" style={{width:"50%"}}>
                <h3 className="mb-5">Login</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input
                     type="email" 
                     id="form3Example3" 
                     className="form-control" 
                     name="email"
                     onChange={handleChange}
                     value={loginData.email}
                     required
                     />
                </div>


                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input 
                    type="password" 
                    id="form3Example4" 
                    className="form-control" 
                    onChange={handleChange}
                    name="password"
                    value={loginData.password}
                    required
                    />
                </div>

                <button type="submit" className="btn  btn-dark btn-block mb-4">Login</button>

            </form>
        </div>
    )
}

export default Login