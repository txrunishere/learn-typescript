/**
 * Utility Types
 * -> Partial
 * -> Required
 * -> Readonly
 * -> Pick
 * -> Omit
 * -> Exclude
 * -> Extract
 * -> Record
 * -> NanNullable
*/






/**
 * Partial - make properties optional
*/

interface CollegeInterfaceA {
  name: string,
  location: string,
  branch: number
}

const collegeDataA: CollegeInterfaceA = {
  name: "BHMC",
  location: "xyz",
  branch: 4
} // here i have no option i have to pass all properties

const collegeDataB: Partial<CollegeInterfaceA> = {
  name: "BHMC",
  location: "xyz",
} // here properties are optionals
















/**
 * Readonly
*/

// const collegeDataC: CollegeInterfaceA = {
//   name: "BHMC",
//   branch: 4,
//   location: "xyz"
// }

// collegeDataC.name = "IIT Delhi"
// console.log(collegeDataC);




const collegeDataC: Readonly<CollegeInterfaceA> = {
  name: "BHMC",
  branch: 4,
  location: "xyz"
}

// collegeDataC.name = "IIT Bombay" // throws error coz of Readonly utility















/**
 * Pick
*/

const collegeDataD: Pick<CollegeInterfaceA, 'name' | 'branch'>= {
  name: "BHMC",
  branch: 4
}

// console.log(collegeDataD);













/**
 * Omit - ( to remove any property )
*/

const collegeDataE: Omit<CollegeInterfaceA, 'branch'> = {
  name: "BHMC",
  location: 'xyz'
}

const collegeDataF: Omit<CollegeInterfaceA, 'branch' | 'location'> = {
  name: "BHMC",
  // location: 'xyz'  // it throws error
}












/**
 * Exclude 
*/

type APIStatus = 'loading' | 'pending' | 'success' | 'error'


// if we use Exclude we use values expect we pass in Exclu
let apiCall: Exclude<APIStatus, 'error'> = "loading"
apiCall = "success"


// but in Extract we use only those values which we are pass in that
// like here i use only loading and error
let apiCall2: Extract<APIStatus, 'loading' | "error"> = 'error'













/**
 * Nonnullable - ( We don't assign null and undefine value in it )
*/

type RandomType = string | number | undefined | null | boolean | Array<string>

const random_type_value: NonNullable<RandomType> = "Not Null Value"













/**
 * Record 
*/

type SiteRole = "Admin" | "TA" | "User"

type RoleInfo = {
  name: string,
  age: number
}

const roleObj: Record<SiteRole, string> = {
  Admin: "Bhalu",
  TA: "Cheetah",
  User: "Sher"
}

const rolePower: Record<SiteRole, Array<string>> = {
  Admin: ['create', 'edit', 'delete', 'view'],
  TA: ['edit', 'view'],
  User: ['view']
}

const roleInfo: Record<number, RoleInfo> = {
  1: {
    name: "Tarun",
    age: 18
  },
  2: {
    name: "Rahul",
    age: 19
  }
}

console.log(roleObj);