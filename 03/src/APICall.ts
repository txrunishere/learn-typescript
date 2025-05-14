/**
 * API Calls in TS
*/


type APIDataType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const call_API = async (): Promise<APIDataType> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const jsonRes = await res.json()
  return jsonRes
}

call_API().then((d: APIDataType) => console.log(d))