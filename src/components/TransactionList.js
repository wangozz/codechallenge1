import Transactiontable from './Transactiontable';

function TransactionList ({data}){

    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>Date</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                    <th>
                        <h3>Category</h3>
                    </th>
                    <th>
                        <h3>Amount</h3>
                    </th>
                </tr>

                {
                    data.map (dataItem => {
                        return <Transactiontable key = {dataItem.id} date = {dataItem.date} description = {dataItem.description}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default TransactionList