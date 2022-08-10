import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getItems } from "../redux/itemSlice";


const Home = ()=>{
    const {items} = useSelector(state=>state.items);
    const dispatch = useDispatch();
    // console.log(items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])
    
    const allItem = items.map((item)=>{
        return(
        <div key={item.id} className="col-lg-4 col-sm-12 my-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.Item_name}</h5>
                    <p className="card-text">{item.Item_description}</p>
                    <NavLink to={"singleItem/"+item.id} className="btn btn-dark">Read More</NavLink>
                </div>
            </div>
        </div>
        )
    })

    return (
        <>
            <div className="container mt-3">
                <div className="row">

                    {/* <div className="col-3 my-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-dark">Button</button>
                        </div>
                        </div>
                    </div> */}
                    {allItem}
                    
                </div>
            </div>
        </>
    )
}

export default Home;