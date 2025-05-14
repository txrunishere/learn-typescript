"use strict";
const check_type = (data) => {
    console.log(data);
    if (typeof data === 'number') {
        data;
        console.log("Number type");
    }
    else {
        data;
        console.log("String type");
    }
};
class Order {
}
class Mall {
}
const o1 = new Order();
const m1 = new Mall();
function check_instance(data) {
    if (data instanceof Order) {
        data;
        console.log("This is a Order");
    }
    else {
        data;
        console.log("This is a Mall");
    }
}
check_instance(m1);
