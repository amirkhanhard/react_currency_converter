function InputBox(
    {
        label,
        currencyOptions,
        amount,
        currency,
        onAmountChange,
        onCurrencyChange,
        amountDisable = false      
    }
){
return (
    <>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
          <div className="flex items-center space-x-2 mt-1">
            <input type="number" className="border border-gray-300 rounded-lg p-2 w-full"
                    value={amount}
                    onChange={(e) => onAmountChange  && onAmountChange(e.target.value != "" ? Number(e.target.value) :"")}
                    disabled={amountDisable}
                    />
            <select className="border border-gray-300 rounded-lg p-2"
                    value={currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                {currencyOptions.map((currency) => (
                    <option  key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
          </div>
    </>
);
}
export default InputBox;