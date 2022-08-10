import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleItem, updateItem } from "../redux/itemSlice";



const UpdateItem = ()=>{
    const navigate = useNavigate();
    const {item_id} = useParams()
    
    const [itemData , setItemData] = useState({
        Item_name:"",
        Item_description:""
    });
    // const {items} = useSelector(state=>state.items);
    const dispatch = useDispatch()

    // console.log(items)
    useEffect(() => {
        const fetchSingleItem = async()=>{

            const response = await axios.get(`http://localhost:3005/item/${item_id}`)
            setItemData(response.data[0])
        }

        fetchSingleItem()
        
    }, [])


    
    
    // console.log(items)
    console.log(itemData)
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
        dispatch(updateItem(itemData))
        
        // navigate('/home')
        
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
                    value={itemData.Item_name}
                    name="Item_name"
                    onChange={handleChange}
                    required
                      />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Item Description</label>
        <textarea className="form-control" name="Item_description" onChange={handleChange} value={itemData.Item_description}></textarea>
                </div>
                <button type="submit" className="btn  btn-dark btn-block mb-4">Update</button>
            </form>
        </>
    )
}

export default UpdateItem;