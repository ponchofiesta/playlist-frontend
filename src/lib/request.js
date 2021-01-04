import { useState, useEffect } from 'react';
import { setup } from 'axios-cache-adapter';

function useRequest(url) {
    const api = setup({
        cache: {
            maxAge: 15 * 60 * 1000
        }
    });

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await api.get(url);
                if (!ignore) {
                    setData(response.data);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return (() => { ignore = true; });
    }, [url]);

    return { data, loading, error };
};

export default useRequest;