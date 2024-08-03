import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from './components/LoginSignup'
import Forgetpassword from './pages/Forgetpassword'
import Home from "./pages/public/Home";
import About from "./pages/public/About"
import Myaccount from "./pages/private/Myaccount"
import Sendmoney from "./pages/private/Sendmoney"
import Transactionhistory from "./pages/private/Transactionhistory"


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
      element: <Myaccount/>,
    },{
      path:"/sendmoney",
      element:<Sendmoney/>
    },{
      path:"/transactionhistory",
      element:<Transactionhistory />
    }

]
export const publicNav = [
  {
    text:"Home",
    link:"/"
  },  {
    text:"About",
    link:"/about"
  },  {
    text:"Login",
    link:"/login"
  },  {
    text:"Signup",
    link:"/signup"
  },


]
export const privateNav = [
  {
    text:"My Account",
    link:"/"
  },  {
    text:"Send Money",
    link:"/sendmoney"
  },  {
    text:"Transaction History",
    link:"/transactionhistory"
  }
]
