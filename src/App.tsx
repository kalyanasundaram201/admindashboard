import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './styles/global.scss'

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menucontainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
