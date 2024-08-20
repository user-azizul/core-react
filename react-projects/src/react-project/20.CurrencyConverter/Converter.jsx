import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./Style.css";

function Coverter() {
  const [currencys, setCurrencys] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        const currencyList = Object.keys(response.data.rates);
        console.log(currencyList);

        setCurrencys(currencyList);
        setFrom("USD");
        setTo("BDT");
      })
      .catch((error) => {
        console.error("Error fetching the currency list", error);
      });
  }, []);
  const convertTo = useCallback(() => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${from}`)
      .then((response) => {
        setIsMounted(true);
        const rate = response.data.rates[to];
        setConvertedAmount((amount * rate).toFixed(2));
      })
      .catch((error) => console.error("Get error from convertTo ", error));
  }, [amount, from, to]);
  useEffect(() => {
    if (isMounted) {
      convertTo();
    }
  }, [amount, from, to, convertTo, isMounted]);

  return (
    <div className="currency-continer">
      <h3 className="text-center ">Currency Converter</h3>
      <div className="currency">
        <div className=" flex amount">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className=" flex from">
          <label htmlFor="From">From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencys.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex to">
          <label htmlFor="From">From</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencys.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!convertedAmount && (
        <div className="buttons">
          <button onClick={convertTo} type="button" className="ConvertButton">
            Convert
          </button>
        </div>
      )}

      <div className="convertedAmount">
        {convertedAmount && (
          <h3 className="text-center ">
            {amount} {from} = {convertedAmount} {to}
          </h3>
        )}
      </div>
    </div>
  );
}

export default Coverter;
