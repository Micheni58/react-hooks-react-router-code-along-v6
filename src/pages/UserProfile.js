import NavBar from "../components/Navbar";
import React ,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
function UserProfile() {
    const params = useParams();
    const [user,setUser] = useState({})
    const userId = params.id;
    console.log(params)
    useEffect(()=>{
        fetch(`http://localhost:4000/users/${userId}`)
        .then((res) => res.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    },[userId])
    if(!user.name){
        return <h1>Loading...</h1>
    }
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;