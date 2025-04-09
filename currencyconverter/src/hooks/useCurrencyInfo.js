import {useEffect, useState} from "react"


function useCurrencyInfo(
    currencyFrom = "eur",
    currencyTo = "eur"
){
    const [data, setData] = useState({})
    let url = `/data_${currencyFrom}.json`;
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => { setData(res); console.log("usecurrency - "); console.log(res); console.log("usecurrency -end ");})
    }, [currencyFrom, currencyTo])
    return data
}

export default useCurrencyInfo;