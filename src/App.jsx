import { useState } from "react";
import "./App.css";
import Card from "./components/Card"; // Importing Card component
import useCurrencyInfo from "./hooks/useCurrencyInfo"; // Importing custom hook for fetching currency information

function App() {
  // State variables for amount, currencies, and converted amount
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("inr"); // Default 'from' currency
  const [to, setTo] = useState("usd"); // Default 'to' currency
  const [convertedAmount, setConvertedAmount] = useState("");

  // Fetching currency information based on the 'from' currency using custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); // Getting available currency options

  // Function to swap 'from' and 'to' currencies and amounts
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Setting converted amount to the input amount
  };

  // Function to convert amount from 'from' to 'to' currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); // Calculating converted amount
  };

  return (
    <>
      <div className="currency-container mx-auto max-w-md">
        <h1 className="my-8 text-red-300 text-3xl">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert(); // Calling convert function when form is submitted
          }}
        >
          {/* Card component for 'from' currency */}
          <Card
            onAmountChange={(amount) => setAmount(amount)} // Handling amount change
            selectCurrency={from}
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)} // Handling currency change
          />
          {/* Button to swap currencies */}
          <button
            type="button"
            onClick={swap}
            className="bg-blue-500 text-white px-4 py-2 rounded-md my-4 block mx-auto"
          >
            Swap
          </button>
          {/* Card component for 'to' currency */}
          <Card
            label="To"
            selectCurrency={to}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)} // Handling currency change
            amountDisable // Disabling amount input
          />
          {/* Button to submit the conversion */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 block mx-auto"
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
