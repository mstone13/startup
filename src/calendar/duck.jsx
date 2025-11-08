import React, { useState, useEffect } from 'react';

export function Duck() {
  const [duckUrl, setDuckUrl] = useState('');

useEffect(() => {
    async function fetchDuck() {
        try {
            const response = await fetch('/api/duck');
            const data = await response.json();
            setDuckUrl(data.url);
        } catch (err) {
            console.error('Error fetching duck:', err);
        }
    }

    fetchDuck();
}, []);

if (!duckUrl) return <p> Loading a random duck ... </p>;

return (
    <div style={{ textAlign: 'center', marginTop: '20px'}}>
        <h3>Random Duck!!</h3>
        <img src={duckUrl} alt="Random Duck" style={{ maxWidth: '300px', borderRadius: '8px' }} />
    </div>
);
}