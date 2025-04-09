import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertTedAmount, setConvertTedAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")

  // let currencyInfo = useCurrencyInfo(currencyFrom, currencyTo);
  let currencyInfo  = {
    "eur" : {
        "usd" : 1.10,
        "inr" : 94.64,
        "eur" : 1
    },
    "inr" : {
      "usd" : 0.012,
      "euro" : 0.011,
      "inr" : 1
    },
    "usd" : {
      "inr" : 86.41,
      "euro" : 0.91,
      "usd" : 1
    }
  };
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo)

  const convert = () => {
    let convertedAmount1 = amount * currencyInfo[currencyFrom][currencyTo];
    setConvertTedAmount(convertedAmount1);
    console.log(amount);
    console.log(currencyFrom);
    console.log(currencyTo);
    console.log(currencyInfo[currencyFrom][currencyTo]);
    console.log(convertedAmount1);
  }
  const swap = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    setAmount(convertTedAmount.toFixed(2));
    setConvertTedAmount(amount.toFixed(2));

  }
  return (
    <>
    <form
      onSubmit={(e) => {
          e.preventDefault();
          convert()
          
      }}
    >
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
        <div className="mb-4">
          <InputBox 
              label="From"
              currencyOptions={options}
              amount={amount}
              currency={currencyFrom}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(curr) => setCurrencyFrom(curr)}
              
          />
        </div>
        <div className="flex justify-center items-center mb-4">
          <button className="bg-purple-600 text-white rounded-lg px-4 py-1" onClick={swap}>swap</button>
        </div>
        <div className="mb-6">
          <InputBox 
              label="To"
              currencyOptions={options}
              amount={convertTedAmount}
              currency={currencyTo}
              // onAmountChange={(amount) => setConvertTedAmount(amount)}
              onCurrencyChange={(curr) => setCurrencyTo(curr)}
              amountDisable = {true}
              
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white rounded-lg w-full py-2">Convert {currencyFrom.charAt(0).toUpperCase()+currencyFrom.slice(1)} to {currencyTo.charAt(0).toUpperCase()+currencyTo.slice(1)}</button>
      </div>
    </div>
    </form>
    </>
  )
}

export default App
