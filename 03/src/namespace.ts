/**
 * namespace
*/





// Declaration of namespace
// When we use namespace we have to export all things from it

namespace UserNamespace {
  export class Authentication {
    login(): void {
      console.log("User logged in!!");
    }
  }

  export const getUserList = (): void => {
    console.log('Users List');
  }
}


namespace AdminNamespace {
  export class Authentication {
    login(): void {
      console.log("Admin logged in!!");
    }
  }

  export const getAdminList = (): void => {
    console.log('Admin List');
  } 
}




// we use it like this

const u1 = new AdminNamespace.Authentication()
u1.login()
AdminNamespace.getAdminList()