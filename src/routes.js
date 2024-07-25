import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from './components/LoginSignup'
import Forgetpassword from './pages/Forgetpassword'
import Home from "./pages/public/Home";
import About from "./pages/public/About"


export const publicRoutes = [
    {
      path: "/",
      element: <Home/>,
    },{
      path:"/about",
      element:<About/>
    },{
      path:"/login",
      element:<LoginSignup form={<Login/>} />
    },{
      path:"/signup",
      element:<LoginSignup form={<Signup/>} />
    },{
      path:"/forgetpassword",
      element:<LoginSignup form={<Forgetpassword/>} />
    }
  ]
export const privateRoutes = [
  {
    path: "/",
    element: <h1>You are signed in</h1>,
  }
]
