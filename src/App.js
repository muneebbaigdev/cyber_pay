import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignup from './components/LoginSignup'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Forgetpassword from "./pages/Forgetpassword";


function App() {

  const router = createBrowserRouter([
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
  ]);

  return (
  <RouterProvider router={router} />
  );
}

export default App;
