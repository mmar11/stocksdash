import fetch from 'node-fetch';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


let stocksList = ['PETR4', 'VALE3']
let i = 0

async function getMktData(stocks) {
    let stocksData = []
    while (stocks[i]) {

        await fetch(`https://api.oplab.com.br/v3/market/stocks/${stocks[i]}`, {
            method: 'GET',
            headers: { 'Access-Token': process.env.TOKEN }
        }).then(res => res.json())
            .then(data => {
                let n = new Date();
                let y = n.getFullYear();
                let m = n.getMonth() + 1;
                let d = n.getDate();

                let resData = {
                    symbol: data.symbol,
                    name: data.name,
                    open: data.open.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    open2: data.open,
                    high: data.high.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    high2: data.high,
                    low: data.low.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    low2: data.low,
                    close: data.close.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    close2: data.close,
                    volume: data.volume.toLocaleString('pt-br'),
                    volume2: data.volume,
                    financial_volume: data.financial_volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }),
                    bid: data.bid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    ask: data.ask.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
                    variation: data.variation.toFixed(2),
                    variation2: data.variation,
                    iv_1y_rank: data.iv_1y_rank.toFixed(2),
                    iv_current: data.iv_current.toFixed(2),
                    iv_current2: data.iv_current,
                    stdv_1y: (data.stdv_1y * 100).toFixed(2),
                    stdv_5d: (data.stdv_5d * 100).toFixed(2),
                    stdv_5d2: (data.stdv_5d * 100),
                    date: `${y}/${m}/${d}`
                }
                stocksData.push(resData)
                i++

            })

    }
    i = 0
    return stocksData
}

export default getMktData