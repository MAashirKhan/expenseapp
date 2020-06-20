import React from 'react'
import './App.css'
import Header from './components/header'
import Balance from './components/balance'
const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
             <Header/>
             <Balance />
            </div>
        </div>
    )
}

export default App