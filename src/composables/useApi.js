import axios from 'axios';

export function useApi(baseURL) {
    const instance = axios.create({ baseURL });

    const get = async (url) => {
      try {
        const { data } = await instance.get(url);
        return data;
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
      }
    };
  
    return { get };
}