// function time1(): Promise<string> {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res("Hello World");
//     }, 1000);
//   });
// }

// time1()
//   .then((data) => {
//     console.log(data);
//     setTimeout(() => {
//       time2();
//     }, 1000);
//   })
//   .catch((e) => console.log(e));




// function time2() {
//   console.log("Hello World First");
// }














type PromiseDataInterface = {
  id: number,
  name: string,
  age: number,
  email: string,
  gender: string
}



const return_Promise = (): Promise<PromiseDataInterface> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        id: 547842784784,
        name: "Tarun",
        age: 18,
        email: "tarun@test.com",
        gender: "male"
      })
    }, 1000);
  })
}