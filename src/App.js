import Home from "pages/Home/Home";
import Create from "pages/Create/Create";
import Root from "./pages/root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* but index besauce my page index is home  */}
      <Route index element={<Home />} />
      {/* i don't using / because he inherti with parent route */}
      <Route path="create" element={<Create />} />
    
    </Route>
  )
);
function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;
