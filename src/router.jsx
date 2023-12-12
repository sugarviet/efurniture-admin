import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import withAuth from "./hocs/withAuth";
import Users from "./pages/Users";
import Partners from "./pages/Partners";
import UserDetail from "./pages/UserDetail";
import Products from "./pages/Products";
import Vouchers from "./pages/Vouchers";


const WrappedComponentWithAuth = withAuth(RootLayout)


const PATH = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
  users: '/users',
  partners: '/partners',
  userDetail: '/user/:id',
  vouchers: "/vouchers"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={PATH.base} element={<WrappedComponentWithAuth />}>
        <Route index element={<Home />} />
        <Route path={PATH.products} element={<Products />} />
        <Route path={PATH.users} element={<Users />} />
        <Route path={PATH.partners} element={<Partners />} />
        <Route path={PATH.userDetail} element={<UserDetail />} />
        <Route path={PATH.vouchers} element={<Vouchers />} />

      </Route>
    </>
  )
);
