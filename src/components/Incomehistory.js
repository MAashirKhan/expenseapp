import React, { useContext } from 'react'
import IncomeTransactions from '../components/incomeTransaction'
import { GlobalContext } from '../Context/GlobalState'

const Incomehistory = () => {
    const { incomeTransactions } = useContext(GlobalContext);
    console.log(incomeTransactions);
    return (
      <div className="transactions transactions-income">
        <h2>Income Transaction History</h2>
            <ul className="transaction-list"> {incomeTransactions.map(incomeTransaction => (
            <IncomeTransactions
                key={incomeTransaction.id}
                incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
      </div>
    )
}
 
export default Incomehistory
