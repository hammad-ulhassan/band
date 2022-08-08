import axios from "axios";
import { NO_RECORD_FOUND } from "../shared/constants";

const instance = axios.create({
    baseURL: 'https://rest.bandsintown.com/artists/',
    params: {
        app_id: 'abc'
      }
  });

instance.interceptors.response.use(
  (response) => {
    if(response.data === ""){ //data is "" for /artists endpoint @ 404
      return Promise.reject(NO_RECORD_FOUND)
    }
    return response;
  },
  (error)=>{
    return Promise.reject(NO_RECORD_FOUND)
  }
)

export const getArtist = (artist) => instance.get(`${artist}`);

export const getEvents = (artist) => instance.get(`${artist}/events`)