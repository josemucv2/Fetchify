import { Fetchify } from "./core";

export { Fetchify } from "./core";


const COALLY_API = Fetchify.create({ baseURL: 'https://coally-api-2.onrender.com/api/v1' })




export const loginServices = async () => {
    const data = await COALLY_API.POST({ endpoint: 'auth/login', body: { identifier: 'asda', password: 'asdasd' } })


    return data
}

loginServices()