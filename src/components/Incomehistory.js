import React from 'react'

const Incomehistory = () => {
    return (
        <div className="transactions transactions-income">
            <h2>Income Transaction History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Salary</span>
                    <span className="transaction-amount">$15000</span>
                    <button className="delete-btn"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </li>
            </ul>
        </div>
    )
}
 
export default Incomehistory
