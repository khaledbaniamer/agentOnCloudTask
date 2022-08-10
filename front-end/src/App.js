import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./components/addItem";
import FavItems from "./components/favItems";
import Home from "./components/Home";
import Footer from "./components/layout/footer";
import NavBar from "./components/layout/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import SingleItem from "./components/singleItem";
import UpdateItem from "./components/updateItem";
import UserItem from "./components/userItems";


function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/singup"  element={<Signup />} />
      <Route  path="/login"  element={<Login />} />
      <Route  path="/singleItem/:id"  element={<SingleItem />} />
      <Route  path="/useritem/:user_id"  element={<UserItem />} />
      <Route  path="/addItem"  element={<AddItem />} />
      <Route  path="/update/:item_id"  element={<UpdateItem />} />
      <Route  path="/fav/:user_id"  element={<FavItems />} />
   </Routes>
<Footer />
   </BrowserRouter>
   
  );
}

export default App;
