import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/itemSlice";


const AddItem = ()=>{
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [itemData , setItemData] = useState({
        name:'',
        description:'',
        user_id:user.user_id
    })

    
    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setItemData({
          ...itemData,
          [e.target.name]: value
        })

    }


    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(itemData)
        dispatch(addItem(itemData))
        setItemData({
            name:'',
            description:'',
            user_id:user.user_id
        })
        navigate('/addItem')

    }
    return(
        <>
            <form onSubmit={handleSubmit} style={{width:"70%"}} className="m-5">
                <h3>Add Item</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Item Name</label>
                    <input 
                    type="text"
                    id="form3Example3"
                    className="form-control"
                    value={itemData.name}
                    name="name"
                    onChange={handleChange}
                    required
                      />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Item Description</label>
                    <textarea className="form-control" name="description" value={itemData.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn  btn-dark btn-block mb-4">Add</button>
            </form>
        </>
    )
}

export default AddItem;