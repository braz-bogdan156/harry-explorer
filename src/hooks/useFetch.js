import { useEffect, useState } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      try {
        const result = await callback();
        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    load();
    return () => { ignore = true };
  }, [callback]);

  return { data, loading, error };
};