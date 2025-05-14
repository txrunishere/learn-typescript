"use strict";
const return_Promise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 547842784784,
                name: "Tarun",
                age: 18,
                email: "tarun@test.com",
                gender: "male"
            });
        }, 1000);
    });
};
