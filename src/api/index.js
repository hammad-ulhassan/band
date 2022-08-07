import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rest.bandsintown.com/artists/',
    params: {
        app_id: 'abc'
      }
  });

export const getArtist = (artist) => instance.get(`${artist}`);

export const getEvents = (artist) => instance.get(`${artist}/events`)