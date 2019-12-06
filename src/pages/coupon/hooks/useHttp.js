import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const useHttp = ({
  url = '',
  method = 'get',
  options
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(()=>{
    setLoading(true);
    axios({
      url,
      method,
      ...options
    }).then(({data})=>{
      setLoading(false);
      setData(data);
      return data;
    }).catch(err=>{
      setLoading(false);
      setError(err);
      return err;
    });
  }, []);
  return {
    loading,
    error,
    data,
  };
};