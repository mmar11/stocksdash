import fetch from 'node-fetch';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

let stocksData = []
let stocksList = ['PETR4', 'VALE3']
let i = 0

async function getMktData(stocks) {
    while (stocks[i]) {
        await fetch(`https://api.oplab.com.br/v3/market/stocks/${stocks[i]}`, {
            method: 'GET',
            // body: JSON.stringify(todo),
            headers: { 'Access-Token': process.env.TOKEN }
        }).then(res => res.json())
            .then(data => {
                console.log(data.symbol)
                let resData = {
                    symbol: data.symbol,
                    name: data.name,
                    open: data.open,
                    high: data.high,
                    low: data.low,
                    close: data.close,
                    volume: data.volume,
                    financial_volume: data.financial_volume,
                    bid: data.bid,
                    ask: data.ask,
                    variation: data.variation,
                    iv_1y_rank: data.iv_1y_rank,
                    iv_current: data.iv_current,
                    stdv_1y: data.stdv_1y,
                    stdv_5d: data.stdv_5d,
                    date: new Date
                }
                stocksData.push(resData)
                i++
                console.log(stocksData)
            })

    }
}

getMktData(stocksList)