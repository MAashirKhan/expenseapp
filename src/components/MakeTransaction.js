import React from 'react'
const MakeTransaction = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Enter Income" autoComplete="off"/> 
                    {/* Autocomplete off means that it allows you to hide the previously added values */}
                    <input type="number" placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Enter Expense" autoComplete="off"/> 
                    {/* Autocomplete off means that it allows you to hide the previously added values */}
                    <input type="number" placeholder="Amount" autoComplete="off"/>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default MakeTransaction
