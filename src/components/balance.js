import React from 'react'

const balance = () => {
    return (
        <div className="balance">
            <h2>Current Balance</h2>
            <h3>$0.00</h3>
            <div className="income-expense">
                <div className="plus">
                    <h2>Income</h2>
                    <p>+$0.00</p>
                </div>
                <div className="minus">
                    <h2>Expense</h2>
                    <p>-$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default balance
