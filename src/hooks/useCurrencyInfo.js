import { useEffect, useState } from "react"; // Importing necessary hooks

// Custom hook for fetching currency information based on the provided currency
function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // State variable to store currency data

  // Fetching data using useEffect
  useEffect(() => {
    // Fetching currency data from the API
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json()) // Parsing response to JSON
      .then((response) => setData(response[currency])); // Setting data in state
  }, [currency]); // Dependency array to ensure effect runs when currency changes

  return data; // Returning currency data
}

export default useCurrencyInfo; // Exporting the custom hook
