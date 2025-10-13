import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();


  // useEffect(() => {
  //   const checkAuth = async () => {
  //    const res = await axios.get("http://localhost:3000/api/hr/hrDetails", { withCredentials: true });
  //     if (res.status == 200) {
  //       navigate("/hr/overview");
  //     }else{
  //       navigate("/");
  //     }
  //   }
  //   checkAuth();
  // }, []);



  return (
    <div>
       <div>
      <Navbar />
      <Header/>
    </div>
    </div>
  )
}

export default Home