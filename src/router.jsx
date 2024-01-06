/* eslint-disable react-refresh/only-export-components */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import RootLayout from "@layouts/RootLayout";

// Pages
import Home from "@pages/Home";
import Users from "./pages/Users";
import Partners from "./pages/Partners";
import UserDetail from "./pages/UserDetail";
import Products from "./pages/Products";
import Vouchers from "./pages/Vouchers";
import Events from "./pages/Events";
import PartnerDetail from "./pages/PartnerDetail";
import PartnerDashboard from "./pages/PartnerDashboard";

// HOCs
import withAuth from "./hocs/withAuth";
import withVerifyAdmin from "./hocs/withVerifyAdmin";
import NotFound from "./pages/NotFound";
import PartnerProduct from "./pages/PartnerProduct";
import ProductDetail from "./pages/ProductDetail";

const WrappedComponentWithAuth = withAuth(RootLayout)
const UserPageWithVerifyAdmin = withVerifyAdmin(Users)

const pathAdmin = {
  base: "/",
  products: "/products",
  events: '/events',
  users: '/users',
  partners: '/partners',
  userDetail: '/user/:id',
  partnerDetail: '/partner/:id',
  vouchers: "/vouchers"
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
