import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "@layouts/RootLayout";
import Home from "@pages/Home";
import Login from "@pages/Login";

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
      <Route path={PATH.base} element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={PATH.products} element={<Home />} />
      </Route>

      <Route path={PATH.login} element={<Login />} />
    </>
  )
);
