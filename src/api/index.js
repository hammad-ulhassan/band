import axios from "axios";

const instance = axios.create({
    baseURL: 'rest.bandsintown.com/artists/',
    params: {
        app_id: 'abc'
      }
  });

const getArtist = (artist) => instance.get(`${artist}`);

const api = {
    getArtist
}

export default api;