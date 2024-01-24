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
const CreatingProduct = lazy(() => import('./pages/CreatingProduct'))
const Orders = lazy(() => import('./pages/Orders'))
const Catalogs = lazy(() => import('./pages/Catalogs'))
const CatalogDetail = lazy(() => import('./pages/CatalogDetail'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Contracts = lazy(() => import('./pages/Contracts'))
const Reports = lazy(() => import('./pages/Reports'))
const Categories = lazy(() => import('./pages/Categories'))
const Vouchers = lazy(() => import('./pages/Vouchers'))
const Events = lazy(() => import('./pages/Events'))
const PartnerDetail = lazy(() => import('./pages/PartnerDetail'))
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'))
const PartnerDashboard = lazy(() => import('./pages/PartnerDashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const CashRequest = lazy(() => import('./pages/CashRequest'))


// HOCs
import withAuth from "./hocs/withAuth";
import withVerifyAdmin from "./hocs/withVerifyAdmin";

const WrappedComponentWithAuth = withAuth(RootLayout)
const UserPageWithVerifyAdmin = withVerifyAdmin(Users)

export const pathSystem  = {
  base: "/",
  products: "/products",
  createProduct: '/products/create',
  productDetail: '/products/:id',
  events: '/events',
  users: '/users',
  partners: '/partners',
  contracts: '/contracts',
  transactions: '/transactions',
  userDetail: '/user/:id',
  partnerDetail: '/partner/:id',
  vouchers: "/vouchers",
  orders: '/orders',
  cashRequest: '/cash-request',
  catelogs: '/catelogs',
  reports: '/reports',
  catelogDetail: '/catelog/:id',
  categories: '/categories',
  categoryDetail: '/category/:id',

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
      path: pathSystem.createProduct,
      element: <CreatingProduct />
    },
    {
      path: pathSystem.productDetail,
      element: <ProductDetail />
    },
    {
      path: pathSystem.transactions,
      element: <Transactions />
    },
    {
      path: pathSystem.contracts,
      element: <Contracts />
    },
    {
      path: pathSystem.cashRequest,
      element: <CashRequest />
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
      path: pathSystem.categories,
      element: <Categories />
    },
    {
      path: pathSystem.reports,
      element: <Reports />
    },
    {
      path: pathSystem.categoryDetail,
      element: <CategoryDetail />
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
