import axios from 'axios';
import { useCallback, useState } from 'react';

const URL = {
  MEALS:
    'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/meals.json',
  ORDERS:
    'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/orders.json',
};

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async ({ method, config, processFn }) => {
    setIsLoading(true);
    setError(null);

    try {
      let res;
      if (method === 'GET') res = await axios.get(URL.MEALS);
      if (method === 'POST') res = await axios.post(URL.ORDERS, config);

      const leadedMeals = [];
      for (let key in res.data) {
        leadedMeals.push({ id: key, ...res.data[key] });
      }
      processFn(leadedMeals);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useAxios;
