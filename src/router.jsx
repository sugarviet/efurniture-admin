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

const PATH = {
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
  path: PATH.base,
  children: [
    {
      path: PATH.base,
      element: <Home />
    },
    {
      path: PATH.products,
      element: <Products />
    },
    {
      path: PATH.users,
      element: <Users />
    },
    {
      path: PATH.userDetail,
      element: <UserDetail />
    },
    {
      path: PATH.partners,
      element: <Partners />
    },
    {
      path: PATH.partnerDetail,
      element: <PartnerDetail />
    },
    {
      path: PATH.vouchers,
      element: <Vouchers />
    },
    {
      path: PATH.events,
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
