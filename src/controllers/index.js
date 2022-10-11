import getMktData from '../models/oplabapi.js'
import multer from 'multer'



let indexControlexibe = async (req, res) => {
    let stocksList = []

    stocksList.push(req.body.stock)


    let getaLLData = await getMktData(stocksList)
    let getData = [{
        symbol: getaLLData[0].symbol,
        name: getaLLData[0].name,
        open: getaLLData[0].open,
        high: getaLLData[0].high,
        low: getaLLData[0].low,
        close: getaLLData[0].close,
        volume: getaLLData[0].volume,
        financial_volume: getaLLData[0].financial_volume,
        bid: getaLLData[0].bid,
        ask: getaLLData[0].ask,
        variation: getaLLData[0].variation,
        iv_1y_rank: getaLLData[0].iv_1y_rank,
        iv_current: getaLLData[0].iv_current,
        stdv_1y: (getaLLData[0].stdv_1y),
        stdv_5d: (getaLLData[0].stdv_5d),
        date: getaLLData[0].date
    }]

    console.log(getData)

    res.render('exibe.ejs', { getData: getData })

}

let indexControlGet = async (req, res) => {

    res.render("./index.ejs")
}







export { indexControlexibe, indexControlGet }