import { useState } from 'react'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection/SearchSection'
import NavButtons from './components/NavButtons/NavButtons'
import ShareholderList from './components/ShareholderList/ShareholderList'
import OwnerList from './components/OwnersList/OwnerList'
import TransactionHistoryTable from './components/TransactionHistoryTable/TransactionHistoryTable'
import ShareholderForm from './components/ShareholderForm/ShareholderForm'
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('shareholders')
  const [showShareholderForm, setShareholderForm] = useState(false)
  const [showTransactionForm, setShowTransactionForm] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setShareholderForm(false)
    setShowTransactionForm(false)
  }

  const handleShowShareholderForm = () => {
    setShareholderForm(true)
    setShowTransactionForm(false)
  }

  const handleShowTransactionForm = () => {
    setShowTransactionForm(true)
    setShareholderForm(false)
  }

  return (
    <>
      <div className="App">
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <SearchSection activeTab={activeTab} />
        <NavButtons
          onAddShareholderClick={handleShowShareholderForm}
          onAddTransactionClick={handleShowTransactionForm}
        />
        {showShareholderForm ? (
          <ShareholderForm />
        ) : showTransactionForm ? (
          <NewTransactionForm />
        ) : (
          <>
            {activeTab === 'shareholders' && <ShareholderList />}
            {activeTab === 'owners' && <OwnerList />}
            {activeTab === 'transactions' && <TransactionHistoryTable />}
          </>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
