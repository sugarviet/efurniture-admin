import { create } from 'zustand';
import Cookies from 'js-cookie';

const useAuth = create((set) => ({
  accessToken: Cookies.get('access_token'),
  refreshToken: Cookies.get('refresh_token'),
  accountId: Cookies.get('account_id'),
  role: Cookies.get('role'),

  setTokens: (accessToken, refreshToken, accountId, role) => {
    set({ accessToken, refreshToken, accountId, role });
    Cookies.set('access_token', accessToken);
    Cookies.set('refresh_token', refreshToken);
    Cookies.set('account_id', accountId);
    Cookies.set('role', role);

  },
  
  clearTokens: () => {
    set({ accessToken: null, refreshToken: null, accountId: null, role: null });
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    Cookies.remove('account_id');
    Cookies.remove('role');
  },
}));

export default useAuth;

