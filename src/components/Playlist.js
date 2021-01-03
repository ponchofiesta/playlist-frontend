import React, { useState, useEffect } from 'react';
import { setup } from 'axios-cache-adapter'

function Playlist() {

    const api = setup({
        baseURL: 'http://localhost:3000',
        cache: {
            maxAge: 15 * 60 * 1000
        }
    });

    const [data, setData] = useState({ plays: [] });

    useEffect(async () => {
        const result = await api.get();
        setData(result.data);
    });

    return (
        <ul>
            {data.hits.map(item => (
                <li key={item.id}>
                    
                </li>
            ))}
        </ul> 
    );
}

export default Playlist;