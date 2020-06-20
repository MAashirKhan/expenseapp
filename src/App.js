import React from 'react'
import Header from './components/header'
import Balance from './components/balance'
import MakeTrasaction from './components/MakeTransaction'
import Incomehistory from './components/Incomehistory'
import Expensehistory from './components/Expensehistory'
import {GlobalContextProvider} from './Context/GlobalState'
import './App.css';


const App = () => {
    return (
        <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
             <Header/>
             <Balance />
             <MakeTrasaction/>
             <Incomehistory/>
             <Expensehistory/>
            </div>
        </div>
        </GlobalContextProvider>
    )
}

export default App