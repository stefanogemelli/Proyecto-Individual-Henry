import axios from "../services/axiosBaseUrl";
import { useEffect, useState } from "react";

export function useAxios(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(
    () =>
      (async () => {
        try {
          let { data } = await axios.get(url);
          // if (!data) throw Error({ error: true, status: data.status }); // probar si anda así
          setData(data);
          setIsLoaded(true);
        } catch (error) {
          setError(error);
          setIsLoaded(true);
        }
        return () => {
          setData(null);
          setIsLoaded(false);
          setError(false);
        };
      })(),
    [url]
  );
  return [isLoaded, data, error];
}
