import { Link, NavLink } from "react-router-dom";


const Footer = ()=>{
    return (
  <footer className="text-center text-white bg-dark mt-auto" >
<div className="footer">
<section className="mt-5  " >

    <div className="container p-4 pb-0" style={{marginTop:"37vh"}}>

      <section className="">
        <p className="d-flex flex-column justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <Link to="/singup" type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </Link>
        </p>
      </section>

    </div>

    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2022 Copyright:
      <NavLink className="text-white" to="">Agent On Cloud</NavLink>
    </div>


</section>
</div>   
  </footer>
    )
}

export default Footer;