import { useState, useEffect, useReducer } from 'react';
import { setupCache } from 'axios-cache-adapter';
import axios from 'axios';

const cache = setupCache({
    maxAge: 15 * 60 * 1000
});
const api = axios.create({
    adapter: cache.adapter,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }, 
});

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'success':
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };
        case 'failure':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            throw new Error();
    }
};

function useRequest(initialUrl, initialData) {

    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        loading: false,
        error: null,
        data: initialData,
    });

    useEffect(() => {
        let canceled = false;
        const fetchData = async () => {
            dispatch({ type: 'init' });
            try {
                const response = await api.get(url);
                if (!canceled) {
                    dispatch({ type: 'success', payload: response.data });
                }
            } catch (err) {
                if (!canceled) {
                    dispatch({ type: 'failure', payload: err });
                }
            }
        };
        if (url && url !== '') {
            fetchData();
        }
        return (() => { canceled = true; });
    }, [url]);

    return [state, setUrl];
};

export default useRequest;