import { useId } from "react"; // Importing useId hook from React

function Card({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd", // Default currency set to USD
  amountDisable = false,
  currencyDisable = false,
}) {
  const inputId = useId(); // Generating a unique ID for input element
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <div className="flex items-center justify-between mb-4">
          {/* Label for the card */}
          <label htmlFor={inputId} className="font-bold">
            {label}
          </label>
          <p className="text-sm">Currency Type</p> {/* Placeholder text */}
        </div>
        <div className="flex items-center gap-4">
          {/* Input field for amount */}
          <input
            id={inputId}
            type="number"
            disabled={amountDisable}
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* Dropdown for selecting currency */}
          <select
            disabled={currencyDisable}
            name="currency"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {/* Mapping through currencyOptions to create options */}
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Card;
