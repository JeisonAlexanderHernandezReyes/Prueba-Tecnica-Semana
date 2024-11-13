import { useState, useEffect } from 'react';

const useFetch = (serviceFunction, params = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await serviceFunction(params);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return { data, loading };
};

export default useFetch;
