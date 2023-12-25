/* eslint-disable react-refresh/only-export-components */
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
import Events from "./pages/Events";
import PartnerDetail from "./pages/PartnerDetail";

const WrappedComponentWithAuth = withAuth(RootLayout)

const path = {
  base: "/",
  products: "/products",
  about: "/",
  cart: "/",
  events: '/events',
  login: "/login",
  users: '/users',
  partners: '/partners',
  userDetail: '/user/:id',
  partnerDetail: '/partner/:id',
  vouchers: "/vouchers"
};

const routes = {
  layout: <WrappedComponentWithAuth />,
  path: path.base,
  children: [
    {
      path: path.base,
      element: <Home />
    },
    {
      path: path.products,
      element: <Products />
    },
    {
      path: path.users,
      element: <Users />
    },
    {
      path: path.userDetail,
      element: <UserDetail />
    },
    {
      path: path.partners,
      element: <Partners />
    },
    {
      path: path.partnerDetail,
      element: <PartnerDetail />
    },
    {
      path: path.vouchers,
      element: <Vouchers />
    },
    {
      path: path.events,
      element: <Events />
    },
    
  ]
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.path} element={routes.layout}>
        {routes.children.map(item => <Route key={item.path} path={item.path} element={item.element}/>)}
      </Route>
    </>
  )
);
