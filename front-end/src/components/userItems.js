import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getUserItem } from "../redux/userSlice";
import Swal from 'sweetalert2';
import { deleteItem } from "../redux/itemSlice";


const UserItem = ()=>{
    const {user_id} = useParams();
    const dispatch = useDispatch();

    const {items} = useSelector(state=>state.user)
    console.log(items)
    // console.log(user_id)

    useEffect(() => {
        dispatch(getUserItem(user_id))
    }, [dispatch])

    
const deleteHandel = (item_id)=>{

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.dismiss !== Swal.DismissReason.cancel) {

            dispatch(deleteItem(item_id))
       
        //   swalWithBootstrapButtons.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
      
}

    
    return(
        <div className="container table-responsive " >
            <table className="table" style={{marginTop:"20vh"}}> 
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items &&
                       items.map((item , index)=>{
                        return(
                            <tr key={item.id}>
                                <th scope="row">{index +1}</th>
                                <td>{item.Item_name}</td>
                                <td>{item.Item_description}</td>
                                <td>
                                <NavLink to={`/update/${item.id}`}  className="btn btn-primary mx-2">Update</NavLink>
                                <NavLink  onClick={() =>deleteHandel(item.id)} to='' className="btn btn-danger mx-2">Delete</NavLink> 
                                </td>
                            </tr>
                        )
                       }) 
                    }


                </tbody>
            </table>
        </div>
    )
}

export default UserItem;