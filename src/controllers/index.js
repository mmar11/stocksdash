import getMktData from '../models/oplabapi.js'
import multer from 'multer'



let indexControlexibe = async (req, res) => {
    let stocksList = ['BOVA11', 'PETR4', 'VALE3', 'MGLU3', 'ABEV3', 'BBAS3']

    let getData = await getMktData(stocksList)

    res.render('exibe.ejs', { getData: getData })

}

let indexControlGet = async (req, res) => {
    // let stocksList = ['PETR4']


    // let stock = await getMktData(stocksList)
    // res.send(stock)


    res.render("./index.ejs")
}







export { indexControlexibe, indexControlGet }