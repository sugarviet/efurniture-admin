import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import withAuth from "./hocs/withAuth";

const WrappedComponentWithAuth = withAuth(RootLayout)


const PATH = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  login: "/login",
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={PATH.base} element={<WrappedComponentWithAuth />}>
        <Route index element={<Home />} />
        <Route path={PATH.products} element={<Home />} />
      </Route>
    </>
  )
);
