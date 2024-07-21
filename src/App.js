import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {


  return (
<BrowserRouter>
<Routes>
{publicRoutes.map((rt)=>(
  <Route key={rt.path} path={rt.path} element={rt.element} />
))}

</Routes>
</BrowserRouter>
  

  );
}

export default App;
