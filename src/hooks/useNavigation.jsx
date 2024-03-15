import { useNavigate } from "react-router-dom";

function useNavigation() {
  const navigation = useNavigate();

  const go_to_user = () => navigation("/users?page=1&limit=10");
  const go_to_staff = () => navigation("/staffs?page=1&limit=10");
  const go_to_order = () => navigation("/orders?page=1&limit=10&type=all");
  const go_to_rooms = () => navigation("/rooms");

  return { go_to_user, go_to_staff, go_to_order, go_to_rooms };
}

export default useNavigation;
