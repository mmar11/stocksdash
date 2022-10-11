import getMktData from '../models/oplabapi.js'
import multer from 'multer'



let indexControlexibe = async (req, res) => {
    let stocksList = []

    stocksList.push(req.body.stock)


    let getData = await getMktData(stocksList)

    res.render('exibe.ejs', { getData: getData })

}

let indexControlGet = async (req, res) => {

    res.render("./index.ejs")
}







export { indexControlexibe, indexControlGet }