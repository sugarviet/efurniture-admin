export function useGetCurrentUserRole(){
    const role = {
        "31,400": 'staff',
        "481,7680": 'admin',
        "122881,1966080": 'superAdmin',
      };
      const token = parseInt(localStorage.getItem("token")) || 0;
      let userRole = "admin";
    
    for (const rangeStr in role) {
      const [min, max] = rangeStr.split(',').map(Number);
      if (token >= min && token <= max) {
        userRole = role[rangeStr];
        break;
      }
    }

    // const role = localStorage.getItem('token');

    return userRole;
}

export function getCurrentUserRole(){
    const role = {
        "31,400": 'staff',
        "481,7680": 'admin',
        "122881,1966080": 'superAdmin',
      };
      const token = parseInt(localStorage.getItem("token")) || 0;
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