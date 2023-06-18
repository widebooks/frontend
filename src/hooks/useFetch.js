import {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import useLocalStorage from "hooks/useLocalStorage";

export default url => {
    const baseUrl = 'http://localhost:8000'
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [token, setToken] = useLocalStorage('token');

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, [])

    useEffect(() => {
        const requestOptions = {
            ...options,
            ...{
                headers: {
                    authorization: (token ? `Bearer ${token}` : ''),
                },
            },
        }

        if (!isLoading) {
            return;
        }

      console.log('requestOptions', requestOptions);

        axios(baseUrl + url, requestOptions).then(res => {
            console.log('success', res);
            setIsLoading(false);
            setResponse(res.data);
        }).catch(error => {
            console.log('error', error);
            setIsLoading(false);
            setError(error?.response?.data);
        });
    }, [isLoading, options, url, token])

    return [{isLoading, response, error}, doFetch];
}