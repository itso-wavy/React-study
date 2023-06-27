import { useCallback, useState } from 'react';

export const URL =
  'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/tasks.json';

export default function useHttp(requestConfig, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.URL, requestConfig.fetchOpt);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, [requestConfig, applyData]);
  // 메모이제이션을 위해 의존성 배열 설정, requestConfig과 applyData도 객체이므로 메모이제이션 적용해야 함

  return { isLoading, error, sendRequest };
}
