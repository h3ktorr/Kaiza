import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./Layouts/RootLayout";
import ProductLayout from './Layouts/ProductLayout'

//pages
import Shop from "./Pages/Shop";
import Stilettos from "./Pages/Stilettos";
import Products from "./Pages/Products";
import Flats from "./Pages/Flats";
import Sneakers from "./Pages/Sneakers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Shop />} />
      <Route path="stilettos" element={<Stilettos />} />
      <Route path="flats" element={<Flats />} />
      <Route path="sneakers" element={<Sneakers />} />
      <Route path="product" element={<ProductLayout />}>
        <Route path=":productId" element={<Products />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
