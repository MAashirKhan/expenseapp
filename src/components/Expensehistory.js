import React, { useContext } from 'react'
import ExpenseTransaction from '../components/ExpenseTransaction'
import { GlobalContext } from '../Context/GlobalState'

const Expensehistory = () => {
    const { expenseTransactions } = useContext(GlobalContext);
    console.log(expenseTransactions);
    return (
        <div className="transactions transactions-expense">
        <h2>Expense Transaction History</h2>
        <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction= {expenseTransaction}
          />
        ))}
        </ul>
    </div>
    )
}

export default Expensehistory;
