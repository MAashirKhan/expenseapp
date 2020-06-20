import React, {useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
const Expensehistory = () => {
    const { incomeTransactions } = useContext(GlobalContext);
    console.log(incomeTransactions);
    return (
        <div className="transactions transactions-expense">
        <h2>Income Transaction History</h2>
        <ul className="transaction-list">
            {incomeTransactions.map(incomeTransactions => (
                <li className="transaction">
                <span className="transaction-text">{ incomeTransactions.incomeText }</span>
                <span className="transaction-amount">${ incomeTransactions.incomeAmount }</span>
                <button className="delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </li>
            ))}
            
        </ul>
    </div>
    )
}

export default Expensehistory
