import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from './components/LoginSignup'
import Forgetpassword from './pages/Forgetpassword'

export const publicRoutes = [
    {
      path: "/",
      element: <h1>Home Page</h1>,
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
