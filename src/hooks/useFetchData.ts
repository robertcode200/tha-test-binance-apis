import { useEffect, useState } from "react";

function useFetchData <T> (apiUrl: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);
    const [cache, setCatch] = useState<{ [key: string]: T }>({});

    useEffect(() => {
        if (cache[apiUrl]) {
            setData(cache[apiUrl]);
            return;
        }

        const fetchData = async () => {
            setIsLoading(true);
    
            try {
                const response = await fetch(apiUrl);
                const data = (await response.json()) as T;
                setData(data);
                setCatch({
                    ...cache,
                    [apiUrl]: data,
                });
            } catch(error: Error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [apiUrl]);

    return {
        isLoading,
        error,
        data
    };
}

export default useFetchData;
