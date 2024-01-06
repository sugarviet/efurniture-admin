import { clearSingleLocalStorage } from "./clearSingleLocalStorage";
import { refreshPage } from "./refreshPage";

export function logout(){
    clearSingleLocalStorage('token');
    refreshPage();
    
}