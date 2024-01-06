import { refreshPage } from "@utils/refreshPage";

const listAcc = [{ username: 'admin', password: '123' }, { username: 'partner', password: '123' }, { username: 'staff', password: '123' }]

export function useLogin() {
    function handleSettingRole(account) {
        localStorage.setItem('token', account.username);
        refreshPage()
    }

    function handleLogin(loginInfo) {
        console.log(loginInfo)

        const matchedAccount = listAcc.find(
            (acc) =>
                acc.username === loginInfo.username && acc.password === loginInfo.password
        );

        if (!matchedAccount) return alert("Login failed");

        return handleSettingRole(matchedAccount)

    }

    return {
        handleLogin
    }
}