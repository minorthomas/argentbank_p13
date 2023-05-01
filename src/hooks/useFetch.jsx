import { useState } from 'react';

/**
 * Used to call data to an api via the fetch api
 *
 * @param String - url
 * @param Object - options (fetch options: body, method, headers, credentials...)
 * @return Array - data
 * @return Boolean - isLoading
 * @return Boolean - error
 */
export function useFetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    /**
     * Get data via fetch api
     * convert data to json
     * and add the data in the "data" state
     */
    async function fetchData(url, options) {
        if (!url) return;
        setIsLoading(true);
        try {
            const response = await fetch(url, options);
            const json = await response.json();
            setIsLoading(false);
            setError(false);
            setData(json);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return { fetchData, data, isLoading, error };
}
