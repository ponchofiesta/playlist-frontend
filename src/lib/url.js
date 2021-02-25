import { useLocation } from 'react-router-dom';

function useQuery() {
    const query = new URLSearchParams(useLocation().search);
    let params = {};
    for (const param of query) {
        params[param[0]] = param[1];
    }
    return params;
}

export { useQuery };