import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (opts, instance = axios) => {
  //  opts(configuration, 설정): method, url, headers, data, params 등
  const [state, setState] = useState({
    loading: true,
    response: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) return;
    instance(opts)
      .then(res =>
        setState({
          loading: false,
          response: res,
        })
      )
      .catch(err =>
        setState({
          loading: false,
          response: err,
        })
      );
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
