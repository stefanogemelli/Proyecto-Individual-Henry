import axios from "axios";
import { useEffect, useState } from "react";

export function useAxiosGet(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      let { data } = await axios.get(url);
      // if (!data) throw Error({ error: true, status: data.status }); // probar si anda asi
      setIsLoading(false);
      setData(data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
    return () => {
      setData(null);
      setIsLoading(true);
      setError(false);
    };
  }, [url]);
  return [isLoading, data, error];
}
