import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import { publicRoutes,privateRoutes } from "./routes";
import Navbar from "./components/public/Navbar";
import Footer from "./components/public/Footer"
import { useEffect } from "react";
import { authenticate } from './states/authentication'
import { useDispatch,useSelector } from "react-redux";


function App() {

const dispatch = useDispatch()
const logedIn = useSelector(state => state.authentication.authentic)

const checkUser = async ()=>{
  if(localStorage.getItem('token')){

    let response = await fetch('http://localhost:8080/authentication/verifytoken',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token:localStorage.getItem('token')})
    })

    let parsed = response.json()
    console.log(parsed)
    
    dispatch(authenticate())
    
  }
}

useEffect(()=>{
checkUser()
},[])



  return (

<BrowserRouter>
<Navbar/>
<Routes>
{!logedIn ? (publicRoutes.map((rt)=>(
  <Route key={rt.path} path={rt.path} element={rt.element} />
))):(privateRoutes.map((rt)=>(
  <Route key={rt.path} path={rt.path} element={rt.element} />
)))}

</Routes>
<Footer/>
</BrowserRouter>

  );
}

export default App;
