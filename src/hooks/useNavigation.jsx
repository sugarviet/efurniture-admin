import { useNavigate } from "react-router-dom";

function useNavigation() {
  const navigation = useNavigate();
  const go_to_dashboard = () => navigation('/')
  const go_to_user = () => navigation("/users?page=1&limit=10");
  const go_to_staff = () => navigation("/staffs?page=1&limit=10");
  const go_to_order = () => navigation("/orders?page=1&limit=10&type=all");
  const go_to_products = () => navigation("/products");
  const go_to_create_product = () => navigation("/product/create");

  const go_to_warehouses = () => navigation("/warehouses");
  const go_to_create_warehouses = () => navigation("/warehouse/create");
  const go_to_flashsale = () => navigation("/flashsales");
  const create_flashsale = () => navigation("/flashsale/create");

  const go_to_rooms = () => navigation("/rooms");
  const go_to_create_room = () => navigation("/room/create");

  const go_to_types = () => navigation("/types");
  const go_to_subtypes = () => navigation("/subtypes");
  const go_to_vouchers = () => navigation("/vouchers");
  const go_to_create_voucher = () => navigation("/voucher/create");


  return {
    go_to_user,
    go_to_staff,
    go_to_order,
    go_to_products,
    go_to_warehouses,
    go_to_create_product,
    go_to_create_warehouses,
    go_to_rooms,
    go_to_flashsale,
    create_flashsale,
    go_to_dashboard,
    go_to_types,
    go_to_subtypes,
    go_to_vouchers,
    go_to_create_room,
    go_to_create_voucher
  };
}

export default useNavigation;
