import { useEffect, useState } from "react";

function useFetchData <T> (apiUrl: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
    
            try {
                const response = await fetch(apiUrl);
                const data = (await response.json()) as T;
                setData(data);
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
