import conexao from "./conexao.js"
import getMktData from "./oplabapi.js"


export async function getMketCloseDay() {

    let stocksList = ['PETR4', 'VALE3', 'BBAS3', 'ABEV3', 'TAEE11', 'MGLU3']
    let data = await getMktData(stocksList)
    console.log(data)

    data.forEach((obj) => {
        //SELEC / .selectall - Define the table you wish to access - string
        let table = "test"

        //SELECT / .selectcolDefine - the column you wish to SELECT - string
        let column = ''

        //INSERT / .insert - Define the params to INSERT - array of strings
        let param = [new Date, obj.symbol, obj.open2, obj.close2, obj.volume2, obj.variation2, obj.iv_current2, obj.stdv_5d2];
        console.log(param)

        //INSERT / .insert - Define a string with the column fields of the table, separate by ( , ) - string
        let colinsert = "date , symbol , open , close , volume , variation , iv_rank , desv_pad"




        let valinsert = () => {
            let val = "? "
            for (let i = 0; i < (param.length - 1); i++) {
                val += ", ? "
            }
            return val
        }


        let query = {
            selectall: `SELECT * FROM ${table}`,
            selectcol: `SELECT * FROM ${table} WHERE ${column} = ? `,
            insert: `INSERT INTO ${table} (${colinsert}) VALUES(${valinsert()})`
        }

        conexao(query.insert, param);

    })

}
//Define the query.
// setInterval(conexao, 60000, query.insert, param);


export function count() {
    let m = new Date
    let h = m.getUTCHours()
    let min = m.getUTCMinutes()
    console.log(h)
    if (h == 8) {
        getMketCloseDay()

    }
}


