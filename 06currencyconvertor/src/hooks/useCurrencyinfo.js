import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates)) // FIXED
      .catch((err) => console.error("API error", err));
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
