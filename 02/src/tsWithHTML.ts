function getInfo(): void {
  let username = document.getElementById("username") as HTMLInputElement
  let email = document.getElementById("email") as HTMLInputElement
  let age = document.getElementById("age") as HTMLInputElement

  console.table([username.value, email.value, age.value]);
}