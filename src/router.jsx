/* eslint-disable react-refresh/only-export-components */
import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";



import { lazy } from "react";
// Layouts
import RootLayout from "@layouts/RootLayout";

// Pages
import Home from "@pages/Home";

const Users = lazy(() => import("./pages/Users"));
const Staffs = lazy(() => import("./pages/Staffs"));
const UserDetail = lazy(() => import("./pages/UserDetail"));
const Products = lazy(() => import("./pages/Products"));
const CreatingProduct = lazy(() => import("./pages/CreatingProduct"));
const Orders = lazy(() => import("./pages/Orders"));
const Catalogs = lazy(() => import("./pages/Catalogs"));
const CreatingCatalog = lazy(() => import("./pages/CreatingCatalog"));
const Warehouse = lazy(() => import("./pages/Warehouse"));
const CatalogDetail = lazy(() => import("./pages/CatalogDetail"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Reports = lazy(() => import("./pages/Reports"));
const ReportDetail = lazy(() => import("./pages/ReportDetail"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Categories = lazy(() => import("./pages/Categories"));
const Vouchers = lazy(() => import("./pages/Vouchers"));
const CreateVoucher = lazy(() => import("./pages/CreatingVoucher"));
const Events = lazy(() => import("./pages/Events"));
const CreateEvents = lazy(() => import("./pages/CreatingEvents"));
const Role = lazy(() => import("./pages/Role"));

const CategoryDetail = lazy(() => import("./pages/CategoryDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CashRequest = lazy(() => import("./pages/CashRequest"));
const OrderDetail = lazy(() => import("./pages/OrderDetail"));

// HOCs
import withAuth from "./hocs/withAuth";
import Cookies from "js-cookie";

import Login from "@pages/Login";
const WrappedComponentWithAuth = withAuth(RootLayout);

export const pathSystem = {
  base: "/",
  products: "/products",
  createProduct: "/product/create",
  productDetail: "/products/:id",
  events: "/events",
  eventCreate: "/event/create",
  users: "/users",
  staffs: "/staffs",
  transactions: "/transactions",
  userDetail: "/user/:id",
  vouchers: "/vouchers",
  createVoucher: "/voucher/create",
  orders: "/orders",
  orderDetail: "/order/:id",
  cashRequest: "/cash-request",
  catelogs: "/catelogs",
  reports: "/reports",
  reportDetail: "/report/:id",
  catelogDetail: "/catelog/:id",
  catalogCreate: "/catelog/create",
  categories: "/categories",
  categoryDetail: "/category/:id",
  warehouse: '/warehouse',
  rooms: '/rooms',
  roles: '/roles',
};

const adminMasterRoutes = [
  {
    path: pathSystem.base,
    element: <Navigate to={pathSystem.users} />,
  },
  {
    path: pathSystem.users,
    element: <Users />,
  },
  {
    path: pathSystem.userDetail,
    element: <UserDetail />,
  },
  {
    path: pathSystem.staffs,
    element: <Staffs />,
  },
  {
    path: pathSystem.roles,
    element: <Role />,
  },
];

const adminRoutes = [
  {
    path: pathSystem.base,
    element: <Home />,
  },
  {
    path: pathSystem.products,
    element: <Products />,
  },
  {
    path: pathSystem.createProduct,
    element: <CreatingProduct />,
  },
  {
    path: pathSystem.productDetail,
    element: <ProductDetail />,
  },
  {
    path: pathSystem.transactions,
    element: <Transactions />,
  },
  {
    path: pathSystem.cashRequest,
    element: <CashRequest />,
  },
  {
    path: pathSystem.staffs,
    element: <Staffs />,
  },
  {
    path: pathSystem.vouchers,
    element: <Vouchers />,
  },
  {
    path: pathSystem.createVoucher,
    element: <CreateVoucher />,
  },
  {
    path: pathSystem.catelogs,
    element: <Catalogs />,
  },
  {
    path: pathSystem.catelogDetail,
    element: <CatalogDetail />,
  },
  {
    path: pathSystem.catalogCreate,
    element: <CreatingCatalog />,
  },
  {
    path: pathSystem.events,
    element: <Events />,
  },
  {
    path: pathSystem.eventCreate,
    element: <CreateEvents />
  },
  {
    path: pathSystem.orders,
    element: <Orders />,
  },
  {
    path: pathSystem.orderDetail,
    element: <OrderDetail />,
  },
  {
    path: pathSystem.categories,
    element: <Categories />,
  },
  {
    path: pathSystem.reports,
    element: <Reports />,
  },
  {
    path: pathSystem.reportDetail,
    element: <ReportDetail />,
  },
  {
    path: pathSystem.categoryDetail,
    element: <CategoryDetail />,
  },
  {
    path: pathSystem.rooms,
    element: <Rooms />,
  },
];

const staffRoutes = [
  {
    path: pathSystem.products,
    element: <Products />,
  },
  {
    path: pathSystem.createProduct,
    element: <CreatingProduct />,
  },
  {
    path: pathSystem.events,
    element: <Events />,
  },
  {
    path: pathSystem.eventCreate,
    element: <CreateEvents />
  },
  {
    path: pathSystem.vouchers,
    element: <Vouchers />,
  },
  {
    path: pathSystem.createVoucher,
    element: <CreateVoucher />,
  },
  {
    path: pathSystem.warehouse,
    element: <Warehouse />,
  },
];

const getRoutesBasedOnRole = () => {
  
  const role = Cookies.get('role');
  
    const routesForCharacter = {
      admin: adminRoutes,
      staff: staffRoutes,
      superAdmin: adminMasterRoutes
    };
  
    return routesForCharacter[role] || [];
  };

export const router = createBrowserRouter([
  {
    path: pathSystem.base,
    element: <WrappedComponentWithAuth />,
    children: [
      ...getRoutesBasedOnRole(),
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
      path: '/login',
      element: <Login />,
      
    },
]);