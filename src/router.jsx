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

const CategoryDetail = lazy(() => import("./pages/CategoryDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CashRequest = lazy(() => import("./pages/CashRequest"));
const OrderDetail = lazy(() => import("./pages/OrderDetail"));

// HOCs
import withAuth from "./hocs/withAuth";
import withVerifyAdmin from "./hocs/withVerifyAdmin";
import Cookies from "js-cookie";

const WrappedComponentWithAuth = withAuth(RootLayout);
const UserPageWithVerifyAdmin = withVerifyAdmin(Users);

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
  rooms: '/rooms'
};

const routesForSuperAdmin = {
  layout: <WrappedComponentWithAuth />,
  path: pathSystem.base,
  children: [
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
      path: "*",
      element: <NotFound />,
    },
  ],
};

const routesForAdmin = {
  layout: <WrappedComponentWithAuth />,
  path: pathSystem.base,
  children: [
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
      path: pathSystem.users,
      element: <UserPageWithVerifyAdmin />,
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
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

const routesForStaff = {
  layout: <WrappedComponentWithAuth />,
  path: pathSystem.base,
  children: [
    {
      path: pathSystem.users,
      element: <UserPageWithVerifyAdmin />,
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
      path: pathSystem.userDetail,
      element: <UserDetail />,
    },
    {
      path: pathSystem.staffs,
      element: <Staffs />,
    },
    {
      path: pathSystem.warehouse,
      element: <Warehouse />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

const getRoutesBasedOnRole = () => {

const role = Cookies.get('role');

  const routesForCharacter = {
    admin: routesForAdmin,
    staff: routesForStaff,
    superAdmin: routesForSuperAdmin,
  };

  return routesForCharacter[role];
};

const selectedRoutes = getRoutesBasedOnRole();

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={selectedRoutes?.path} element={selectedRoutes.layout}>
        {selectedRoutes.children.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    </>
  )
);
