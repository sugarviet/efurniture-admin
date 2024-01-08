/* eslint-disable react-refresh/only-export-components */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy } from "react";
// Layouts
import RootLayout from "@layouts/RootLayout";

// Pages
import Home from "@pages/Home";

const Users = lazy(() => import('./pages/Users'))
const Partners = lazy(() => import('./pages/Partners'))
const UserDetail = lazy(() => import('./pages/UserDetail'))
const Products = lazy(() => import('./pages/Products'))
const Orders = lazy(() => import('./pages/Orders'))


const Vouchers = lazy(() => import('./pages/Vouchers'))
const Events = lazy(() => import('./pages/Events'))
const PartnerDetail = lazy(() => import('./pages/PartnerDetail'))

const PartnerDashboard = lazy(() => import('./pages/PartnerDashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PartnerProduct = lazy(() => import('./pages/PartnerProduct'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))



// HOCs
import withAuth from "./hocs/withAuth";
import withVerifyAdmin from "./hocs/withVerifyAdmin";


const WrappedComponentWithAuth = withAuth(RootLayout)
const UserPageWithVerifyAdmin = withVerifyAdmin(Users)

const pathAdmin = {
  base: "/",
  products: "/products",
  productDetail: '/products/:id',
  events: '/events',
  users: '/users',
  partners: '/partners',
  userDetail: '/user/:id',
  partnerDetail: '/partner/:id',
  vouchers: "/vouchers",
  orders: '/orders',
};

const pathStaff = {
  base: "/",
};

const pathPartners = {
  base: '/',
  product: '/products',
  productDetail: '/products/:id'
}



const routesForAdmin = {
  layout: <WrappedComponentWithAuth />,
  path: pathAdmin.base,
  children: [
    {
      path: pathAdmin.base,
      element: <Home />
    },
    {
      path: pathAdmin.products,
      element: <Products />
    },
    {
      path: pathAdmin.productDetail,
      element: <ProductDetail />
    },
    {
      path: pathAdmin.users,
      element: <UserPageWithVerifyAdmin />
    },
    {
      path: pathAdmin.userDetail,
      element: <UserDetail />
    },
    {
      path: pathAdmin.partners,
      element: <Partners />
    },
    {
      path: pathAdmin.partnerDetail,
      element: <PartnerDetail />
    },
    {
      path: pathAdmin.vouchers,
      element: <Vouchers />
    },
    {
      path: pathAdmin.events,
      element: <Events />
    },
    {
      path: pathAdmin.orders,
      element: <Orders />
    },
    {
      path: "*",
      element: <NotFound />
    }
    
  ]
}

const routesForPartners = {
  layout: <WrappedComponentWithAuth />,
  path: pathPartners.base,
  children: [
    {
      path: pathPartners.base,
      element: <PartnerDashboard />
    },
    {
      path: pathPartners.product,
      element: <PartnerProduct />
    },
    {
      path: pathPartners.productDetail,
      element: <ProductDetail />
    },
    {
      path: "*",
      element: <NotFound />
    }

    
  ]
}

const routesForStaff = {
  layout: <WrappedComponentWithAuth />,
  path: pathStaff.base,
  children: [
    {
      path: pathStaff.base,
      element: <PartnerDashboard />
    },
    {
      path: "*",
      element: <NotFound />
    }

    
  ]
}

const getRoutesBasedOnRole = () => {
  const userRole = localStorage.getItem('token') || 'admin';

  console.log(userRole);

  const routesForCharacter = {
    admin: routesForAdmin,
    partner: routesForPartners,
    staff: routesForStaff
  }

  return routesForCharacter[userRole]
}

const selectedRoutes = getRoutesBasedOnRole();

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={selectedRoutes.path} element={selectedRoutes.layout}>
        {selectedRoutes.children.map(item => <Route key={item.path} path={item.path} element={item.element}/>)}
      </Route>
    </>
  )
);
