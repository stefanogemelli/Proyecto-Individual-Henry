import axios from "../services/axiosBaseUrl";
import { useEffect, useState } from "react";

export function useAxios(url) {
  const [state, setState] = useState({
    isLoaded: null,
    data: null,
    error: false,
  });

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(url);
        // if (!data) throw Error({ error: true, status: data.status }); // probar si anda así
        setState((prev) => {
          return { ...prev, data, isLoaded: true };
        });
      } catch (error) {
        setState((prev) => {
          return { ...prev, isLoaded: true, error };
        });
      }
    })();
    return () => {
      setState({
        isLoaded: null,
        data: null,
        error: false,
      });
    };
  }, [url]);
  return [state.isLoaded, state.data, state.error];
}
