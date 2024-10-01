import axios from "axios";
import { ENV_VAARS } from "../config/envVars.js";


export const fetchFromTMDB = async (url) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ENV_VAARS.TMDM_API_KEY
        }
      };
    const response =  await axios.get(url,options)

    if(response.status !== 200){
        throw new Error('Failed to fetch data from TMDM' + response.statusText)
    }

    return response.data
}
