import { refreshPage } from "@utils/refreshPage";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../../hooks/api-hooks";
import useAuth from "../../../stores/useAuth";
import { get_login } from "../../../api/authApi";
import { jwtDecode } from "jwt-decode";
import { getCurrentUserRole } from "@utils/getCurrentUserRole";
import useNotification from "../../../hooks/useNotification";
const init_route = {
    superAdmin: "/users",
    admin: "/",
    staff: "/products",
};

export function useLogin() {
    const {success_message, error_message} = useNotification();
    const { setTokens } = useAuth()

    const navigate = useNavigate();
    const { mutate: login } = usePost(
        get_login(),
        undefined,
        (data) => {
            const { access_token, refresh_token } = data;
            const decode = jwtDecode(data.access_token);
            const role = getCurrentUserRole(decode.role);

            setTokens(access_token, refresh_token, decode.account_id, role);
            success_message('login', 'login')
            navigate(init_route[role]);
            refreshPage();
        },
        () => {
            error_message('login', 'login');
        }
    );

    return {
        login
    }
}