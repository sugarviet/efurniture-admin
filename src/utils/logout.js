import { clearSingleLocalStorage } from "./clearSingleLocalStorage";
import { refreshPage } from "./refreshPage";
import Cookies from "js-cookie";

export function logout(){
    clearSingleLocalStorage('token');
    Cookies.remove('access_token');
    refreshPage();
    
}