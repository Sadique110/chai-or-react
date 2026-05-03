import { useState } from 'react'
import './App.css'
import InputBox from './component/InputBox'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [conversionAmount, setConversionAmount] = useState(0);
    const { data: currencyInfo, error } = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConversionAmount(amount);
        setAmount(conversionAmount);
    }

    const convert = () => {
        const rate = currencyInfo[to];
        const numericAmount = Number(amount);

        if (!rate || Number.isNaN(numericAmount)) {
            setConversionAmount(0);
            return;
        }

        setConversionAmount((numericAmount * rate).toFixed(2));
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/12960362/pexels-photo-12960362.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                currencyOptions={options}
                                selectedCurrency={from}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={conversionAmount}
                                onCurrencyChange={(currency) => setTo(currency)}
                                currencyOptions={options}
                                selectedCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        {error && (
                            <p className="mt-3 text-center text-sm font-medium text-red-700">
                                {error}. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );

  }

export default App
