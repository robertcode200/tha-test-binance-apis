import { useEffect, useState, useCallback, useRef } from "react";

function useFetchPageData <T> (apiUrl: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | Error>(null);

    const isFetchPageData = useRef(false);

    const fetchData = useCallback(async () => {
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
    }, [apiUrl]);

    useEffect(() => {
        if (!isFetchPageData.current) {
            isFetchPageData.current = true;

            fetchData();
        }
    }, []);

    return {
        isLoading,
        error,
        data
    };
}

export default useFetchPageData;
