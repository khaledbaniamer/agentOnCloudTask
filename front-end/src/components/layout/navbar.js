import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { getUser, logOut } from '../../redux/userSlice';

const NavBar = ()=>{
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.user);
  // console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const handelLogout =(e)=>{
    dispatch(logOut(user.user_id))
    navigate('/login')
  }
  // console.log("test")
    return(
<>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark static-top">
  <div className="container">
    <NavLink className="navbar-brand" to="#">
      Agent On Cloud
    </NavLink>

    <div>
    <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-4">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        {!user.isLogin && 
        <>
        <li className="nav-item mx-4">
          <NavLink className="nav-link" to="/singup">SignUp</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        </>
        }
        {user.isLogin && 
        <>
        <li className="nav-item mx-4">
          <NavLink className="nav-link" to="/addItem">Add Product</NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink className="nav-link" to={"/useritem/"+user.user_id}>My Items</NavLink>
        </li>
        {/* <li className="nav-item mx-4">
          <NavLink className="nav-link" to={"/fav/"+user.user_id}>My Favourite</NavLink>
        </li> */}
        <li className="nav-item mx-4">
          <Link className="nav-link" onClick={handelLogout} to="/">Logout</Link>
        </li>
        <li className="nav-item mx-4">
          <sapn className="nav-link" to="/login">Welecom {user.name}</sapn>
        </li>
        </>
        }
    </ul>
    </div>
  </div>
</nav>

</>
    )
}

export default NavBar;