import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addComment, getComment } from "../redux/commentSlice";
import { getSingleItem } from "../redux/itemSlice";


const SingleItem = ()=>{
	const navigate = useNavigate()
	const {id} = useParams();
	const singleItem = useSelector(state=>state.items);
	const comments = useSelector(state=>state.comments.comments)
	const user = useSelector(state=>state.user)
	// console.log(user.user)
	const dispatch = useDispatch();
	const [commentData , setCommentData] = useState({
		comment:"",
		item_id:id,
		user_id:""
	})
	// console.log(comments)
	useEffect(() => {
		dispatch(getSingleItem(id));
		
	}, [dispatch])
	useEffect(() => {
		dispatch(getComment(id))
		
	}, [dispatch])
	
	const handleCommentChange=(e)=>{
		e.preventDefault()
        const value = e.target.value;
        setCommentData({
          ...commentData,
		  user_id:user.user.user_id,
          [e.target.name]: value})
		//   console.log(commentData)
	}

	const handelSubmit=(e)=>{
		e.preventDefault()
		// console.log(commentData)

		dispatch(addComment(commentData))

        setCommentData({
			comment:"",
			item_id:id,
			user_id:user.user_id
        })
        navigate(`/singleItem/${id}`)
	}

    return(
        <>
<div className="container m-5 ">
<div className="card p-4">
<div className="row">
<aside className="col-sm-7"/>

	<h3 className="price-detail-wrap mb-4">
		<span>
			<span className="text-warning"></span><span  >{singleItem.items[0] && singleItem.items[0].Item_name}</span>
		</span>
<hr />
	</h3>

		{/* <h3 className="text-warning"></h3> */}

		<span className="mb-5">
			<ul>
		<li>
			<h6 >{singleItem.items[0] && singleItem.items[0].Item_description}</h6>
		</li>
			</ul>
		</span>

</div> 
<p className="price-detail-wrap"> 
     
        <span className="price  text-warning"></span><span style={{fontSize:"13px"}} >{singleItem.items[0] &&(new Date(singleItem.items[0].createdAt)).toLocaleString()}</span>
        
        {/* <span>/per kg</span>  */}
</p> 
</div> 
</div>

<div className="container m-5">
		<div className="row">
		
			<div className="col-12">

				
                <section className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a Comment</a>
                            </li>
                        </ul>
                    </div>
				<form onSubmit={handelSubmit}>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group ">
                                    <label className="sr-only mb-2" htmlFor="message">Comment</label>
                                    <textarea 
									className="form-control" 
									id="message" 
									rows="3" 
									placeholder="What are you thinking..."
									name="comment"
									value={commentData.comment}
									onChange={handleCommentChange}
									required
									></textarea>
                                </div>
							
                            </div>
                        </div>
                        <div className="text-right mt-4">
                        	<button type="submit" className="btn btn-dark">share</button>
                        </div>
                    </div>
						</form>
                </section>
                

				
				<section className="card mt-4">
					<div className="border p-2">
						
						{comments && comments.map((comment)=>{
							return(
								<div key={comment.id}>
								<div className="row m-0" >
									<div className="">
											<a className="text-decoration-none" href="#">
												<img className="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="..." />
											</a>
										</div>
										<div className="flex-grow-1 pl-2">
											<a className="text-decoration-none" href="#">
												<h2 className="text-capitalize h5 mb-0">{comment.User && comment.User.firstName +" "+comment.User.lastName}</h2>
											</a> 
											<p className="small text-secondary m-0 mt-1">{(new Date(comment.createdAt)).toLocaleString()}</p>
										</div>
										
									</div>
									
									<div className="">
										<p className="my-2">
											{comment.comment_body && comment.comment_body}
										</p>
								</div>
								<hr/>
							</div>
							)
						})}


						
					</div>
				</section>
				
			</div>
				
			
		</div>
	</div>
        </>
    )
}
export default SingleItem;