import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        if (!currency) return;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Could not load currency rates");
                }
                return res.json();
            })
            .then((data) => {
                setData(data[currency] || {});
                setError("");
            })
            .catch((err) => {
                setData({});
                setError(err.message);
            });
    }, [currency]);

    return { data, error };
}

export default useCurrencyInfo;
