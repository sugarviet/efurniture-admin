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
const Catalogs = lazy(() => import('./pages/Catalogs'))
const CatalogDetail = lazy(() => import('./pages/CatalogDetail'))


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

const pathSystem  = {
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
  catelogs: '/catelogs',
  catelogDetail: '/catelog/:id',

}



const routesForSuperAdmin = {
  layout: <WrappedComponentWithAuth />,
  path: pathSystem.base,
  children: [
    {
      path: pathSystem.users,
      element: <UserPageWithVerifyAdmin />
    },
    {
      path: pathSystem.userDetail,
      element: <UserDetail />
    },
    {
      path: pathSystem.partners,
      element: <Partners />
    },
    {
      path: pathSystem.partnerDetail,
      element: <PartnerDetail />
    },
    {
      path: "*",
      element: <NotFound />
    }
    
  ]
}


const routesForAdmin = {
  layout: <WrappedComponentWithAuth />,
  path: pathSystem.base,
  children: [
    {
      path: pathSystem.base,
      element: <Home />
    },
    {
      path: pathSystem.products,
      element: <Products />
    },
    {
      path: pathSystem.productDetail,
      element: <ProductDetail />
    },
    {
      path: pathSystem.users,
      element: <UserPageWithVerifyAdmin />
    },
    {
      path: pathSystem.userDetail,
      element: <UserDetail />
    },
    {
      path: pathSystem.partners,
      element: <Partners />
    },
    {
      path: pathSystem.partnerDetail,
      element: <PartnerDetail />
    },
    {
      path: pathSystem.vouchers,
      element: <Vouchers />
    },
    {
      path: pathSystem.catelogs,
      element: <Catalogs />
    },
    {
      path: pathSystem.catelogDetail,
      element: <CatalogDetail />
    },
    {
      path: pathSystem.events,
      element: <Events />
    },
    {
      path: pathSystem.orders,
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
  path: pathSystem.base,
  children: [
    {
      path: pathSystem.base,
      element: <PartnerDashboard />
    },
    {
      path: pathSystem.products,
      element: <PartnerProduct />
    },
    {
      path: pathSystem.productDetail,
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
  path: pathSystem.base,
  children: [
    {
      path: pathSystem.base,
      element: <PartnerDashboard />
    },
    {
      path: pathSystem.users,
      element: <UserPageWithVerifyAdmin />
    },
    {
      path: pathSystem.userDetail,
      element: <UserDetail />
    },
    {
      path: pathSystem.partners,
      element: <Partners />
    },
    {
      path: pathSystem.partnerDetail,
      element: <PartnerDetail />
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
    staff: routesForStaff,
    superAdmin: routesForSuperAdmin
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
