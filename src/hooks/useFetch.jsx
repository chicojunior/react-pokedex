import { useState, useEffect } from 'react';

import axios from 'axios';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

export default useFetch;
