"use strict";
const call_API = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonRes = await res.json();
    return jsonRes;
};
call_API().then((d) => console.log(d));
