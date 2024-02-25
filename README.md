# Currency Converter App

This is a currency converter web application built using React and Vite.

## Overview

The Currency Converter App allows users to convert currencies based on the latest exchange rates. It fetches real-time currency information from an external API and provides a user-friendly interface for currency conversion.

## Features

- Convert currencies with real-time exchange rates.
- Select from a wide range of currencies.
- Swap between 'from' and 'to' currencies with a single click.
- Responsive design for seamless use across devices.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:


2. Navigate to the project directory:

   ```bash
   cd currency-converter
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Usage

To start the development server and view the app in your browser, run:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Code Explanation

### 1. App.js

```jsx
// Import statements
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // State variables
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState('');
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  // Function to convert amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    // JSX code
  );
}

export default App;
```

- The `App` component is the main component of the application.
- It manages state variables for amount, 'from' currency, 'to' currency, and converted amount.
- It uses the `useCurrencyInfo` custom hook to fetch currency information based on the 'from' currency.
- The `swap` function swaps 'from' and 'to' currencies and amounts.
- The `convert` function calculates the converted amount based on the input amount and exchange rates.

### 2. Card.js

```jsx
// Import statement
import { useId } from "react";

// Card component
function Card({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  // Generating unique ID for input element
  const inputId = useId();
  
  return (
    // JSX code
  );
}

export default Card;
```

- The `Card` component is a reusable component for displaying input fields and dropdowns.
- It uses the `useId` hook from React to generate a unique ID for the input element.
- It accepts props such as label, amount, currency options, and handlers for amount and currency change.

### 3. useCurrencyInfo.js

```jsx
// Import statements
import { useEffect, useState } from "react";

// Custom hook for fetching currency information
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // Fetching data using useEffect
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
```

- The `useCurrencyInfo` custom hook fetches currency information based on the provided currency using an external API.
- It uses `useState` to manage the fetched data and `useEffect` to trigger the fetch operation when the `currency` parameter changes.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Credits

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A next-generation frontend tooling.
- [Currency API](https://github.com/fawazahmed0/currency-api) - An API for fetching currency exchange rates.

