/**
 * TypeGuard
 * -> typeof ( Used to check variable and function types )
 * -> instenceof ( for classes )
 * -> Custom Type ( for interfaces and types )
*/






/**
 * typeof
 */


// let data_type: string | number | boolean  = 20

// data_type = "true"

// if (typeof data_type === "string") {
//   data_type // here its type narrow down to string only
//   console.log("String data type");
// } else if (typeof data_type === "boolean") {
//   console.log("Boolean data type");
// } else {
//   console.log("Number data type");
// }



const check_type = (data: number | string) => {
  console.log(data); // if we hover over data it tells that it should be of number type or be of string type

  if (typeof data === 'number') {
    data // now here it shows only number
    console.log("Number type");
  } else {
    data // and this show string as type
    console.log("String type");
  }
}

// check_type(10)














/**
 * instenceof
*/

class Order {}
class Mall {}
const o1 = new Order()
const m1 = new Mall()

function check_instance(data: Order | Mall) {
  // console.log(data); // it is of both types

  if (data instanceof Order) {
    data
    console.log("This is a Order");
  } else {
    data
    console.log("This is a Mall");
  }
}

check_instance(m1)
