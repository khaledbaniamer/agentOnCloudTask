import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getFavItems } from "../redux/favSlice";


const FavItems = ()=>{
    const dispatch = useDispatch()
    const {user_id} = useParams()
    const favItems = useSelector(state=>state.fav)
    console.log(favItems)
    useEffect(() => {
        dispatch(getFavItems(user_id))
    }, [dispatch])
    
    // const allFav =favItems.map((favItem , index)=>{
    //     return(

    // <div key={index} className="col-lg-4 col-sm-12 my-3 mb-3">
    //     <div className="card">
    //         <div className="card-body">
    //         <h5 className="card-title">{favItem.Item.Item_name}</h5>
    //         <p className="card-text">{favItem.Item.Item_description}</p>
    //          <NavLink to="" className="btn btn-dark">Read More</NavLink>
    //     </div>
    // </div>
    // </div>
    //     )
    // })

    return(
        
    <div className="container">
        <div className="m-5">
                <h2 className="mt-5">Favourite Items</h2>

                <div className="row">


                
            </div>

        </div>
    </div>
    )
}

export default FavItems;