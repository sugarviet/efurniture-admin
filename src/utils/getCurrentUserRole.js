import Cookies from "js-cookie";

export function getCurrentUserRole(access_token){
  console.log(access_token);
    const role = {
        "31,480": 'staff',
        "481,7680": 'admin',
        "122881,1966080": 'superAdmin',
      };
      const token = access_token || 0;

      let userRole = "admin";
    
    for (const rangeStr in role) {
      const [min, max] = rangeStr.split(',').map(Number);
      if (token >= min && token <= max) {
        userRole = role[rangeStr];
        break;
      }
    }

    return userRole;
}

export function isAdmin(){
  const admin = "admin" === getCurrentUserRole(+Cookies.get('token'));

  return admin
}